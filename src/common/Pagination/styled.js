import styled, { css } from "styled-components";
import { ReactComponent as VectorIcon } from "./vector.svg";

export const Wrapper = styled.footer`
  margin-top: 40px;
  margin-bottom: 103px;
  display: flex;
  justify-content: center;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 32px;
    margin-bottom: 31px;
    gap: 8px;
  }
`;

export const Button = styled.button`
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 5px;
  gap: 8px;
  border: none;
  background-color: ${({ theme }) => theme.color.pattensBlue};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 8px 12px;
    gap: 4px;
  }

  &:disabled {
    cursor: auto;
    background-color: ${({ theme }) => theme.color.mystic};
  }
`;
export const ButtonText = styled.span`
  size: 14px;
  line-height: 19.6px;
  color: ${({ theme }) => theme.color.darkGray};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const TextContainer = styled.div`
  size: 16px;
  line-height: 24px;
  align-self: center;
  display: flex;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 10px;
  }
`;

export const TextBold = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.color.woodSmoke};
`;

export const TextNormal = styled.span`
  color: ${({ theme }) => theme.color.waterloo};
`;

export const Vector = styled(VectorIcon)`
  width: 7px;
  height: 11px;
  fill: ${({ theme }) => theme.color.scienceBlue};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 5px;
    height: 8px;
  }

  ${({ $disabled }) => $disabled && css`
    fill: ${({ theme }) => theme.color.waterloo};
  `}
`;

export const VectorMobile = styled(VectorIcon)`
  width: 5px;
  height: 8px;
  fill: ${({ theme }) => theme.color.scienceBlue};

  @media (min-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }

  ${({ $disabled }) => $disabled && css`
    fill: ${({ theme }) => theme.color.waterloo};
  `}
`;
export const VectorLeft = styled(VectorIcon)`
  width: 7px;
  height: 11px;
  transform: rotate(180deg);
  fill: ${({ theme }) => theme.color.scienceBlue};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 5px;
    height: 8px;
  }

  ${({ $disabled }) => $disabled && css`
    fill: ${({ theme }) => theme.color.waterloo};
  `}
`;

export const VectorMobileLeft = styled(VectorIcon)`
  width: 5px;
  height: 8px;
  transform: rotate(180deg);
  fill: ${({ theme }) => theme.color.scienceBlue};

  @media (min-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }

  ${({ $disabled }) => $disabled && css`
    fill: ${({ theme }) => theme.color.waterloo};
  `}
`;
