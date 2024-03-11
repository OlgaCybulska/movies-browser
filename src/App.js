import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { theme } from "./app/theme";
import { GlobalStyle } from "./app/GlobalStyle";
import store from "./store";
import { MovieList } from "./features/movies/MovieList";
import SiteHeader from "./features/SiteHeader";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <SiteHeader />
        <GlobalStyle />
        <MovieList />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
