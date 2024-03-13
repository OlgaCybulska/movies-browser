import { Container } from "../Container";
import { AnimatedLoader, LoaderContainer, StyledSectionHeader } from "./styled";

export const LoadingPage = () => {
  return (
    <Container>
      {/*below instead of "Mulan" should be props for example {searchQuery}*/}
      <StyledSectionHeader>Search results for "Mulan"</StyledSectionHeader>
      <LoaderContainer>
        <AnimatedLoader />
      </LoaderContainer>
    </Container>
  );
};
