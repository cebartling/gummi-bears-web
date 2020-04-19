import createSagaMiddleware from 'redux-saga';
import {routerMiddleware} from 'connected-react-router';
import {applyMiddleware, compose, createStore} from 'redux';
import createRootReducer from './reducers';
import rootSaga from './sagas';
import history from '../history';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    createRootReducer(history),
    composeEnhancers(
        applyMiddleware(
            sagaMiddleware,
            routerMiddleware(history),
        )
    )
);
sagaMiddleware.run(rootSaga);

// TODO: Kick off any Redux actions that need to run before the web application is loaded.
//store.dispatch(loadToDoList());

export default store;
