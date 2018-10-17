import { call, put, takeEvery } from "redux-saga/effects";
import actions from "../actions/movies";
import axios from "axios";
import config from "./config";

const { api, apiKey } = config;

const handleMovieRate = payload =>
  axios.post(
    api,
    {
      movie: payload.name,
      category: payload.category,
      rating: payload.rating
    },
    {
      headers: {
        "x-api-key": apiKey
      }
    }
  );

function* rateMovie(action) {
  try {
    const result = yield call(handleMovieRate, action.payload);
    yield put({ type: actions.MOVIE_RATE_SUCCESS, result });
  } catch (e) {
    yield put({ type: "ERROR", error: e.message });
  }
}

export default function* newMovieSaga() {
  yield takeEvery(actions.MOVIE_RATE, rateMovie);
}
