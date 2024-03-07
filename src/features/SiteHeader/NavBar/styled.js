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

  @media (max-width: ${({theme})=> theme.breakpoint.mobileMax}px) {
    margin: 0;
  }
`;

export const StyledListItem = styled.li`
  color: ${({ theme }) => theme.color.white};
  font-size: 14px;
  font-weight: 600;
  padding: 13.5px 24px;
  margin-right: 16px;  
  border: 1px solid ${({ theme }) => theme.color.woodSmoke};
  transition-duration: 200ms;
  border-radius: 24px;

  &:hover {
    border: 1px solid ${({ theme }) => theme.color.white};
  }

  @media (max-width: ${({theme})=> theme.breakpoint.mobileMax}px) {
    padding: 8px 12px;
    margin: 0 0 0 12px;
    font-size: 12px;
    border: 1px solid ${({ theme }) => theme.color.black}
  }
`;