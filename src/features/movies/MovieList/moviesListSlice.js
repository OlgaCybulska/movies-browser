import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: null,
    status: "initial",
  },
  reducers: {
    fetchMovies: (state) => {
      state.status = "loading";
    },

    fetchMoviesSuccess: (state, { payload: movies }) => {
      state.movies = movies;
      state.status = "success";
    },
    fetchMoviesError: (state) => {
      state.status = "error";
    },
  },
});

export const { fetchMovies, fetchMoviesSuccess, fetchMoviesError } =
  moviesSlice.actions;

const selectMoviesState = (state) => state.movies;

export const selectMovies = (state) => selectMoviesState(state).movies;

export default moviesSlice.reducer;
