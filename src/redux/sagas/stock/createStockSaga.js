import {takeEvery, select} from 'redux-saga/effects';
import apolloClient from "../../../graphql/apolloClient";
import {v4 as uuidv4} from 'uuid';
import CreateStockMutation from "../../../graphql/mutations/stock/CreateStockMutation";
import {userIdSelector} from "../../selectors";
import {CREATE_STOCK} from "../../actions";

function* createAndAssociateStock(action, userId) {
    const result = yield apolloClient.mutate({
        mutation: CreateStockMutation,
        variables: {
            input: {
                clientMutationId: uuidv4(),
                input: {
                    name: action.payload.name,
                    symbol: action.payload.symbol,
                    userId: userId
                }
            }
        }
    });
    // TODO: Change this.
    return result.data.createUser;
}

function* createStockAsync(action) {
    // Use a select effect to execute a Redux selector on the store's state
    // More info at https://github.com/redux-saga/redux-saga/tree/master/docs/api#selectselector-args
    const userId = yield select(userIdSelector);
    yield console.log(JSON.stringify(action));
}

export function* watchCreateStockAsync() {
    yield takeEvery(CREATE_STOCK, createStockAsync);
}
