// import { getEmployees } from '../api/getListEmployee';

// const defaultState = async () => await getEmployees();

const employees = (state = [], action) => {
	switch(action.type) {
		case 'CREATE_EMPLOYEE':
			return [...state, action.employee ];
		case 'DELETE_EMPLOYEE':
			return [...state.filter((e, i) => e.id !== action.id) ];
		case 'GET_LIST_EMPLOYEE':
			return state;
		case 'GET_LIST_EMPLOYEE_SUCCESS':
			return action.employees;
		case 'REPAIR_EMPLOYEE':
			const employees = [...state];	
			let index = -1;
	    	for(let i = 0; i < employees.length; i++){
	    		if(employees[i].id === action.employee.id){
	    			index = i;
	    			break;
	    		}
	    	}
			employees[index] = action.employee;
			return employees;
		default:
			return state;
	}
}

export default employees;