import {put, takeEvery} from 'redux-saga/effects';
import {createActionSetAuthenticated, createActionSetToken, createActionSetUserId, SIGN_IN} from "../../actions";
import apolloClient from "../../../graphql/apolloClient";
import {setToken} from "../../../utils/LocalStorageAccess";
import UserByAuthTokenQuery from "../../../graphql/queries/user/UserByAuthTokenQuery";

function* getUser() {
    const result = yield apolloClient.query({
        query: UserByAuthTokenQuery,
        variables: {
            authToken: process.env.REACT_APP_AUTH_TOKEN
        }
    });
    return result.data.userByAuthToken ? result.data.userByAuthToken : null;
}

// function* createUser(auth0User) {
//     const result = yield apolloClient.mutate({
//         mutation: CreateUserMutation,
//         variables: {
//             input: {
//                 clientMutationId: uuidv4(),
//                 input: {
//                     firstName: auth0User['given_name'],
//                     lastName: auth0User['family_name'],
//                     username: auth0User['email']
//                 }
//             }
//         }
//     });
//     return result.data.createUser;
// }

function* signInAsync(action) {
    yield put(createActionSetToken(process.env.REACT_APP_AUTH_TOKEN));
    yield put(createActionSetAuthenticated(true));
    setToken(process.env.REACT_APP_AUTH_TOKEN);
    const currentUser = yield getUser();
    if (currentUser) {
        yield put(createActionSetUserId(currentUser.id));
    }
}

export function* watchSignInAsync() {
    yield takeEvery(SIGN_IN, signInAsync);
}
