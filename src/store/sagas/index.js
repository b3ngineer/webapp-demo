import { all } from "redux-saga/effects";
import newMovie from "./newMovie";
import removeMovie from "./removeMovie";
import rateMovie from "./rateMovie";

export default function* rootSaga(getState) {
  yield all([newMovie(), removeMovie(), rateMovie()]);
}
