import { combineReducers } from 'redux';
import employees from './employeeReducer';
import showAddForm from './showAddFormReducer';

const reducer = combineReducers({
	employees,
	showAddForm
});

export default reducer;