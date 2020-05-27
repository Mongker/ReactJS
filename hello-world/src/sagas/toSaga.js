// action type
import { UP, DOWN } from "../action/actionTypes";

// saga effects
import { delay } from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";

export function* toSaga() {
  console.log("Hello saga");
}

export function* sagaGoUp() {
  console.log("Hello sagaUp");
}
export function* sagaUp() {
  yield takeEvery(UP, sagaGoUp);
}

export function* sagaGoDown() {
  console.log("Hello sagaDown");
}
export function* sagaDown() {
  yield takeEvery(DOWN, sagaGoDown);
}
