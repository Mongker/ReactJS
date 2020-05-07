import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/App';
import * as serviceWorker from './serviceWorker';

// Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

// Redux-Saga
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";

// components
import AppContainer from "./components/AppContainer";

// Reducers
import allReducers from "./reducers";

// UI ANT DESIGN
// import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

// const
// Middleware
const sagaMiddleware = createSagaMiddleware();
// Store
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
