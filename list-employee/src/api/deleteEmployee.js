import axios from 'axios';

export function deleteEmployee(id) {
	return axios.delete(`http://dummy.restapiexample.com/api/v1/delete/${id}`)
	.then(res => res)
	.catch(error => console.log(error));
}