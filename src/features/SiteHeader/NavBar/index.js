import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { StyledList, StyledListItem, StyledNav, StyledNavLink } from "./styled";
import { useDispatch } from "react-redux";
import { setSearchContent } from "./navBarSlice";

const NavBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const searchKeyword = location.pathname.split("/")[1];

  dispatch(setSearchContent(searchKeyword));

  return (
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
}

export default NavBar;