import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as CameraIcon } from "../../assets/icons/camera-icon.svg";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.color.black};
  margin: 0;
  padding: 23px 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobileMax}px) {
    padding: 16px;
    background-color: ${({ theme }) => theme.color.black};
  }
`;

export const GridContainer = styled.div`
  max-width: 1368px;
  margin: auto;
  display: grid;
  gap: 16px;
  grid-template-columns: auto minmax(205px, 432px);

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobileMax}px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobileMax}px) {
    justify-content: space-between;
    gap: 20px;
  }
`;

export const StyledTitle = styled.h1`
  font-weight: 500;
  font-size: 24px;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
  }
`;

export const StyledCameraIcon = styled(CameraIcon)`
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobileMax}px) {
    width: 17px;
    height: 17px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  display: flex;
  gap: 12px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobileMax}px) {
    gap: 8px;
  }
`;
