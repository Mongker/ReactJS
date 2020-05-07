import { call } from "redux-saga/effects";
import { getListWatch } from "./layDanhSachSaga";
export default function* rootSaga() {
  yield call(getListWatch);
}
