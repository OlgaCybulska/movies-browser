import { Link } from "react-router-dom/cjs/react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.woodSmoke};
`;
