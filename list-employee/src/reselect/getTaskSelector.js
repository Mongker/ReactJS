import { createSelector } from 'reselect';

const getTask = (state, props) => {
	if(props.id === '') {
		return state.employees;
	} else {
		const empId = props.id;
		const employees = state.employees.find((e, i) => e.id === empId);
		return [employees];
	}
}

export const makeGetEmployeeState = () => createSelector(
	[ getTask ],
	(employees) => employees
)