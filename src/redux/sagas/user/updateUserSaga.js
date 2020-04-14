import {takeEvery} from 'redux-saga/effects';
import {UPDATE_USER} from "../../actions";

function* updateUserAsync(action) {
    yield console.log(JSON.stringify(action));
}

export function* watchUpdateUserAsync() {
    yield takeEvery(UPDATE_USER, updateUserAsync);
}
