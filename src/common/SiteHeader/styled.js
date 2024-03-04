import styled from "styled-components";
import { ReactComponent as CameraIcon } from '../../assets/camera-icon.svg';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.color.woodSmoke};
  height: 94px;
  margin: 0;
`;

export const GridContainer = styled.div`
  display: grid;
  max-width: 1368px;
  margin: auto;
  grid-template-columns: 1fr 1fr;
  height: 100%;
`;

export const StyledTitle = styled.h1`
  font-weight: 500;
  letter-spacing: -1.5px;
  font-size: 24px;
  line-height: 40px;
  color: ${({ theme }) => theme.color.white};
  display: inline-block;
`;

export const StyledCameraIcon = styled(CameraIcon)`
  display: inline-block;
  align-self: center;
  margin: 0 17px 0 12px;
`;

export const GridItem = styled.div`
  display: inline-flex;
  align-items: center;
`;