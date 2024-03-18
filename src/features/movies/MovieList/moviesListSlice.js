import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "moviesList",
  initialState: {
    movies: [{}],
    genres: [{}],
    status: "initial",
    page: 1,
  },
  reducers: {
    fetchMovies: (state) => {
      state.status = "loading";
    },

    fetchMoviesSuccess: (state, { payload: movies }) => {
      state.movies = movies;
      state.status = "success";
    },
    fetchGenresSuccess: (state, { payload: genres }) => {
      state.genres = genres;
      state.status = "success";
    },
    fetchMoviesError: (state) => {
      state.status = "error";
    },
  },
});

export const {
  fetchMovies,
  fetchMoviesSuccess,
  fetchGenresSuccess,
  fetchMoviesError,
} = moviesSlice.actions;

const selectMoviesState = (state) => state.moviesList;

export const selectMovies = (state) => selectMoviesState(state).movies.results;
export const selectStatus = (state) => selectMoviesState(state).status;

export const selectPage = (state) => selectMoviesState(state).page;
export default moviesSlice.reducer;
