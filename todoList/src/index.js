// Library base
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Components
import App from './App';

// Styles
import './index.css';

// Redux
import {Provider} from 'react-redux';
import {applyMiddleware, createStore, compose} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import Reducer from './process/reducer/Reducer';

// Saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './process/saga/rootSaga';
// Middleware Saga
const sagaMiddleware = createSagaMiddleware();

// Store Redux
const store = createStore(Reducer, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
