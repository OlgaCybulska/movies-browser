import { createSlice } from "@reduxjs/toolkit";

const navBarSlice = createSlice({
  name: "navBar",
  initialState: {
    searchMode: "movies",
  },
  reducers: {
    setSearchMode: (state, {payload: keyword} ) => {
      state.searchMode = keyword;
    }
  },
});

export const { setSearchMode } =
  moviesSlice.actions;

const selectNavBarState = (state) => state.navBar;

export const selectSearchMode = (state) => selectNavBarState(state).searchMode;

export default navBarSlice.reducer;