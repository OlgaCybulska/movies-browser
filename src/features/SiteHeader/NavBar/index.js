import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { StyledList, StyledNavLink } from "./styled";
import { useDispatch } from "react-redux";
import { setSearchContent } from "./navBarSlice";
import { useEffect } from "react";

const NavBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const searchKeyword = location.pathname.split("/")[1];

  useEffect(() => {
    dispatch(setSearchContent(searchKeyword));
  }, [searchKeyword]);

  return (
    <nav>
      <StyledList>
        <li>
          <StyledNavLink to="/movies">MOVIES</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/people">PEOPLE</StyledNavLink>
        </li>
      </StyledList>
    </nav>
  );
};

export default NavBar;
