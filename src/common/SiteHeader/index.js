import NavBar from "../../features/NavBar";
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
    </GridContainer>
  </StyledHeader>
);

export default SiteHeader;