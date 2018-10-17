import { call, put, takeEvery } from "redux-saga/effects";
import actions from "../actions/movies";
import axios from "axios";
import config from "./config";

const { api, apiKey } = config;

const handleMovieList = () =>
  axios
    .get(api, {
      headers: {
        "x-api-key": apiKey
      }
    })
    .then(result => {
      if (result.data && result.data.Items) {
        return result.data.Items.reduce((acc, item) => {
          acc[item.movie.S] = {
            category: item.category.S,
            rating: parseInt(item.rating.N)
          };
          return acc;
        }, {});
      }
      throw new Error("Invalid return result from server");
    });

function* listMovies(action) {
  try {
    const result = yield call(handleMovieList);
    yield put({ type: actions.MOVIE_LIST_SUCCESS, result });
  } catch (e) {
    yield put({ type: "ERROR", error: e.message });
  }
}

export default function* newMovieSaga() {
  yield takeEvery(actions.MOVIE_LIST, listMovies);
}
