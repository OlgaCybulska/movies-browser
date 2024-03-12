import { Link } from "react-router-dom/cjs/react-router-dom";
import { StyledList, StyledListItem, StyledNav } from "./styled";

const NavBar = () => (
  <StyledNav>
    <StyledList>
      <Link to="/movies">
        <StyledListItem>
          MOVIES
        </StyledListItem>
      </Link>
      <Link to="/people">
        <StyledListItem>
          PEOPLE
        </StyledListItem>
      </Link>
    </StyledList>
  </StyledNav>
);

export default NavBar;