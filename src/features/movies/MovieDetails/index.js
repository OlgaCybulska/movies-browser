import { Container } from "../../../common/Container";
import BackdropSection from "./Backdrop";
import examplePoster from "../../../assets/example_poster.png";
import examplePerson from "../../../assets/example_person.png";
import { DetailTile, SmallTile } from "../../../common/Tile";
import { Section } from "../../../common/Section";
import { SectionHeader } from "../../../common/SectionHeader";
import { SmallGridWrapper } from "../../../common/Tile/styled";

const MovieDetails = () => {
  return (
    <>
      <BackdropSection title="Mulan" votes="335" rate="7,8" />
      <Container>
        <DetailTile
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
