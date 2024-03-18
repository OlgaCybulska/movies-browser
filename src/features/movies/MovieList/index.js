import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../common/Container";
import { Section } from "../../../common/Section";
import { SectionHeader } from "../../../common/SectionHeader";
import { Tile } from "../../../common/Tile";
import { fetchMovies } from "./moviesListSlice";
import { GridWrapper, StyledLink } from "./styled";
import { selectMovies, selectStatus } from "./moviesListSlice";
import { LoadingPage } from "../../../common/LoadingPage";
import { ErrorPage } from "../../../common/ErrorPage";

export const MovieList = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(selectMovies);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  switch (status) {
    case "initial":
      return null;
    case "loading":
      return <LoadingPage />;
    case "error":
      return <ErrorPage />;
    case "success":
      return (
        <Container>
          <Section>
            <SectionHeader>Popular movies</SectionHeader>
            <GridWrapper>
              {popularMovies.map((movie) => (
                <li key={movie.id}>
                  <StyledLink to={`/movies/${movie.id}`}>
                    <Tile
                      posterPath={movie.poster_path}
                      title={movie.original_title}
                      year={movie.release_date.slice(0, 4)}
                      rate={movie.vote_average.toFixed(1)}
                      votes={movie.vote_count}
                    />
                  </StyledLink>
                </li>
              ))}
            </GridWrapper>
          </Section>
        </Container>
      );
  }
};
