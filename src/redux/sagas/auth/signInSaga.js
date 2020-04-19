import {put, takeEvery} from 'redux-saga/effects';
import {v4 as uuidv4} from 'uuid';
import {
    createActionSetAuthenticated,
    createActionSetToken,
    createActionSetUser,
    createActionSetUserId,
    SIGN_IN
} from "../../actions";
import {getAuth0Client} from "../../../react-auth0-spa";
import apolloClient from "../../../graphql/apolloClient";
import UserByUsernameQuery from "../../../graphql/queries/user/UserByUsernameQuery";
import CreateUserMutation from "../../../graphql/mutations/user/CreateUserMutation";
import {setToken} from "../../../utils/LocalStorageAccess";

function* getUser(auth0User) {
    const result = yield apolloClient.query({
        query: UserByUsernameQuery,
        variables: {
            username: auth0User['email']
        }
    });
    return result.data.userByUsername ? result.data.userByUsername : null;
}

function* createUser(auth0User) {
    const result = yield apolloClient.mutate({
        mutation: CreateUserMutation,
        variables: {
            input: {
                clientMutationId: uuidv4(),
                input: {
                    firstName: auth0User['given_name'],
                    lastName: auth0User['family_name'],
                    username: auth0User['email']
                }
            }
        }
    });
    return result.data.createUser;
}

function* signInAsync(action) {
    const auth0Client = yield getAuth0Client();
    yield auth0Client.loginWithPopup({display: 'page'});
    yield put(createActionSetAuthenticated(yield auth0Client.isAuthenticated()));
    const auth0User = yield auth0Client.getUser();
    yield put(createActionSetUser(auth0User));
    const accessToken = yield auth0Client.getTokenWithPopup({
        audience: process.env.REACT_APP_AUTH0_AUDIENCE,
        scope: 'execute:graphql'
    });
    yield put(createActionSetToken(accessToken));
    setToken(accessToken);
    const systemUser = yield getUser(auth0User);
    if (systemUser) {
        yield put(createActionSetUserId(systemUser.id));
    } else {
        const mutationResult = yield createUser(auth0User);
        console.log('Created user in backend', mutationResult);
        if (mutationResult.user) {
            yield put(createActionSetUserId(mutationResult.user.id));
        }
        // TODO: Handle errors
    }
}

export function* watchSignInAsync() {
    yield takeEvery(SIGN_IN, signInAsync);
}
