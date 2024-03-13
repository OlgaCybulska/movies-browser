import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
} from "./moviesListSlice";
import { getMovies } from "./getMovies";

function* fetchMoviesHandler() {
  try {
    const movies = yield call(getMovies);
    yield delay(1000);
    yield put(fetchMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchMoviesError());
    yield call(alert, "Coś poszło nie tak!");
  }
}

export function* moviesListSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
