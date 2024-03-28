import { call, delay, put, takeLatest, all } from "redux-saga/effects";
import { getData } from "./getData";
import {
  fetchData,
  fetchDataSuccess,
  fetchDataError,
  fetchAdditionalData,
  fetchGenresSuccess,
} from "./dataSlice";
import { getGenres } from "./getGenres";
import { saveGenresInLocalStorage } from "./localStorage";

function* fetchDataHandler(action) {
  try {
    const apiData = yield call(getData, action.payload);
    yield delay(1000);
    if (apiData.success === false) {
      throw new Error();
    }
    yield put(fetchDataSuccess(apiData));
  } catch (error) {
    yield put(fetchDataError());
  }
}

function* fetchGenresHandler() {
  try {
    const genres = yield call(getGenres);
    yield delay(1000);
    if (genres.success === false) {
      throw new Error();
    }
    yield all([
      call(saveGenresInLocalStorage, genres),
      put(fetchGenresSuccess(genres)),
    ]);
  } catch (error) {
    yield put(fetchDataError());
  }
}
function* fetchAdditionalDataHandler(action) {
  try {
    const apiData = yield call(getData, action.payload);
    if (apiData.success === false) {
      throw new Error();
    }
    yield put(fetchAdditionalData(apiData));
  } catch (error) {}
}

export function* dataSaga() {
  yield all([
    takeLatest(fetchData.type, fetchDataHandler),
    takeLatest(fetchData.type, fetchGenresHandler),
    takeLatest(fetchAdditionalData.type, fetchAdditionalDataHandler),
  ]);
}
