import { call, put, takeEvery } from "redux-saga/effects";
import actions from "../actions/movies";
import axios from "axios";
import config from "./config";

const { api, apiKey } = config;

const handleMovieAdd = payload =>
  axios.post(
    api,
    {
      movie: payload.name,
      category: payload.category,
      rating: 0
    },
    {
      headers: {
        "x-api-key": apiKey
      }
    }
  );

function* addMovie(action) {
  try {
    const result = yield call(handleMovieAdd, action.payload);
    yield put({ type: actions.MOVIE_ADD_SUCCESS, result });
  } catch (e) {
    yield put({ type: "ERROR", error: e.message });
  }
}

export default function* newMovieSaga() {
  yield takeEvery(actions.MOVIE_ADD, addMovie);
}
