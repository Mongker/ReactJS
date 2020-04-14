import axios from 'axios';

export function repairEmployee(employee) {
	return axios.put(`http://dummy.restapiexample.com/api/v1/update/${employee.id}`, employee)
	.then(res => res)
	.catch(error => console.log(error));
}
