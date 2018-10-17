import { call, put, takeEvery } from "redux-saga/effects";
import actions from "../actions/movies";
import axios from "axios";
import config from "./config";

const { api, apiKey } = config;

const handleMovieRemove = name =>
  axios.delete(api, {
    headers: {
      "x-api-key": apiKey
    },
    data: {
      name
    }
  });

function* removeMovie(action) {
  try {
    const result = yield call(handleMovieRemove, action.name);
    yield put({ type: actions.MOVIE_REMOVE_SUCCESS, result });
  } catch (e) {
    yield put({ type: "ERROR", error: e.message });
  }
}

export default function* removeMovieSaga() {
  yield takeEvery(actions.MOVIE_REMOVE, removeMovie);
}
