import axios from 'axios';

export function createEmployee(employee) {
	return axios.post('http://dummy.restapiexample.com/api/v1/create', employee)
	.then(res => res.data)
	.catch(error => console.log(error));

} 