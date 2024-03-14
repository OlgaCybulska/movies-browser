import { NavLink } from "react-router-dom/cjs/react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
  display: inline-block;
  height: 100%;
`;

export const StyledList = styled.ul`
  display: inline-flex;
  list-style: none;
  align-items: center;
  height: 100%;
  margin: 0 0 0 80px;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 0;
  }
`;

export const StyledListItem = styled.li`
  color: ${({ theme }) => theme.color.white};
  font-size: 14px;
  font-weight: 600;
  padding: 13.5px 24px;
  transition-duration: 200ms;

  &:hover {
    color: ${({ theme }) => theme.color.waterloo};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 8px 12px;
    font-size: 12px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.color.woodSmoke};
  margin-right: 16px;
  transition-duration: 250ms;
  border-radius: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 0 0 0 12px;
    border: 1px solid ${({ theme }) => theme.color.black}
  }

  &.active {
    border: 1px solid ${({ theme }) => theme.color.white};
  }
`;