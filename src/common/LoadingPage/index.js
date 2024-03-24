import { Container } from "../Container";
import { Section } from "../Section";
import { AnimatedLoader, LoaderContainer, StyledSectionHeader } from "./styled";

const LoadingPage = () => {
  return (
    <Container>
      <Section>
        {/*below instead of "Mulan" should be props for example {searchQuery}*/}
        <StyledSectionHeader>Search results for "Mulan"</StyledSectionHeader>
        <LoaderContainer>
          <AnimatedLoader />
        </LoaderContainer>
      </Section>
    </Container>
  );
};

export default LoadingPage;
