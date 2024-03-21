import { Link } from "react-router-dom/cjs/react-router-dom";
import styled from "styled-components";

export const GridWrapper = styled.ul`
  display: grid;
  list-style: none;
  padding: 0;
  grid-gap: 24px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    grid-gap: 20px;
    padding: 0 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontalMax}px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    padding: 0 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVerticalMax}px) {
    grid-gap: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({theme}) => theme.color.woodSmoke};
`;
