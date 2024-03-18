import { call, delay, put, takeLatest, select, all } from "redux-saga/effects";
import {
  fetchMovies,
  fetchMoviesSuccess,
  fetchGenresSuccess,
  fetchMoviesError,
  selectPage,
} from "./moviesListSlice";
import { getMovies } from "./getMovies";
import { getGenres } from "./getGenres";
import { saveGenresInLocalStorage } from "../../../utils/API/genresLocalStorage";

function* fetchMoviesHandler() {
  try {
    const page = yield select(selectPage);
    const [movies, genres] = yield all([
      call(getMovies, page),
      call(getGenres),
    ]);
    yield delay(1000);
    if (!movies.results) {
      throw new Error();
    }
    yield all([
      call(saveGenresInLocalStorage, genres),
      put(fetchMoviesSuccess(movies)),
      put(fetchGenresSuccess(genres)),
    ]);
  } catch (error) {
    yield put(fetchMoviesError());
  }
}

export function* moviesListSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
