import { LAY_DANH_SACH, THANH_CONG } from "../actions/actionTypes";

// saga effects
import { put, takeEvery } from "redux-saga/effects";

// api
// import { getEmployees } from "../api/getEmployees.js";

import axios from "axios";
export function* getListEmp() {
  const dataObj = yield axios
    .get('http://dummy.restapiexample.com/api/v1/employees')
    .then(res => {
      debugger;
      return res.data;
    })
    .catch(error => {
      debugger;
      console.log(error);
    });
    yield put({type: LAY_DANH_SACH, dataObj})
}

export function* getListWatch() {
  yield takeEvery(THANH_CONG, getListEmp);
}
