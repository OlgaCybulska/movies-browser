import styled, { css } from "styled-components";
import { ReactComponent as NoMovieSVG } from "../../assets/icons/noMovie.svg";
import { ReactComponent as NoPersonSVG } from "../../assets/icons/noPerson.svg";

//---Section Grid Wrappers---

export const GridWrapper = styled.ul`
  display: grid;
  list-style: none;
  padding: 0;
  grid-gap: 24px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    grid-gap: 20px;
    padding: 0 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontalMax}px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    padding: 0 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVerticalMax}px) {
    grid-gap: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`;

export const SmallGridWrapper = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(6, 1fr);

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    gap: 16px;
    padding: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontalMax}px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVerticalMax}px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    padding: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobileMax}px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    padding: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobileMax}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

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
  overflow-wrap: break-word;
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
    min-height: 100%;

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

export const SmallTileContainer = styled(TileContainer)`
  min-height: 339px;
  gap: 8px;
  border-radius: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    max-width: 287px;
    min-height: 245px;
    gap: 8px;
    border-radius: 0px;
    grid-template-columns: none;
    grid-template-rows: auto 1fr;
    padding: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    max-width: 287px;
    min-width: 136px;
    min-height: 245px;
    padding: 10px;
    grid-template-columns: none;
    grid-template-rows: auto 1fr;
  }
`;

export const DetailTileContainer = styled(TileContainer)`
  border-radius: 0;
  width: 100%;
  max-width: 100%;
  min-height: auto;
  margin-top: 64px;
  padding: 40px;
  grid-template-columns: auto 1fr;
  column-gap: 40px;
  grid-row-gap: 0;

  &:hover {
    transform: none;
  }
  &:hover > img:first-child {
    filter: none;
    box-shadow: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    max-width: 98%;
    margin: 30px auto 0 auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVerticalMax}px) {
    margin-top: 16px;
    padding: 32px;
    column-gap: 16px;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 16px;
    max-width: 95%;
    column-gap: 8px;
  }
`;

//---Image container with the poster---

export const TileImageContainer = styled.div`
  width: 100%;
  aspect-ratio: calc(292 / 434);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.silver};
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    width: 100%;
    aspect-ratio: calc(292 / 434);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 114px;
    aspect-ratio: calc(114 / 169);
  }
`;

export const SmallTileImageContainer = styled(TileImageContainer)`
  border-radius: 0;
  width: 100%;
  max-width: 100%;
  height: 231px;
  aspect-ratio: calc(177 / 231);

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    height: auto;
    aspect-ratio: calc(177 / 231);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontalMax}px) {
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    border-radius: 5px;
  }
`;

export const DetailTileImageContainer = styled(TileImageContainer)`
  width: 312px;
  height: 100%;
  grid-row: 1 / 3;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    width: 220px;
    grid-row: 1 / 2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVerticalMax}px) {
    width: 180px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 130px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobileMax}px) {
    width: 40vw;
    height: auto;
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

export const NoPersonIcon = styled(NoPersonSVG)`
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

export const DetailDescription = styled(Description)`
  padding-top: 8px;
  justify-content: left;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding-top: 0px;
    gap: 4px;
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

export const SmallTileTitle = styled(MovieTitle)`
  margin: 4px 0 0 0;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    font-size: 14px;
  }
`;

export const DetailMovieTitle = styled(MovieTitle)`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVerticalMax}px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.3;
    color: ${({ theme }) => theme.color.woodSmoke};
  }
`;

export const Subtitle = styled.h4`
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

export const SmallSubtitle = styled(Subtitle)`
  font-size: 18px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    font-size: 13px;
    line-height: 1.3;
  }
`;

export const DetailSubtitle = styled(Subtitle)`
  font-size: 22px;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 1.3;
    color: ${({ theme }) => theme.color.darkGray};
  }
`;

export const Overview = styled.p`
  margin: 24px 0 0 0;
  padding: 0;
  font-size: 20px;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    margin: 16px 0 0 0;
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
  }
`;

//---Additional data---

export const TileData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 4px;
  }
`;

export const TileDataContent = styled.p`
  margin: 0;
  padding: 0;
  font-size: 18px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
    line-height: 1.3;
  }
`;

export const TileDataTitle = styled.span`
  padding-right: 10px;
  color: ${({ theme }) => theme.color.stormGray};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const TileDataTitleException = styled(TileDataTitle)`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    ${({ $personTile }) =>
      $personTile &&
      css`
        display: block;
      `}
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
