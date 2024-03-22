import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getData } from "./getData";
import {
  fetchData,
  fetchDataSuccess,
  fetchDataError,
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
    console.log(error);
    yield put(fetchDataError());
  }
}

export function* dataSaga() {
  yield takeLatest(fetchData.type, fetchDataHandler);
}