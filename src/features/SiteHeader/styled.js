import styled from "styled-components";
import { ReactComponent as CameraIcon } from '../../assets/camera-icon.svg';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.color.woodSmoke};
  height: 94px;
  margin: 0;

  @media (max-width: ${({theme})=>theme.breakpoint.mobileMax}px) {
    height: 142px;
    background-color: ${({ theme }) => theme.color.black};
  }
`;

export const GridContainer = styled.div`
  display: grid;
  max-width: 1368px;
  margin: auto;
  grid-template-columns: max-content 1fr;
  height: 100%;

  @media (max-width: ${({theme})=>theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledTitle = styled.h1`
  font-weight: 500;
  letter-spacing: -1.5px;
  font-size: 24px;
  line-height: 40px;
  color: ${({ theme }) => theme.color.white};
  display: inline-block;

  @media (max-width: ${({theme})=>theme.breakpoint.mobileMax}px) {
    font-size: 13px;
  }
`;

export const StyledCameraIcon = styled(CameraIcon)`
  display: inline-block;
  margin: 0 12px 0 17px;

  @media (max-width: ${({theme})=>theme.breakpoint.mobileMax}px) {
    width: 17px;
    height: 17px;
    margin: 0 8px 0 16px;
  }
`;

export const FlexContainer = styled.div`
  display: inline-flex;
  align-items: center;

  @media (max-width: ${({theme})=>theme.breakpoint.mobileMax}px) {
    justify-content: space-between;
  }
`;

export const FlexItem = styled.div`
  display: inline-flex;
  align-items: center;
`;