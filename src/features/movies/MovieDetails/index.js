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
} from "../../../utils/API/dataSlice";
import { backdropURL, posterURL } from "../../../utils/API/apiDataURLs";
import { useAdditionalDataURL } from "../../../utils/API/useAdditionalDataURL";
import { SmallGridWrapper } from "../../../common/Tile/styled";
import { Container } from "../../../common/Container";
import BackdropSection from "./Backdrop";
import examplePerson from "../../../assets/example_person.png";
import { DetailTile, SmallTile } from "../../../common/Tile";
import LoadingPage from "../../../common/LoadingPage";
import ErrorPage from "../../../common/ErrorPage";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const dataURL = useDataURL();
  const additionalDataURL = useAdditionalDataURL();

  useEffect(() => {
    dispatch(fetchData(dataURL));
    dispatch(fetchAdditionalData(additionalDataURL));
  }, [dispatch, dataURL, additionalDataURL]);

  const movieDetails = useSelector(selectData);
  const status = useSelector(selectStatus);
  console.log(movieDetails);

  // Data formatting functions:
  const formatYear = (d) => d.split("-")[0];

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}.${month}.${year}`;
  };

  const formatCountries = (c) => {
    return c.map((country) => country.name).join(", ");
  };

  const formatRate = (r) => r.toFixed(1);
  // Rendering logic:

  switch (status) {
    case "loading":
      return <LoadingPage />;
    case "error":
      return <ErrorPage />;
    default:
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
                <SmallTile
                  posterPath={examplePerson}
                  title="Liu Yifei"
                  subtitle="Mulan"
                />
                <SmallTile
                  posterPath={examplePerson}
                  title="Liu Yifei"
                  subtitle="Mulan"
                />
                <SmallTile
                  posterPath={examplePerson}
                  title="Liu Yifei"
                  subtitle="Mulan"
                />
                <SmallTile
                  posterPath={examplePerson}
                  title="Liu Yifei"
                  subtitle="Mulan"
                />
                <SmallTile
                  posterPath={examplePerson}
                  title="Liu Yifei"
                  subtitle="Mulan"
                />
                <SmallTile
                  posterPath={examplePerson}
                  title="Liu Yifei"
                  subtitle="Mulan"
                />
                <SmallTile posterPath="" title="Liu Yifei" subtitle="Mulan" />
                <SmallTile
                  posterPath={examplePerson}
                  title="Liu Yifei"
                  subtitle="Mulan"
                />
              </SmallGridWrapper>
            </Section>
            <Section>
              <SectionHeader>Crew</SectionHeader>
              <SmallGridWrapper>
                <SmallTile
                  posterPath={examplePerson}
                  title="Liu Yifei"
                  subtitle="Mulan"
                />
                <SmallTile posterPath="" title="Liu Yifei" subtitle="Mulan" />
                <SmallTile posterPath="" title="Liu Yifei" subtitle="Mulan" />
                <SmallTile
                  posterPath={examplePerson}
                  title="Liu Yifei"
                  subtitle="Mulan"
                />
                <SmallTile
                  posterPath={examplePerson}
                  title="Liu Yifei"
                  subtitle="Mulan"
                />
                <SmallTile
                  posterPath={examplePerson}
                  title="Liu Yifei"
                  subtitle="Mulan"
                />
                <SmallTile
                  posterPath={examplePerson}
                  title="Liu Yifei"
                  subtitle="Mulan"
                />
                <SmallTile
                  posterPath={examplePerson}
                  title="Liu Yifei"
                  subtitle="Mulan"
                />
              </SmallGridWrapper>
            </Section>
          </Container>
        </>
      );
  }
};
export default MovieDetails;
