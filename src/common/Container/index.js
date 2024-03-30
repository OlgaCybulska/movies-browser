import styled from "styled-components";

export const Container = styled.main`
  max-width: 1368px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    /* margin: 0 16px; */
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobileMax}px) {
    /* margin: 16px 16px 0 16px; */
  }
`;
