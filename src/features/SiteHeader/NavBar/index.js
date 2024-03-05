import { StyledList, StyledListItem, StyledNav } from "./styled";

const NavBar = () => (
  <StyledNav>
    <StyledList>
      <StyledListItem>
        MOVIES
      </StyledListItem>
      <StyledListItem>
        PEOPLE
      </StyledListItem>
    </StyledList>
  </StyledNav>
);

export default NavBar;