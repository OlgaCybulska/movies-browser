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

  return (
    <>
      <BackdropSection title="Mulan" votes="335" rate="7,8" />
      <Container>
        <DetailTile
          movieTile={true}
          posterPath={examplePoster}
          title="Mulan"
          subtitle="2020"
          firstData="China, UnitedStates of America"
          secondData="24.10.2020"
          votes="335"
          rate="7,8"
          isOnBackdrop={false}
          isOnMainTile={true}
          overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        />
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
