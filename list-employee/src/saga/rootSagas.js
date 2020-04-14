import { all } from 'redux-saga/effects';
import { createEmployeeWatcher, repairEmployeeWatcher, deleteEmployeeWatcher, getListEmployeeWatcher } from './employeeSaga';
import { showAddFormWatcher } from './showAddFormSaga';

export default function* rootSagas() {
	yield all([
		getListEmployeeWatcher(),
		createEmployeeWatcher(),
		repairEmployeeWatcher(),
		deleteEmployeeWatcher(),
		showAddFormWatcher()
	]);
}