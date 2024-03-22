import { all } from "redux-saga/effects";
import { moviesListSaga } from "./features/movies/MovieList/moviesListSaga";
import { paginationSaga } from "./common/Pagination/paginationSaga";
import { dataSaga } from "./utils/API/dataSaga";

export default function* rootSaga() {
  yield all([
    moviesListSaga(),
    paginationSaga(),
    dataSaga()
  ]);
}
