import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { theme } from "./app/theme";
import { GlobalStyle } from "./app/GlobalStyle";
import store from "./store";
import { MovieList } from "./features/movies/MovieList";
import SiteHeader from "./features/SiteHeader";
import { HashRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom";
import PeopleList from "./features/people/PeopleList";
import MovieDetails from "./features/movies/MovieDetails";
import PeopleDetails from "./features/people/PeopleDetails";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <HashRouter>
          <SiteHeader />
          <Switch>
            <Route path="/people/:id">
              <PeopleDetails />
            </Route>
            <Route path="/movies/:id">
              <MovieDetails />
            </Route>
            <Route path="/people">
              <PeopleList />
            </Route>
            <Route path="/movies">
              <MovieList />
            </Route>
            <Route path="/">
              <Redirect to="/movies" />
            </Route>
          </Switch>
        </HashRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
