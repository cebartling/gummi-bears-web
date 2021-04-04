import {SET_TOKEN, SET_USER, SET_USER_ID} from "../actions";

const initialState = {
  email: 'maxwell.johnson@example.com',
  token: null,
  isAuthenticated: false,
  userId: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const {user} = action.payload;
      return Object.assign({}, state, {...user});
    case SET_TOKEN:
      const {token} = action.payload;
      return Object.assign({}, state, {token});
    case SET_USER_ID:
      const {userId} = action.payload;
      return Object.assign({}, state, {userId});
    default:
      return state;
  }
};

export default user;
