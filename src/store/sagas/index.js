import { all } from "redux-saga/effects";
import newMovie from "./newMovie";

export default function* rootSaga(getState) {
  yield all([newMovie()]);
}
