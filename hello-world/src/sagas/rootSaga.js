// saga effects
import { delay } from "redux-saga";
import { all } from "redux-saga/effects";

// saga
import { toSaga, sagaUp, sagaDown } from "./toSaga";

export default function* rootSaga() {
  yield all([toSaga, sagaUp(), sagaDown()]);
}
