import {put, takeEvery} from 'redux-saga/effects';
import {createActionSetToken, createActionSetUser, SIGN_OUT} from "../../actions";
import {clearToken} from "../../../utils/LocalStorageAccess";

function* signOutAsync(action) {
    yield put(createActionSetUser(null));
    yield put(createActionSetToken(null));
    yield clearToken();
}

export function* watchSignOutAsync() {
    yield takeEvery(SIGN_OUT, signOutAsync);
}
