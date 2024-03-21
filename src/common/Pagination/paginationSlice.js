import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    page: 1,
  },
  reducers: {
    setNextPage: ({ page }) => {
      page++;
    },
    setPreviousPage: ({ page }) => {
      page--;
    },
    setFirstPage: ({ page }) => {
      page = 1;
    },
    setLastPage: ({ page }) => {
      page = 500;
    },
  },
});

export const {
  setNextPage,
  setPreviousPage,
  setFirstPage,
  setLastPage,
} = paginationSlice.actions;

const selectPaginationState = (state) => state.navBar;

export const selectPage = (state) => selectPaginationState(state).page;

export default paginationSlice.reducer;