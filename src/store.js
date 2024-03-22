import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import moviesListReducer from "./features/movies/MovieList/moviesListSlice";
import navBarReducer from "./features/SiteHeader/NavBar/navBarSlice";
import paginationReducer from "./common/Pagination/paginationSlice";
import dataReducer from "./utils/API/dataSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    moviesList: moviesListReducer,
    data: dataReducer,
    navBar: navBarReducer,
    pagination: paginationReducer,
  },
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
