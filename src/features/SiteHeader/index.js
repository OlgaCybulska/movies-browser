import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import { FlexContainer, FlexItem, GridContainer, StyledCameraIcon, StyledHeader, StyledTitle } from "./styled";

const SiteHeader = () => (
  <StyledHeader>
    <GridContainer>
      <FlexContainer>
        <FlexItem>
          <StyledCameraIcon />
          <StyledTitle>
            Movies Browser
          </StyledTitle>
        </FlexItem>
        <NavBar />
      </FlexContainer>
      <SearchBar />
    </GridContainer>
  </StyledHeader>
);

export default SiteHeader;