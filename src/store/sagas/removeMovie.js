import { call, put, takeEvery } from "redux-saga/effects";
import actions from "../actions/movies";

const handleMovieRemove = name => {};

function* removeMovie(action) {
  try {
    const result = yield call(handleMovieRemove, action.name);
    yield put({ type: actions.MOVIE_REMOVE_SUCCESS, result });
  } catch (e) {
    yield put({ type: actions.MOVIE_ERROR, error: e.message });
  }
}

export default function* removeMovieSaga() {
  yield takeEvery(actions.MOVIE_REMOVE, removeMovie);
}
