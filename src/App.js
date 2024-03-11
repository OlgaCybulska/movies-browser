import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./app/GlobalStyle";
import { theme } from "./app/theme";
import { MovieList } from "./features/movies/MovieList";
import SiteHeader from "./features/SiteHeader";
import { ErrorPage } from "./common/ErrorPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SiteHeader />
      {/* <MovieList /> */}
      <ErrorPage />
    </ThemeProvider>
  );
}

export default App;
