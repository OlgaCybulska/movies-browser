import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDataURL } from "../../../utils/API/useDataURL";
import { Container } from "../../../common/Container";
import { Section } from "../../../common/Section";
import ErrorPage from "../../../common/ErrorPage";
import LoadingPage from "../../../common/LoadingPage";
import { SectionHeader } from "../../../common/SectionHeader";
import { GridWrapper } from "../../../common/GridWrapper/styled";
import { Tile } from "../../../common/Tile";
import { Pagination } from "../../../common/Pagination";
import { motion } from "framer-motion";
import {
  fetchData,
  selectData,
  selectStatus,
} from "../../../utils/API/dataSlice";
import { formatYear, formatRate } from "../../../utils/dataFormatFunctions";
import { useQueryParameters } from "../../../utils/queryParams";
import { searchBarParamName } from "../../../utils/searchBarParamName";

export const MovieList = () => {
  const dispatch = useDispatch();
  const query = useQueryParameters(searchBarParamName);
  const status = useSelector(selectStatus);
  const dataURL = useDataURL(query);

  useEffect(() => {
    dispatch(fetchData(dataURL));
  }, [dataURL, dispatch]);

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
              <SectionHeader>{query ? `Search results for "${query}"`: "Popular movies"}</SectionHeader>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.75 }}
              >
                <GridWrapper>
                  {popularMovies.results.length !== 0
                    ? popularMovies.results[0].title &&
                    popularMovies.results.map((movie) => (
                      <li key={movie.id}>
                        <Tile
                          link={`/movies/${movie.id}`}
                          posterPath={movie.poster_path}
                          title={movie.original_title}
                          subtitle={formatYear(movie.release_date)}
                          rate={formatRate(movie.vote_average)}
                          votes={movie.vote_count}
                        />
                      </li>
                    ))
                    : null}
                </GridWrapper>
              </motion.div>
            </Section>
          </Container>
          {popularMovies.total_pages > 1 && (<Pagination />)}
        </>
      );
  }
};
