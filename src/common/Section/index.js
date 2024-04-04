import styled from "styled-components";

export const Section = styled.section`
  margin: 56px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobileMax}px) {
    margin: 40px 0 0 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 25px 0 0 0;
  }
`;
