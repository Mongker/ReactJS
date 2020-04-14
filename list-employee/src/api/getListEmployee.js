import axios from 'axios';

export function getEmployees() {
	return axios.get('http://dummy.restapiexample.com/api/v1/employees')
	.then(res => res.data)
	.catch(error => console.log(error));
}