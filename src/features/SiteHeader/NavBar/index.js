import { StyledList, StyledListItem, StyledNav, StyledNavLink } from "./styled";

const NavBar = () => (
  <StyledNav>
    <StyledList>
      <StyledNavLink to="/movies">
        <StyledListItem>
          MOVIES
        </StyledListItem>
      </StyledNavLink>
      <StyledNavLink to="/people">
        <StyledListItem>
          PEOPLE
        </StyledListItem>
      </StyledNavLink>
    </StyledList>
  </StyledNav>
);

export default NavBar;