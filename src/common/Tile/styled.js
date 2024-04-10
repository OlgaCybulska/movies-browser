import styled, { css } from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom";
import noMovieIcon from "../../assets/icons/noMovie.svg";
import noPersonIcon from "../../assets/icons/noPerson.svg";

//---Main containers for the tiles---

export const StyledMovieTile = styled(Link)`
  text-decoration: none;
  display: flex;
  color: inherit;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 5px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  height: 100%;
  transition: 0.4s ease;

  &:visited {
    color: inherit;
  }
  &:hover {
    transform: translateY(-10px) scale(1.01);
    box-shadow: 0px 4px 20px 0px rgba(78, 78, 78, 0.2);
  }
  &:hover > img:first-child {
    filter: brightness(80%);
    transition: 0.5s ease;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-direction: row;
    align-items: center;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

export const StyledPersonTile = styled(Link)`
  display: block;
  padding: 16px;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  background-color: ${({ theme }) => theme.color.white};
  transition: 0.4s ease;
  height: 100%;

  &:visited {
    color: inherit;
  }
  &:hover {
    transform: translateY(-10px) scale(1.01);
    box-shadow: 0px 4px 20px 0px rgba(78, 78, 78, 0.2);
  }
  &:hover > img:first-child {
    filter: brightness(80%);
    transition: 0.5s ease;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 8px;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

export const StyledDetailTile = styled.article`
  margin-top: 64px;
  background: white;
  color: ${({ theme }) => theme.color.black};
  padding: 40px;
  display: grid;
  justify-items: center;
  grid-template-areas:
    "p i"
    "p d"
    "p e";
  grid-column-gap: 40px;
  grid-template-columns: minmax(114px, 312px) auto;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    margin: 64px 16px 0 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobileMax}px) {
    margin-top: 32px;
    padding: 16px;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-areas:
      "p i"
      "p i"
      "d d";
    grid-template-columns: 200px auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 16px;
    grid-template-columns: 120px auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobileMax}px) {
    grid-template-columns: 90px auto;
  }
`;

//---Posters and placeholders---

export const TilePoster = styled.img`
  border-radius: 5px;
  object-fit: cover;
  aspect-ratio: 2 / 3;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    max-width: 114px;
    flex-shrink: 0;
  }
`;

export const PersonTilePoster = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
  aspect-ratio: 3 / 4;
`;

export const DetailTilePoster = styled.img`
  width: 100%;
  border-radius: 5px;
  grid-area: p;
`;

export const NoMoviePlaceholder = styled.div`
  max-height: 750px;
  max-width: 500px;
  aspect-ratio: 2 / 3;
  background-color: ${({ theme }) => theme.color.silver};
  border-radius: 5px;
  object-fit: cover;
  background-image: url(${noMovieIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 28%;
  grid-area: p;

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobileMax}px) {
    width: 114px;
    background-size: auto;
    flex-shrink: 0;
  }
`;

export const NoPersonPlaceholder = styled.div`
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.silver};
  background-image: url(${noPersonIcon});
  background-repeat: no-repeat;
  background-position: center;
  grid-area: 1 / 1 / 4 / 2;

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobileMax}px) {
    width: 100%;
  }
`;

//---Description container with the movie details---

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    display: block;
  }
`;

export const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-self: left;
  margin-bottom: 24px;
  grid-area: i;

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobileMax}px) {
    margin-bottom: 16px;
    gap: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 0px;
    gap: 8px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobileMax}px) {
    gap: 4px;
  }
`;

export const Overview = styled.p`
  font-size: 20px;
  line-height: 160%;
  margin: 0px;
  grid-area: d;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptopMax}px) {
    margin: 16px 0 0 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontalMax}px) {
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVerticalMax}px) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobileMax}px) {
    margin: 4px 0 0 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobileMax}px) {
    font-size: 12px;
  }
`;

//---Titles---

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

export const PersonTitle = styled(MovieTitle)`
  color: ${({ theme }) => theme.color.woodSmoke};
  margin: 12px 0 0 0;
  word-break: break-word;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVerticalMax}px) {
    font-size: 20px;
    margin: 10px 0 0 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobileMax}px) {
    font-size: 14px;
    margin: 8px 0 0 0;
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

//---Subtitles---

export const Subtitle = styled.h4`
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.color.waterloo};
  margin: 8px 0 0 0;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
  }
`;

export const PersonSubtitle = styled(Subtitle)`
  font-size: 18px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVerticalMax}px) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobileMax}px) {
    font-size: 12px;
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

//---Additional data---

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 4px;
  }
`;

export const AboutContent = styled.p`
  margin: 0;
  padding: 0;
  font-size: 18px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
    line-height: 1.3;
  }
`;

export const AboutTitle = styled.span`
  padding-right: 10px;
  color: ${({ theme }) => theme.color.stormGray};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const AboutTitleException = styled(AboutTitle)`
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
  margin: 8px 0 0 0;
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
