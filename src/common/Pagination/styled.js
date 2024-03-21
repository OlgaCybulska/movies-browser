import styled from "styled-components";
import { ReactComponent as VectorIcon } from "./vector.svg";

export const Wrapper = styled.footer`
  margin-top: 56px;
  display: flex;
  justify-content: center;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 8px;
  }
`;

export const Button = styled.button`
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px, 16px;
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
  display: flex;
  gap: 8px;
`;

export const TextBold = styled.span`
  size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.woodSmoke};
`;

export const TextNormal = styled.span`
  size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.color.waterloo};
`;

export const Vector = styled(VectorIcon)`
  scale: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    scale: 1;
  }
`;

export const VectorMobile = styled(VectorIcon)`
  scale: 1;

  @media (min-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;
export const VectorLeft = styled(VectorIcon)`
  scale: 1.4;
  transform: rotate(180deg);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    scale: 1;
  }

  &:disabled {
    color: ${({ theme }) => theme.color.waterloo};
  }
`;

export const VectorMobileLeft = styled(VectorIcon)`
  scale: 1;
  transform: rotate(180deg);

  @media (min-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;
