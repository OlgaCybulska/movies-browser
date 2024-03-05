import NavBar from "../../features/NavBar";
import { GridContainer, GridItem, StyledCameraIcon, StyledHeader, StyledTitle } from "./styled";

const SiteHeader = () => (
  <StyledHeader>
    <GridContainer>
      <GridItem>
        <StyledCameraIcon />
        <StyledTitle>
          Movies Browser
        </StyledTitle>
        <NavBar />
      </GridItem>
    </GridContainer>
  </StyledHeader>
);

export default SiteHeader;