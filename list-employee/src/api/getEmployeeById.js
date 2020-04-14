import axios from 'axios';

export function getEmployeeById(id) {
	return axios.get(`http://dummy.restapiexample.com/api/v1/employee/${id}`)
	.then(res => {
		return res.data;
	})
	.catch(error => console.log(error));
}