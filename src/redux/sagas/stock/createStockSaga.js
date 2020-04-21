import {takeEvery, select, put} from 'redux-saga/effects';
import {v4 as uuidv4} from 'uuid';
import {push} from 'connected-react-router'
import {toast} from 'react-toastify';
import apolloClient from "../../../graphql/apolloClient";
import CreateStockMutation from "../../../graphql/mutations/stock/CreateStockMutation";
import {userIdSelector} from "../../selectors";
import {CREATE_STOCK} from "../../actions";

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
        yield put(push('/stocks', {shouldRefetch: true}))
        toast.success(`Associated ${action.payload.stock.companyName} stock with your profile.`,
            {position: toast.POSITION.BOTTOM_RIGHT});
    } else {
        yield console.log(`Errors: ${createStockResult.errors}`)
        toast.error(`Unable to associate ${action.payload.stock.companyName} stock with your profile.`,
            {position: toast.POSITION.BOTTOM_RIGHT});
    }
}

export function* watchCreateStockAsync() {
    yield takeEvery(CREATE_STOCK, createStockAsync);
}
