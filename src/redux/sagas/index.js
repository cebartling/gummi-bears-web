import {all} from 'redux-saga/effects';
import {watchSignInAsync} from "./auth/signInSaga";
import {watchSignOutAsync} from "./auth/signOutSaga";
import {watchCreateUserAsync} from "./user/createUserSaga";
import {watchCreateStockAsync} from "./stock/createStockSaga";
import {watchCreateWatchlistStockAsync} from "./stock/createWatchlistStockSaga";
import {watchCreateOrderAsync} from "./order/createOrderSaga";

export default function* rootSaga() {
    yield all([
        watchSignInAsync(),
        watchSignOutAsync(),
        watchCreateUserAsync(),
        watchCreateStockAsync(),
        watchCreateWatchlistStockAsync(),
        watchCreateOrderAsync(),
    ]);
}
