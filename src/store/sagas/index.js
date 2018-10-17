import { all } from "redux-saga/effects";
import newMovie from "./newMovie";
import removeMovie from "./removeMovie";
import rateMovie from "./rateMovie";
import listMovies from "./listMovies";

export default function* rootSaga(getState) {
  yield all([newMovie(), removeMovie(), rateMovie(), listMovies()]);
}
