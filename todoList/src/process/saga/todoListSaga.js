import {takeEvery, put, call} from "redux-saga/effects";

// Bases
import {convertObject} from '../../components/base/covertToObject';

// Actions
import {ACTION_UI} from '../actions/todoUiActions';
import {todoListReducer} from '../actions/todoListActions';

function* doDeleteWorker(action) {
    // do something
    const {payload} = action;
    let listLocal = JSON.parse(localStorage.getItem('todoList'));
    const listLocalNew = [];
    for (let i = 0; i < listLocal.length; i++ ) {
        if(listLocal[i].id.id !== payload.id.id) {
            listLocalNew.push(listLocal[i]);
        }
    }
    localStorage.setItem('todoList', JSON.stringify(listLocalNew));
    yield put(todoListReducer.update(listLocalNew));
}

function* doCreateWorker(action) {
    // do something
    const {payload} = action;
    let arrayTodo = [];
    let listLocal = JSON.parse(localStorage.getItem('todoList'));
    if (localStorage.length === 0) {
        arrayTodo.push(payload.value);
        localStorage.setItem('todoList', JSON.stringify(arrayTodo));
    } else if (listLocal.length === 1) {
        arrayTodo.push(listLocal[0]);
        arrayTodo.push(payload.value);
        localStorage.setItem('todoList', JSON.stringify(arrayTodo));
    } else if (listLocal.length >= 2) {
        for (let i = 0; i < listLocal.length; i++) {
            arrayTodo.push(listLocal[i]);
        }
        arrayTodo.push(payload.value);
        localStorage.setItem('todoList', JSON.stringify(arrayTodo));
    } else if(listLocal.length === 0) {
        arrayTodo.push(payload.value);
        localStorage.setItem('todoList', JSON.stringify(arrayTodo));
    }
    yield put(todoListReducer.update(arrayTodo));
}

function* doUpdateWorker(action) {
    const listAll = JSON.parse(localStorage.getItem('todoList'));
    yield put(todoListReducer.update(listAll));
}
function* doGetCompletedWorker(action) {
    // do something
    const {payload} = action;
    if(localStorage.length === 1) {
        localStorage.setItem('todoList', JSON.stringify(payload.todoList));
    }
    yield put(todoListReducer.update(payload.todoList));
}

function* doGetListWorker(action) {
    // do something
}

function* singleActiveOrCompletedWorker(action) {
    const {payload} = action;
    // do something
    const listAll = JSON.parse(localStorage.getItem('todoList'));
    let listAllNew = [];
    for(let i = 0; i < listAll.length; i++) {
        if(listAll[i].id.id === payload.id) {
            listAllNew.push(payload.object);
        } else {
            listAllNew.push(listAll[i]);
        }
    }
    localStorage.setItem('todoList', JSON.stringify(listAllNew));
    yield put(todoListReducer.update(listAllNew));
}

export function* deleteWatcher() {
    yield takeEvery(ACTION_UI.DELETE, doDeleteWorker);
}

export function* createWatcher() {
    console.log("vao create watcher get employee")
    yield takeEvery(ACTION_UI.CREATE, doCreateWorker);
}

export function* updateWatcher() {
    console.log("vao delete watcher get employee")
    yield takeEvery(ACTION_UI.UPDATE, doUpdateWorker);
}

export function* getListWatcher() {
    console.log("vao edit watcher ");
    yield takeEvery(ACTION_UI.GET_LIST, doGetListWorker);
}

export function* getCompletedWatcher() {
    console.log("vao edit watcher ");
    yield takeEvery(ACTION_UI.COMPLETED_ALL, doGetCompletedWorker);
}

export function* singleActiveOrCompletedWatcher() {
    console.log("vao edit watcher ");
    yield takeEvery(ACTION_UI.SINGLE, singleActiveOrCompletedWorker);
}
