import { createSlice } from "@reduxjs/toolkit";
import { maxPageNumber } from "../../utils/maxPageNumber";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    page: 1,
  },
  reducers: {
    setPage: (state, {payload: pageNumber}) => {
      if (state.page > 1 && state.page < maxPageNumber) {
        state.page = pageNumber
      }
    },
  }
});

export const {
  setPage,
} = paginationSlice.actions;

const selectPaginationState = (state) => state.pagination;

export const selectPage = (state) => selectPaginationState(state).page;

export default paginationSlice.reducer;