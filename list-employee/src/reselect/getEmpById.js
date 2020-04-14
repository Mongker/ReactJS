import { createSelector } from 'reselect';

const getEmp = (state, props) => {
	if(props.match.params.emp !== undefined) {
		const empId = props.match.params.emp;
		const employee = state.employees.find((e, i) => e.id === empId);
		return employee;
	}
}
export const makeGetEmployeeState = () => createSelector(
	[ getEmp ],
	(employee) => employee
)