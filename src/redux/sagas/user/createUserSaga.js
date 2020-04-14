import {takeEvery} from 'redux-saga/effects';
import {CREATE_USER} from "../../actions";

function* createUserAsync(action) {
    yield console.log(JSON.stringify(action));
}

export function* watchCreateUserAsync() {
    yield takeEvery(CREATE_USER, createUserAsync);
}
