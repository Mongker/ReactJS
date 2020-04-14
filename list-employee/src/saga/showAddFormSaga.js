import * as actionType from '../action/actionType';
import { takeEvery } from 'redux-saga/effects';

function* addForm() {
	yield console.log("da chay vao addForm saga!!!");
}

export function* showAddFormWatcher() {
	yield takeEvery(actionType.SHOW_ADD_FORM, addForm);
}