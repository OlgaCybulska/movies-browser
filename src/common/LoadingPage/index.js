import { useQueryParameters } from "../../utils/queryParams";
import { searchBarParamName } from "../../utils/searchBarParamName";
import { Container } from "../Container";
import { Section } from "../Section";
import { AnimatedLoader, LoaderContainer, StyledSectionHeader } from "./styled";

const LoadingPage = () => {
  const query = useQueryParameters(searchBarParamName);

  return (
    <Container>
      <Section>
        <StyledSectionHeader>{query ? `Searching for "${query}"` : "Loading"}</StyledSectionHeader>
        <LoaderContainer>
          <AnimatedLoader />
        </LoaderContainer>
      </Section>
    </Container>
  );
};

export default LoadingPage;
