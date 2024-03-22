import { takeEvery, put } from "redux-saga/effects";
import { setSearchContent } from "../../features/SiteHeader/NavBar/navBarSlice";
import { setPage } from "./paginationSlice";

function* setSearchContentHandler() {
  yield put(setPage(1));
}

export function* paginationSaga() {
  yield takeEvery(setSearchContent.type, setSearchContentHandler);
}