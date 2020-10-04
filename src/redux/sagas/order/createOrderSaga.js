import {put, takeEvery} from 'redux-saga/effects';
import {v4 as uuidv4} from 'uuid';
import apolloClient from "../../../graphql/apolloClient";
import {CREATE_ORDER} from "../../actions";
import CreateOrderMutation from "../../../graphql/mutations/order/CreateOrderMutation";
import {DateTime} from "luxon";
import {push} from 'connected-react-router'
import {toast} from 'react-toastify';

function* createStockOrder(action) {
    const priceInCents = parseFloat(action.payload.order.pricePerShare) * 100;
    const orderTimestamp = DateTime.local().toString();
    const sharesCount = parseInt(action.payload.order.sharesCount);
    const result = yield apolloClient.mutate({
        mutation: CreateOrderMutation,
        variables: {
            input: {
                input: {
                    userStockId: action.payload.order.userStockId,
                    priceInCents: priceInCents,
                    sharesCount: sharesCount,
                    orderTimestamp: orderTimestamp,
                    transactionType: action.payload.order.transactionType
                },
                clientMutationId: uuidv4()
            }
        }
    });
    return result.data.createOrder;
}

function* createOrderAsync(action) {
    // console.info(action);
    const createOrderResult = yield createStockOrder(action);
    if (createOrderResult.order?.id) {
        yield put(push('/orders', {shouldRefetch: true}))
        toast.success(`Created new ${action.payload.order.transactionType} order.`,
            {position: toast.POSITION.BOTTOM_RIGHT});
    } else {
        yield console.log(`Errors: ${createOrderResult.errors}`)
        toast.error(`Unable to new ${action.payload.order.transactionType} order.`,
            {position: toast.POSITION.BOTTOM_RIGHT});
    }
}

export function* watchCreateOrderAsync() {
    yield takeEvery(CREATE_ORDER, createOrderAsync);
}
