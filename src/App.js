import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./app/GlobalStyle";
import { theme } from "./app/theme";
import { MovieList } from "./features/movies/MovieList";
import SiteHeader from "./features/SiteHeader";
import { LoadingPage } from "./common/LoadingPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SiteHeader />
      {/* <MovieList /> */}
      <LoadingPage />
    </ThemeProvider>
  );
}

export default App;
