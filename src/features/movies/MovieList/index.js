import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../common/Container";
import { Section } from "../../../common/Section";
import { SectionHeader } from "../../../common/SectionHeader";
import { Tile } from "../../../common/Tile";
import { GridWrapper, StyledLink } from "./styled";
import { LoadingPage } from "../../../common/LoadingPage";
import { ErrorPage } from "../../../common/ErrorPage";
import { Pagination } from "../../../common/Pagination";
import { useDataURL } from "../../../utils/API/useDataURL";
import { selectPage } from "../../../common/Pagination/paginationSlice";
import { fetchData, selectData, selectStatus } from "../../../utils/API/dataSlice";

export const MovieList = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(selectData);
  const status = useSelector(selectStatus);
  const dataURL = useDataURL()
  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(fetchData(dataURL));
  }, [page]);

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
          <Pagination />
        </>
      );
  }
};
