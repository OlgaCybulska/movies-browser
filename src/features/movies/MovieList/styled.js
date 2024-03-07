import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontalMax}px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    padding: 0 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVerticalMax}px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`;
