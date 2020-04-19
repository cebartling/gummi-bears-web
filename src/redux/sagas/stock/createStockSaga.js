import {takeEvery, select, put} from 'redux-saga/effects';
import apolloClient from "../../../graphql/apolloClient";
import {v4 as uuidv4} from 'uuid';
import CreateStockMutation from "../../../graphql/mutations/stock/CreateStockMutation";
import {userIdSelector} from "../../selectors";
import {CREATE_STOCK} from "../../actions";
import {push} from 'connected-react-router'

function* createAndAssociateStock(action, userId) {
    const result = yield apolloClient.mutate({
        mutation: CreateStockMutation,
        variables: {
            input: {
                input: {
                    name: action.payload.stock.companyName,
                    symbol: action.payload.stock.symbol,
                    userId: userId
                },
                clientMutationId: uuidv4()
            }
        }
    });
    return result.data.createStock;
}

function* createStockAsync(action) {
    // Use a select effect to execute a Redux selector on the store's state
    // More info at https://github.com/redux-saga/redux-saga/tree/master/docs/api#selectselector-args
    const userId = yield select(userIdSelector);
    const createStockResult = yield createAndAssociateStock(action, userId);
    if (createStockResult.userStock) {
        yield put(push('/stocks'))
    } else {
        yield console.log(`Errors: ${createStockResult.errors}`)
    }
}

export function* watchCreateStockAsync() {
    yield takeEvery(CREATE_STOCK, createStockAsync);
}
