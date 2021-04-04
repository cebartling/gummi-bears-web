import {put, takeEvery} from 'redux-saga/effects';
import {createActionSetToken, createActionSetUserId, SIGN_IN} from '../../actions';
import apolloClient from '../../../graphql/apolloClient';
import {setToken} from '../../../utils/LocalStorageAccess';
import UserByUsernameQuery from "../../../graphql/queries/user/UserByUsernameQuery";

function* getUser(action) {
    const result = yield apolloClient.query({
        query: UserByUsernameQuery,
        variables: {
            username: action.payload.email
        }
    });
    return result.data.userByUsername ? result.data.userByUsername : null;
}

function* signInAsync(action) {
    yield put(createActionSetToken(action.payload.idToken));
    setToken(action.payload.idToken);
    const currentUser = yield getUser(action);
    if (currentUser) {
        yield put(createActionSetUserId(currentUser.id));
    }
}

export function* watchSignInAsync() {
    yield takeEvery(SIGN_IN, signInAsync);
}
