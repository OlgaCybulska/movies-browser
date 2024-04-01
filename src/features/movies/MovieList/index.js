import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDataURL } from "../../../utils/API/useDataURL";
import { Container } from "../../../common/Container";
import { Section } from "../../../common/Section";
import ErrorPage from "../../../common/ErrorPage";
import LoadingPage from "../../../common/LoadingPage";
import { SectionHeader } from "../../../common/SectionHeader";
import { GridWrapper } from "../../../common/Tile/styled";
import { Tile } from "../../../common/Tile";
import { Pagination } from "../../../common/Pagination";
import {
  fetchData,
  selectData,
  selectStatus,
  selectGenres,
  fetchGenres
} from "../../../utils/API/dataSlice";
import { StyledLink } from "./styled";
import { genresURL } from "../../../utils/API/apiDataURLs";

export const MovieList = () => {
  const dispatch = useDispatch();

  const status = useSelector(selectStatus);
  const dataURL = useDataURL();
  const genres = useSelector(selectGenres);

  useEffect(() => {
    dispatch(fetchData(dataURL));
  }, [dataURL, dispatch]);

  useEffect(() => {
    if (!genres.genres) {
      dispatch(fetchGenres(genresURL));
    }
  })

  const popularMovies = useSelector(selectData);


  switch (status) {
    case "initial":
      return null;
    case "loading":
      return <LoadingPage />;
    case "error":
      return <ErrorPage />;
    case "success":
      return (
        <>
          <Container>
            <Section>
              <SectionHeader>Popular movies</SectionHeader>
              <GridWrapper>
                {popularMovies.results
                  ? popularMovies.results[0].title &&
                  popularMovies.results.map((movie) => (
                    <li key={movie.id}>
                      <StyledLink to={`/movies/${movie.id}`}>
                        <Tile
                          posterPath={movie.poster_path}
                          title={movie.original_title}
                          genres={genres.genres && movie.genre_ids.map((id) =>
                            genres.genres.find((genre) => genre.id === id).name
                          )}
                          year={movie.release_date.slice(0, 4)}
                          rate={movie.vote_average.toFixed(1)}
                          votes={movie.vote_count}
                        />
                      </StyledLink>
                    </li>
                  ))
                  : null}
              </GridWrapper>
            </Section>
          </Container>
          <Pagination />
        </>
      );
  }
};
