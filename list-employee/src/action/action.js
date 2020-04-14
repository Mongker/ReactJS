import * as actionType from './actionType';

export function createEmployee(employee) {
	return { type: actionType.CREATE_EMPLOYEE, employee }
}

export function deleteEmployee(id) {
	return { type: actionType.DELETE_EMPLOYEE, id }
}

export function getEmployeeById(id) {
	return { type: actionType.GET_EMPLOYEE_BY_ID, id }
}

export function getListEmployee() {
	return { type: actionType.GET_LIST_EMPLOYEE }
}

export function repairEmployee(employee) {
	return { type: actionType.REPAIR_EMPLOYEE, employee }
}

export function showAddForm() {
	return { type: actionType.SHOW_ADD_FORM }
}