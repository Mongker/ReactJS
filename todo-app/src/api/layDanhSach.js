import axios from "axios";

export function layDanhSach() {
  return axios
    .get("http://dummy.restapiexample.com/api/v1/employees")
    .then(res => {
      debugger;
      return res.data;
    })
    .catch(error => {
      debugger;
      console.log(error);
    });
}
