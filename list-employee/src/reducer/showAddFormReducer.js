const showAddForm = (state = false, action) => {
	switch(action.type) {
		case 'SHOW_ADD_FORM':
			return !state;
		default: 
			return state;
	}
}
export default showAddForm;
