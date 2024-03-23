import { createSlice } from "@reduxjs/toolkit";
import { getGenresFromLocalStorage } from "../../../utils/API/genresLocalStorage";

const moviesSlice = createSlice({
  name: "moviesList",
  initialState: {
    movies: [{}],
    genres: Array.isArray(getGenresFromLocalStorage())
      ? getGenresFromLocalStorage()
      : [{}],
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

export const selectGenres = (state) => selectMoviesState(state).genres;

export default moviesSlice.reducer;
