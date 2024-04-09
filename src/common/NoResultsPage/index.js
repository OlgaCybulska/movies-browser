import { useQueryParameters } from "../../utils/queryParams";
import { searchBarParamName } from "../../utils/searchBarParamName";
import { Container } from "../Container";
import { Section } from "../Section";
import { SectionHeader } from "../SectionHeader";
import { StyledNoResultsImage } from "./styled";

const NoResultsPage = () => {
  const query = useQueryParameters(searchBarParamName)

  return (
    <Container>
      <Section>
        <SectionHeader>{`Sorry, there are no results for “${query}”`}</SectionHeader>
        <StyledNoResultsImage />
      </Section>
    </Container>
  );
};

export default NoResultsPage;
