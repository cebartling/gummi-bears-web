import {select, takeEvery} from 'redux-saga/effects';
import {v4 as uuidv4} from 'uuid';
import apolloClient from "../../../graphql/apolloClient";
import {userIdSelector} from "../../selectors";
import {CREATE_ORDER} from "../../actions";
// import CreateOrderMutation from "../../../graphql/mutations/order/CreateOrderMutation";
// import {now} from "moment";

function* createStockOrder(action) {
    console.info(action);
    // const result = yield apolloClient.mutate({
    //     mutation: CreateOrderMutation,
    //     variables: {
    //         input: {
    //             input: {
    //                 userStockId: action.payload.order.userStock.id,
    //                 priceInCents: action.payload.order.priceInCents,
    //                 sharesCount: action.payload.order.sharesCount,
    //                 orderTimestamp: now(),
    //                 transactionType: action.payload.order.transactionType
    //             },
    //             clientMutationId: uuidv4()
    //         }
    //     }
    // });
    // return result.data.createOrder;
}

function* createOrderAsync(action) {
    // Use a select effect to execute a Redux selector on the store's state
    // More info at https://github.com/redux-saga/redux-saga/tree/master/docs/api#selectselector-args
    const userId = yield select(userIdSelector);
    const createOrderResult = yield createStockOrder(action);
    // if (createStockResult.userStock) {
    //     yield put(push('/stocks', {shouldRefetch: true}))
    //     toast.success(`Associated ${action.payload.stock.companyName} stock with your profile.`,
    //         {position: toast.POSITION.BOTTOM_RIGHT});
    // } else {
    //     yield console.log(`Errors: ${createStockResult.errors}`)
    //     toast.error(`Unable to associate ${action.payload.stock.companyName} stock with your profile.`,
    //         {position: toast.POSITION.BOTTOM_RIGHT});
    // }
}

export function* watchCreateOrderAsync() {
    yield takeEvery(CREATE_ORDER, createOrderAsync);
}
