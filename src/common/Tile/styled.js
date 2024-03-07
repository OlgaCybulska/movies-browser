import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../assets/shape-star.svg";

export const TileContainer = styled.article`
  max-width: 324px;
  background-color: ${({ theme }) => theme.color.white};
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
  transition: 0.4s ease;

  &:hover {
    transform: translateY(-10px) scale(1.01);
    box-shadow: 0px 4px 20px 0px rgba(78, 78, 78, 0.2);
  }
  &:hover > img:first-child {
    filter: brightness(80%);
    transition: 0.5s ease;
  }
  &:active {
    background-color: ${({ theme }) => theme.color.mystic};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    max-width: 100%;

    &:hover {
      transform: translateY(-5px) scale(1.01);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: auto 1fr;
    grid-gap: 16px;
    align-items: flex-start;
  }
`;

export const Poster = styled.img`
  border-radius: 5px;
  width: 292px;
  height: 434px;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 114px;
    height: 169px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  margin-top: 16px;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 0;
    gap: 8px;
  }
`;

export const MovieTitle = styled.h2`
  font-weight: 500;
  font-size: 22px;
  margin: 0;
  padding: 0;
  line-height: 20.8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
  }
`;

export const Year = styled.caption`
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.color.waterloo};
  margin: 0;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    margin-top: -4px;
  }
`;

export const Genres = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex-wrap: wrap;
`;

export const GenreTag = styled.li`
  display: inline-flex;
  padding: 8px 16px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.mystic};
  font-size: 14px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontalMax}px) {
    padding: 7px 14px;
    font-size: 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 4px 8px;
    font-size: 10px;
  }
`;

export const Ratings = styled.div`
  padding-top: 39px;
  display: flex;
  gap: 12px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 0;
    gap: 8px;
    padding: 4px 0;
  }
`;

export const RateStar = styled(StarIcon)`
  width: 24px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 16px;
  }
`;

export const Rate = styled.span`
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
  }
`;
export const Votes = styled.span`
  font-weight: 400;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
  }
`;
