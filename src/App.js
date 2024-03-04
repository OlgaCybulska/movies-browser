import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./app/GlobalStyle";
import { theme } from "./app/theme";
import { MovieList } from "./features/movies/MovieList";
import SiteHeader from "./common/SiteHeader";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SiteHeader />
      <MovieList />
    </ThemeProvider>
  );
}

export default App;
