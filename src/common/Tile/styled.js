import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../assets/shape-star.svg";
import { ReactComponent as NoMovieSVG } from "../../assets/noMovie.svg";

//---Main container for the tile---

export const TileContainer = styled.article`
  max-width: 324px;
  min-height: 650px;
  height: 100%;
  background-color: ${({ theme }) => theme.color.white};
  padding: 16px;
  gap: 16px;
  display: grid;
  grid-template-rows: auto 1fr;
  list-style: none;
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

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontalMax}px) {
    min-height: 720px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVerticalMax}px) {
    min-height: 620px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: auto 1fr;
    grid-gap: 16px;
    align-items: flex-start;
    grid-template-rows: none;
    min-height: unset;
  }
`;

//---Image container with the poster---

export const TileImageContainer = styled.div`
  width: 100%;
  width: 292px;
  height: 434px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.silver};
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 114px;
    height: 169px;
  }
`;

export const TilePoster = styled.img`
  width: inherit;
`;

export const NoMovieIcon = styled(NoMovieSVG)`
  width: 85px;
  height: 85px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 48px;
    height: 48px;
  }
`;

//---Description container with the movie details---

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 0;
    gap: 8px;
  }
`;

export const MovieTitle = styled.h3`
  font-weight: 500;
  font-size: 22px;
  margin: 0;
  padding: 0;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
  }
`;

export const Year = styled.h4`
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

//---Genres---

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

//---Ratings---

export const Ratings = styled.div`
  margin-top: auto;
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
