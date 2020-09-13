import {CREATE_ORDER} from "../actions";

const initialState = {
  pricePerShare: undefined,
  numberOfShares: undefined
};

const order = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      const {order} = action.payload;
      return Object.assign({}, state, {...order});
    default:
      return state;
  }
};

export default order;
