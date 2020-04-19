import {put, takeEvery} from 'redux-saga/effects';
import {createActionSetAuthenticated, createActionSetToken, createActionSetUser, SIGN_OUT} from "../../actions";
import {clearToken} from "../../../utils/LocalStorageAccess";

function* signOutAsync(action) {
    // const auth0Client = yield getAuth0Client();
    // yield auth0Client.logout({});
    // const isAuthenticated = yield auth0Client.isAuthenticated();
    yield put(createActionSetAuthenticated(false));
    yield put(createActionSetUser(null));
    yield put(createActionSetToken(null));
    yield clearToken();
}

export function* watchSignOutAsync() {
    yield takeEvery(SIGN_OUT, signOutAsync);
}
