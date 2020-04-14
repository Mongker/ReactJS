import * as actionType from '../action/actionType';
import { takeEvery, put, take, call } from 'redux-saga/effects';
import { getEmployees } from '../api/getListEmployee';
import { createEmployee } from '../api/createEmployee';
import { deleteEmployee } from '../api/deleteEmployee';
import { repairEmployee } from '../api/repairEmployee';

function* createEmp(action) {
	const employee = {
		name: action.employee.employee_name,
		salary: action.employee.employee_salary,
		age: action.employee.employee_age,
	};
	yield createEmployee(employee);
}

function* deleteEmp(action) {
	const employee = yield deleteEmployee(action.id);
}

function* repairEmp(action) {
	const employee = {
		id: action.employee.id,
		name: action.employee.employee_name,
		salary: action.employee.employee_salary,
		age: action.employee.employee_age,
	};
	yield repairEmployee(employee);
}

function* getListEmp() {
	const employees = yield getEmployees();
	yield put({type: 'GET_LIST_EMPLOYEE_SUCCESS', employees});
}

export function* createEmployeeWatcher() {
	yield takeEvery(actionType.CREATE_EMPLOYEE, createEmp);
}

export function* deleteEmployeeWatcher() {
	yield takeEvery(actionType.DELETE_EMPLOYEE, deleteEmp);
}

export function* repairEmployeeWatcher() {
	yield takeEvery(actionType.REPAIR_EMPLOYEE, repairEmp);
}

export function* getListEmployeeWatcher() {
	while(true){
		const value = yield take('GET_LIST_EMPLOYEE');
		yield call(getListEmp);
	}
}