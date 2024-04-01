import { call, delay, put, takeLatest, all } from "redux-saga/effects";
import { getData } from "./getData";
import {
  fetchData,
  fetchDataSuccess,
  fetchDataError,
  fetchAdditionalData,
  fetchGenres,
} from "./dataSlice";

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

function* fetchAdditionalDataHandler(action) {
  try {
    const apiData = yield call(getData, action.payload);
    if (apiData.success === false) {
      throw new Error();
    }
    yield put(fetchAdditionalData(apiData));
  } catch (error) {}
}

function* fetchGenresHandler(action) {
  try {
    const apiData = yield call(getData, action.payload);
    if (apiData.success === false) {
      throw new Error();
    }
    yield put(fetchGenres(apiData));
  } catch (error) {}
}

export function* dataSaga() {
  yield all([
    takeLatest(fetchData.type, fetchDataHandler),
    takeLatest(fetchAdditionalData.type, fetchAdditionalDataHandler),
    takeLatest(fetchGenres.type, fetchGenresHandler),
  ]);
}
