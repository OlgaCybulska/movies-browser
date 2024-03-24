import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search-icon.svg";

export const StyledForm = styled.form`
  align-self: center;
  text-align: right;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 16px;
  }
`;

export const StyledInput = styled.input`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  display: inline-block;
  padding: 12px 24px 12px 64px;
  height: 48px;
  width: 100%;
  border-radius: 33px;
  border: 1px solid ${({ theme }) => theme.color.mystic};

  &::placeholder {
    color: ${({ theme }) => theme.color.waterloo};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    height: 44px;
    padding-left: 40px;
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  top: 12px;
  left: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 16px;
    height: 16px;
    top: 14px;
    left: 16px;
  }
`;

export const InputWrapper = styled.div`
  display: inline-block;
  position: relative;
  max-width: 432px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    max-width: 100%;
  }
`;
