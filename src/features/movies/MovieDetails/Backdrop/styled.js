import styled from "styled-components";
import { ReactComponent as VignetteSVG } from "../../../../assets/backdrop-vignette.svg";

export const BackdropContainer = styled.section`
  background-color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 4px;
  }
`;

export const Backdrop = styled.div`
  position: relative;
  margin: auto;
  max-width: 1368px;
  aspect-ratio: 2.1622;
  background: ${({ $background }) => `url('${$background}')`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    margin: 0;
  }
`;

export const Vignette = styled(VignetteSVG)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const GradientCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    #000000 0%,
    rgba(0, 0, 0, 0.7) 1%,
    rgba(0, 0, 0, 0.3) 3%,
    rgba(0, 0, 0, 0.15) 6%,
    rgba(0, 0, 0, 0) 10%
  );

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    background: linear-gradient(
      180deg,
      #000000 0%,
      rgba(0, 0, 0, 0.7) 1%,
      rgba(0, 0, 0, 0.3) 3%,
      rgba(0, 0, 0, 0.15) 6%,
      rgba(0, 0, 0, 0) 10%
    );
  }
`;

export const TitleContainer = styled.div`
  position: absolute;
  bottom: 0%;
  z-index: 2;
  margin-bottom: 54px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontalMax}px) {
    margin-left: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    height: 80px;
    margin-left: 6px;
    margin-bottom: 0;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.color.white};
  font-size: 64px;
  font-weight: 600;
  line-height: 120%;
  margin: 0 0 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontalMax}px) {
    font-size: 50px;
    margin: 0 0 4px 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 24px;
    margin: 0 0 4px 0;
  }
`;
