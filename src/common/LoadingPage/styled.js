import styled from "styled-components";
import { SectionHeader } from "../SectionHeader";
import { ReactComponent as LoadingIcon } from "../../assets/icon-spinner.svg";

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledSectionHeader = styled(SectionHeader)`
  margin-top: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontalMax}px) {
    margin-top: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 22px;
    font-size: 14px;
    font-weight: 500;
  }
`;

export const AnimatedLoader = styled(LoadingIcon)`
  margin-top: 120px;
  animation: rotate infinite linear 1s;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    width: 85px;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontalMax}px) {
    margin-top: 90px;
    width: 80px;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVerticalMax}px) {
    margin-top: 60px;
    width: 70px;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 20px;
    width: 35px;
    height: auto;
  }
`;
