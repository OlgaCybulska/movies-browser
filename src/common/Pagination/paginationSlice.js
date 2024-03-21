import { createSlice } from "@reduxjs/toolkit";
import { maxPageNumber } from "../../utils/maxPageNumber";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    page: 1,
  },
  reducers: {
    setNextPage: ({ page }) => {
      if (page < maxPageNumber) {
        page++;
      }
    },
    setPreviousPage: ({ page }) => {
      if (page > 1) {
        page--;
      }
    },
    setFirstPage: ({ page }) => {
      page = 1;
    },
    setLastPage: ({ page }) => {
      page = maxPageNumber;
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