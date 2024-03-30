import { Container } from "../Container";
import { Section } from "../Section";
import { SectionHeader } from "../SectionHeader";
import { StyledNoResultsImage } from "./styled";

const NoResultsPage = () => {
  return (
    <Container>
      <Section>
        {/* <SectionHeader>{`Sorry, there are no results for “${query}”`}</SectionHeader> */}
        <SectionHeader>{`Sorry, there are no results for “Muan”`}</SectionHeader>
        <StyledNoResultsImage />
      </Section>
    </Container>
  );
};

export default NoResultsPage;
