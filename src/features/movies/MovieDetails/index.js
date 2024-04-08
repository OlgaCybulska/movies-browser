import { useDispatch, useSelector } from "react-redux";
import { Section } from "../../../common/Section";
import { SectionHeader } from "../../../common/SectionHeader";
import { useDataURL } from "../../../utils/API/useDataURL";
import { useEffect } from "react";
import {
  fetchAdditionalData,
  fetchData,
  selectData,
  selectStatus,
  selectAdditionalData,
} from "../../../utils/API/dataSlice";
import { backdropURL, posterURL } from "../../../utils/API/apiDataURLs";
import { useAdditionalDataURL } from "../../../utils/API/useAdditionalDataURL";
import { SmallGridWrapper } from "../../../common/GridWrapper/styled";
import { Container } from "../../../common/Container";
import BackdropSection from "./Backdrop";
import examplePerson from "../../../assets/example_person.png";
import {
  formatCountries,
  formatDate,
  formatRate,
  formatYear,
} from "../../../utils/dataFormatFunctions";
import {
  ActorTile,
  DetailTile,
  PersonTile,
  SmallTile,
} from "../../../common/Tile";
import LoadingPage from "../../../common/LoadingPage";
import ErrorPage from "../../../common/ErrorPage";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const dataURL = useDataURL();
  const additionalDataURL = useAdditionalDataURL();

  // Data fetching dispatches:
  useEffect(() => {
    dispatch(fetchData(dataURL));
    dispatch(fetchAdditionalData(additionalDataURL));
  }, [dispatch, dataURL, additionalDataURL]);

  // Selectors:
  const status = useSelector(selectStatus);
  const movieDetails = useSelector(selectData);
  const additionalData = useSelector(selectAdditionalData);
  const crew = additionalData.crew;
  const cast = additionalData.cast;

  // Rendering logic:

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
          {movieDetails.backdrop_path && (
            <BackdropSection
              backgroundURL={`${backdropURL}${movieDetails.backdrop_path}`}
              title={movieDetails.title}
              votes={movieDetails.vote_count}
              rate={formatRate(movieDetails.vote_average)}
            />
          )}

          <Container>
            {movieDetails.poster_path && (
              <DetailTile
                movieTile={true}
                posterPath={`${posterURL}${movieDetails.poster_path}`}
                title={movieDetails.title}
                subtitle={formatYear(movieDetails.release_date)}
                firstData={formatCountries(movieDetails.production_countries)}
                tags={movieDetails.genres}
                secondData={formatDate(movieDetails.release_date)}
                votes={movieDetails.vote_count}
                rate={formatRate(movieDetails.vote_average)}
                isOnBackdrop={false}
                isOnMainTile={true}
                overview={movieDetails.overview}
              />
            )}

            <Section>
              <SectionHeader>Cast</SectionHeader>
              <SmallGridWrapper>
                {cast &&
                  cast.slice(0, 10).map((movie) => (
                    <li key={movie.cast_id}>
                      <PersonTile
                        posterPath={movie.profile_path}
                        name={movie.name}
                        subtitle={movie.character}
                        id={movie.id}
                      />
                    </li>
                  ))}
              </SmallGridWrapper>
            </Section>
            <Section>
              <SectionHeader>Crew</SectionHeader>
              <SmallGridWrapper>
                {crew &&
                  crew.slice(0, 10).map((person) => (
                    <li key={person.credit_id}>
                      <PersonTile
                        posterPath={person.profile_path}
                        name={person.name}
                        subtitle={person.job}
                        id={person.id}
                      />
                    </li>
                  ))}
              </SmallGridWrapper>
            </Section>
          </Container>
        </>
      );
  }
};
export default MovieDetails;
