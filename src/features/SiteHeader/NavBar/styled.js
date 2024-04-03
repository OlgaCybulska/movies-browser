import { NavLink } from "react-router-dom/cjs/react-router-dom";
import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  gap: 16px;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobileMax}px) {
    gap: 12px;
    margin-left: 30px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  color: ${({ theme }) => theme.color.white};
  background: none;
  border: none;
  word-break: keep-all;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  padding: 13.5px 24px;
  transition: 200ms;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.color.waterloo};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobileMax}px) {
    border: 1px solid ${({ theme }) => theme.color.black};
    padding: 10px 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
    padding: 8px 12px;
  }

  &.active {
    border: 1px solid ${({ theme }) => theme.color.white};
  }
`;
