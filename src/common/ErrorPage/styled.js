import styled from "styled-components";
import { SectionHeader } from "../SectionHeader";

export const ErrorContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  margin-top: 180px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontalMax}px) {
    margin-top: 128px;
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 48px;
    gap: 12px;
  }
`;

export const StyledErrorIcon = styled.img`
  width: 120px;
  height: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontalMax}px) {
    width: 100px;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 75px;
    height: auto;
  }
`;

export const StyledSectionHeader = styled(SectionHeader)`
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 17px;
  }
`;

export const ErrorSubHeader = styled.h3`
  font-size: 22px;
  font-weight: 500;
  margin: 0;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    padding-bottom: 8px;
  }
`;

export const Button = styled.button`
  // here instead of tag button should be imported <Link /> from React Router with redirection to home page
  padding: 16px 24px;
  border-radius: 5px;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.color.scienceBlue};
  color: ${({ theme }) => theme.color.white};
  border: none;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px) scale(1.02);
    background-color: ${({ theme }) => theme.color.silver};
    box-shadow: 0px 4px 20px 0px rgba(78, 78, 78, 0.2);
  }

  &:active {
    background-color: ${({ theme }) => theme.color.woodSmoke};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
    padding: 14px 18px;

    &:hover {
      transform: translateY(-2px) scale(1.02);
      background-color: ${({ theme }) => theme.color.silver};
      box-shadow: 0px 4px 20px 0px rgba(78, 78, 78, 0.2);
    }
  }
`;
