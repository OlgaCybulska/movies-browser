import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./app/GlobalStyle";
import { theme } from "./app/theme";
import { MovieList } from "./features/movies/MovieList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MovieList />
    </ThemeProvider>
  );
}

export default App;
