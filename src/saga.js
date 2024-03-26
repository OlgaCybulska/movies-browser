import { all } from "redux-saga/effects";
import { paginationSaga } from "./common/Pagination/paginationSaga";
import { dataSaga } from "./utils/API/dataSaga";

export default function* rootSaga() {
  yield all([
    paginationSaga(),
    dataSaga()
  ]);
}
