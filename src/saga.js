import { all } from "redux-saga/effects";
import { moviesListSaga } from "./features/movies/MovieList/moviesListSaga";

export default function* rootSaga() {
  yield all([moviesListSaga()]);
}
