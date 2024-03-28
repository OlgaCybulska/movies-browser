import { useDispatch, useSelector } from "react-redux";
import { Section } from "../../../common/Section";
import { SectionHeader } from "../../../common/SectionHeader";
import { useDataURL } from "../../../utils/API/useDataURL";
import { useEffect } from "react";
import {
  fetchAdditionalData,
  fetchData,
  selectData,
} from "../../../utils/API/dataSlice";
import { backdropURL, posterURL } from "../../../utils/API/apiDataURLs";
import { useAdditionalDataURL } from "../../../utils/API/useAdditionalDataURL";
import { SmallGridWrapper } from "../../../common/Tile/styled";
import { Container } from "../../../common/Container";
import BackdropSection from "./Backdrop";
import examplePoster from "../../../assets/example_poster.png";
import examplePerson from "../../../assets/example_person.png";
import { DetailTile, SmallTile } from "../../../common/Tile";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const dataURL = useDataURL();
  const additionalDataURL = useAdditionalDataURL();

  useEffect(() => {
    dispatch(fetchData(dataURL));
    dispatch(fetchAdditionalData(additionalDataURL));
  }, [dispatch, dataURL, additionalDataURL]);

  const movieDetails = useSelector(selectData);
  console.log(movieDetails);

  // Formatting functions
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}.${month}.${year}`;
  };

  return (
    <>
      {movieDetails.backdrop_path && (
        <BackdropSection
          backgroundURL={`${backdropURL}${movieDetails.backdrop_path}`}
          title={movieDetails.title}
          votes={movieDetails.vote_count}
          rate={movieDetails.vote_average.toFixed(1)}
        />
      )}

      <Container>
        {movieDetails.poster_path && (
          <DetailTile
            posterPath={`${posterURL}${movieDetails.poster_path}`}
            title={movieDetails.title}
            subtitle={movieDetails.release_date.split("-")[0]}
            firstData={movieDetails.production_countries
              .map((country) => country.name)
              .join(", ")}
            tags={movieDetails.genres}
            secondData={formatDate(movieDetails.release_date)}
            votes={movieDetails.vote_count}
            rate={movieDetails.vote_average.toFixed(1)}
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
};

export default MovieDetails;
