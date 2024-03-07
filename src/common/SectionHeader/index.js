import styled from "styled-components";

export const SectionHeader = styled.h2`
  font-weight: 600;
  font-size: 36px;
  color: ${({ theme }) => theme.color.blackPearl};

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    padding-left: 16px;
    font-size: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontalMax}px) {
    padding-left: 16px;
    font-size: 26px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 20px;
  }
`;
