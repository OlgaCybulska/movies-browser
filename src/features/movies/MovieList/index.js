import { Container } from "../../../common/Container";
import { Section } from "../../../common/Section";
import { SectionHeader } from "../../../common/SectionHeader";
import { Tile } from "../../../common/Tile";
import { GridWrapper } from "./styled";

export const MovieList = () => {
  return (
    <Container>
      <Section>
        <SectionHeader>Popular movies</SectionHeader>
        <GridWrapper>
          <Tile title="Mulan" year="2020" rate="7,8" votes="35" />
          <Tile title="Mulan" year="2020" rate="7,8" votes="35" />
          <Tile title="Mulan" year="2020" rate="7,8" votes="35" />
          <Tile title="Mulan" year="2020" rate="7,8" votes="35" />
          <Tile title="Mulan" year="2020" rate="7,8" votes="35" />
          <Tile title="Mulan" year="2020" rate="7,8" votes="35" />
          <Tile title="Mulan" year="2020" rate="7,8" votes="35" />
          <Tile title="Mulan" year="2020" rate="7,8" votes="35" />
        </GridWrapper>
      </Section>
    </Container>
  );
};
