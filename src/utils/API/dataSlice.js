import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    apiData: {},
    additionalApiData: {},
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
  },
});

export const { fetchData, fetchDataSuccess, fetchDataError } =
  dataSlice.actions;

const selectDataState = (state) => state.data;

export const selectDataList = (state) => selectDataState(state).apiData.results;
export const selectDataDetails = (state) => selectDataState(state).apiData;
export const selectStatus = (state) => selectDataState(state).status;

export default dataSlice.reducer;
