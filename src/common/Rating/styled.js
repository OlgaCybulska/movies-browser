import styled, { css } from "styled-components";
import { ReactComponent as StarIcon } from "../../assets/icons/shape-star.svg";

//---Ratings---

export const RatingContainer = styled.div`
  margin: 10px 0 0;
  display: flex;
  gap: 8px;
  flex-wrap: nowrap;
  align-items: center;

  ${({ $backdrop }) =>
    $backdrop &&
    css`
      flex-wrap: wrap;
      width: 150px;
      height: 75px;
      gap: 8px;
    `}

  ${({ $movieDetails }) =>
    $movieDetails &&
    css`
      margin: 0;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    height: 30px;
    margin-top: 0;
    gap: 8px;
    padding: 4px 0;

    ${({ $backdrop }) =>
      $backdrop &&
      css`
        margin: 0;
        gap: 2px;
      `}
  }
`;

export const RateStar = styled(StarIcon)`
  width: 24px;
  height: auto;

  ${({ $backdrop }) =>
    $backdrop &&
    css`
      width: 40px;
      height: auto;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 16px;
  }
`;

export const Rate = styled.span`
  font-weight: 600;
  line-height: 1.5;

  ${({ $backdrop }) =>
    $backdrop &&
    css`
      font-size: 30px;
      line-height: 1.3;
      font-weight: 500;
      color: ${({ theme }) => theme.color.white};
    `}

  ${({ $mainTile }) =>
    $mainTile &&
    css`
      font-size: 22px;
      line-height: 1.3;
      font-weight: 500;
      color: ${({ theme }) => theme.color.black};
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 1.3;

    ${({ $backdrop }) =>
      $backdrop &&
      css`
        margin-left: 2px;
        font-size: 14px;
        line-height: 1.3;
        font-weight: 600;
        color: ${({ theme }) => theme.color.white};
      `}

    ${({ $mainTile }) =>
      $mainTile &&
      css`
        color: ${({ theme }) => theme.color.black};
      `}
  }
`;

export const RatingRange = styled.span`
  display: none;
  font-weight: 400;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.white};

  ${({ $backdrop }) =>
    $backdrop &&
    css`
      display: block;
      margin-top: 16px;
      font-size: 16px;
    `}

  ${({ $mainTile }) =>
    $mainTile &&
    css`
      display: block;
      margin-top: 9px;
      font-size: 14px;
      color: ${({ theme }) => theme.color.black};
    `}
	
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    ${({ $backdrop }) =>
      $backdrop &&
      css`
        display: block;
        margin-top: 4px;
        font-size: 10px;
      `}

    ${({ $mainTile }) =>
      $mainTile &&
      css`
        display: none;
      `}
  }
`;

export const Votes = styled.span`
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.waterloo};

  ${({ $backdrop }) =>
    $backdrop &&
    css`
      line-height: 1.2;
      margin-top: 8px;
      color: ${({ theme }) => theme.color.white};
    `}

  ${({ $mainTile }) =>
    $mainTile &&
    css`
      margin-left: 4px;
      margin-top: 9px;
      font-size: 14px;
      line-height: 1.2;
      color: ${({ theme }) => theme.color.black};
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 1.3;

    ${({ $backdrop }) =>
      $backdrop &&
      css`
        font-size: 10px;
        line-height: 1.2;
        margin-top: 4px;
        margin-left: 6px;
        color: ${({ theme }) => theme.color.white};
      `}

    ${({ $mainTile }) =>
      $mainTile &&
      css`
        margin: 0px;
        color: ${({ theme }) => theme.color.darkGray};
      `}
  }
`;
