import styled from "styled-components";

//---Section Grid Wrappers---

export const GridWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  justify-content: center;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    grid-gap: 20px;
    padding: 0 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontalMax}px) {
    grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
    grid-gap: 20px;
    padding: 0 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVerticalMax}px) {
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`;

export const SmallGridWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  justify-content: center;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    gap: 16px;
    padding: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVerticalMax}px) {
    gap: 16px;
    padding: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobileMax}px) {
    grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
    gap: 12px;
    padding: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 8px;
  }
`;
