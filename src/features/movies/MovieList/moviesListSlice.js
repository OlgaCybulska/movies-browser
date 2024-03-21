import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "moviesList",
  initialState: {
    movies: [{}],
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

const selectMoviesState = (state) => state.moviesList;

export const selectMovies = (state) => selectMoviesState(state).movies.results;
export const selectStatus = (state) => selectMoviesState(state).status;

export default moviesSlice.reducer;
