import { createSlice } from "@reduxjs/toolkit";

const navBarSlice = createSlice({
  name: "navBar",
  initialState: {
    searchContent: "movies",
  },
  reducers: {
    setSearchContent: (state, { payload: keyword }) => {
      state.searchContent = keyword;
    }
  },
});

export const { setSearchContent } =
  navBarSlice.actions;

const selectNavBarState = (state) => state.navBar;

export const selectSearchContent = (state) => selectNavBarState(state).searchContent;

export default navBarSlice.reducer;