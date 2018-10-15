import { call, put, takeEvery } from "redux-saga/effects";
import actions from "../actions/movies";

const handleMovieAdd = payload => {};

function* addMovie(action) {
  try {
    const result = yield call(handleMovieAdd, action.payload);
    yield put({ type: actions.MOVIE_ADD_SUCCESS, result });
  } catch (e) {
    yield put({ type: actions.MOVIE_ERROR, error: e.message });
  }
}

export default function* newMovieSaga() {
  yield takeEvery(actions.MOVIE_ADD, addMovie);
}
