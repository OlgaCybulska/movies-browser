import { createSlice } from "@reduxjs/toolkit";
import { genresLocalStorageKey, getFromLocalStorage } from "./localStorage";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    apiData: {},
    additionalApiData: {},
    genres: getFromLocalStorage(genresLocalStorageKey),
    status: "initial",
  },
  reducers: {
    fetchData: (state) => {
      state.status = "loading";
    },
    fetchDataSuccess: (state, { payload: apiData }) => {
      state.apiData = apiData;
      state.status = "success";
    },
    fetchDataError: (state) => {
      state.status = "error";
    },
    fetchAdditionalData: (state, { payload: apiData }) => {
      state.additionalApiData = apiData;
    },
    fetchGenres: (state, { payload: genres }) => {
      state.genres = genres;
    },
  },
});

export const {
  fetchData,
  fetchDataSuccess,
  fetchDataError,
  fetchAdditionalData,
  fetchGenres,
} = dataSlice.actions;

const selectDataState = (state) => state.data;

export const selectData = (state) => selectDataState(state).apiData;
export const selectAdditionalData = (state) =>
  selectDataState(state).additionalApiData;
export const selectStatus = (state) => selectDataState(state).status;
export const selectGenres = (state) => selectDataState(state).genres;

export default dataSlice.reducer;
