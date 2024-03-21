import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
} from "./moviesListSlice";
import { getMovies } from "./getMovies";
import { getData } from "../../../utils/API/getData";

function* fetchMoviesHandler(action) {
  try {
    const movies = yield call(getData, action.payload);
    yield delay(1000);
    if (!movies.results) {
      throw new Error();
    }
    yield put(fetchMoviesSuccess(movies));
  } catch (error) {
    console.log(error);
    yield put(fetchMoviesError());
  }
}

export function* moviesListSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
