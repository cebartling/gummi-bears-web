import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import user from './userReducer';
import order from "./orderReducer";

const createRootReducer = (history) => {
    return combineReducers({
        user,
        order,
        router: connectRouter(history),
    });
}

export default createRootReducer;
