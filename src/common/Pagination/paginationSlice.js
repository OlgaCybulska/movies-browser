import { createSlice } from "@reduxjs/toolkit";
import { maxPageNumber } from "../../utils/maxPageNumber";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    page: 1,
  },
  reducers: {
    setNextPage: (state) => {
      if (state.page < maxPageNumber) {
        state.page++;
      }
    },
    setPreviousPage: (state) => {
      if (state.page > 1) {
        state.page--;
      }
    },
    setFirstPage: (state) => {
      state.page = 1;
    },
    setLastPage: (state) => {
      state.page = maxPageNumber;
    },
  },
});

export const {
  setNextPage,
  setPreviousPage,
  setFirstPage,
  setLastPage,
} = paginationSlice.actions;

const selectPaginationState = (state) => state.pagination;

export const selectPage = (state) => selectPaginationState(state).page;

export default paginationSlice.reducer;