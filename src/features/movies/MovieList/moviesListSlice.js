import { createSlice } from "@reduxjs/toolkit";
import { createPaginationActions } from "../../../common/Pagination/createPagintationActions";

const { paginationReducers } = createPaginationActions(`movieListSlice`);

const moviesSlice = createSlice({
  name: "moviesList",
  initialState: {
    movies: [{}],
    genres: [{}],
    status: "initial",
    page: 1,
    totalPages: 1,
  },
  reducers: {
    ...paginationReducers,
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
  pageNumberFromURL,
  fetchMovies,
  fetchMoviesSuccess,
  fetchGenresSuccess,
  fetchMoviesError,
} = moviesSlice.actions;

const selectMoviesState = (state) => state.moviesList;

export const selectMovies = (state) => selectMoviesState(state).movies.results;

export const selectStatus = (state) => selectMoviesState(state).status;

export const selectPage = (state) => selectMoviesState(state).page;

export const selectTotalPages = (state) => selectMoviesState(state).totalPages;

export default moviesSlice.reducer;
