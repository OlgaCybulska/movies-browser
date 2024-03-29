import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import {
  GridContainer,
  StyledCameraIcon,
  StyledHeader,
  StyledLink,
  StyledTitle,
  Wrapper,
} from "./styled";

const SiteHeader = () => (
  <StyledHeader>
    <GridContainer>
      <Wrapper>
        <StyledLink to="/movies-browser#/movies">
          <StyledCameraIcon />
          <StyledTitle>Movies Browser</StyledTitle>
        </StyledLink>
        <NavBar />
      </Wrapper>
      <SearchBar />
    </GridContainer>
  </StyledHeader>
);

export default SiteHeader;
