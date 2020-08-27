import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './effects';
import {rootReducer} from "./reducers";
import {createBrowserHistory} from "history";
import {routerMiddleware} from 'connected-react-router'

const sagaMiddleware = createSagaMiddleware();
const reduxDevTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION__() : (f: any) => f;

export const history = createBrowserHistory();

// const persistedState = localStorage.getItem('overlayState')
//     ? JSON.parse(localStorage.getItem('overlayState')!)
//     : {}

export const store = createStore(
    rootReducer(history),
    // persistedState,
    compose(
        applyMiddleware(sagaMiddleware),
        applyMiddleware(routerMiddleware(history)),
        reduxDevTools
    ),
);
// store.subscribe(()=>{
//     localStorage.setItem('overlayState', JSON.stringify(store.getState()))
// });
sagaMiddleware.run(rootSaga);