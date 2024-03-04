import { GridContainer, GridItem, StyledCameraIcon, StyledHeader, StyledTitle } from "./styled";

const SiteHeader = () => (
  <StyledHeader>
    <GridContainer>
      <GridItem>
        <StyledCameraIcon />
        <StyledTitle>
          Movies Browser
        </StyledTitle>
      </GridItem>
    </GridContainer>
  </StyledHeader>
);

export default SiteHeader;