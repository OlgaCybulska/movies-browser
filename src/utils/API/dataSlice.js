import { createSlice } from "@reduxjs/toolkit";
import { getGenresFromLocalStorage } from "./localStorage";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    apiData: {},
    additionalApiData: {},
    genres: Array.isArray(getGenresFromLocalStorage())
      ? getGenresFromLocalStorage()
      : [{}],
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
    fetchGenresSuccess: (state, { payload: genres }) => {
      state.genres = genres;
      state.status = "success";
    },
  },
});

export const {
  fetchData,
  fetchDataSuccess,
  fetchDataError,
  fetchAdditionalData,
  fetchGenresSuccess,
} = dataSlice.actions;

const selectDataState = (state) => state.data;

export const selectData = (state) => selectDataState(state).apiData;
export const selectStatus = (state) => selectDataState(state).status;
export const selectGenres = (state) => selectDataState(state).genres;

export default dataSlice.reducer;
