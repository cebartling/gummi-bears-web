import {takeEvery, put} from 'redux-saga/effects';
import {SIGN_OUT, createActionSetUser, createActionSetToken, createActionSetAuthenticated} from "../../actions";
import {getAuth0Client} from "../../../react-auth0-spa";
import {clearToken} from "../../../utils/LocalStorageAccess";

function* signOutAsync(action) {
    const auth0Client = yield getAuth0Client();
    yield auth0Client.logout({});
    const isAuthenticated = yield auth0Client.isAuthenticated();
    yield put(createActionSetAuthenticated(isAuthenticated));
    yield put(createActionSetUser(null));
    yield put(createActionSetToken(null));
    yield clearToken();
}

export function* watchSignOutAsync() {
    yield takeEvery(SIGN_OUT, signOutAsync);
}
