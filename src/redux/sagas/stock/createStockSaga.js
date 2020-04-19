import {takeEvery} from 'redux-saga/effects';
import {CREATE_STOCK} from "../../actions";

function* createStockAsync(action) {
    yield console.log(JSON.stringify(action));
}

export function* watchCreateStockAsync() {
    yield takeEvery(CREATE_STOCK, createStockAsync);
}
