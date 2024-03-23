import { call, delay, put, takeLatest, all } from "redux-saga/effects";
import {
  fetchMovies,
  fetchMoviesSuccess,
  fetchGenresSuccess,
  fetchMoviesError,
} from "./moviesListSlice";
import { getMovies } from "../../../utils/API/getMovies";
import { getGenres } from "../../../utils/API/getGenres";
import { saveGenresInLocalStorage } from "../../../utils/API/genresLocalStorage";

function* fetchMoviesHandler() {
  try {
    const [movies, genres] = yield all([call(getMovies), call(getGenres)]);
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
