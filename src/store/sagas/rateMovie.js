import { call, put, takeEvery } from "redux-saga/effects";
import actions from "../actions/movies";

const handleMovieRate = payload => {};

function* rateMovie(action) {
  try {
    const result = yield call(handleMovieRate, action.payload);
    yield put({ type: actions.MOVIE_RATE_SUCCESS, result });
  } catch (e) {
    yield put({ type: actions.MOVIE_ERROR, error: e.message });
  }
}

export default function* newMovieSaga() {
  yield takeEvery(actions.MOVIE_RATE, rateMovie);
}
