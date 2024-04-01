import {
  MovieTitle,
  GenreTag,
  Genres,
  TilePoster,
  Subtitle,
  DetailMovieTitle,
  DetailSubtitle,
  Overview,
  StyledMovieTile,
  MovieInfo,
  DetailTilePoster,
  StyledDetailTile,
  NoPersonPlaceholder,
  NoMoviePlaceholder,
  PersonTitle,
  PersonTilePoster,
  StyledPersonTile,
  PersonSubtitle,
  DetailInfo,
  AboutContent,
  AboutTitle,
  AboutContainer,
} from "./styled";
import { posterURL } from "../../utils/API/apiDataURLs";
import Rating from "../Rating";

export const Tile = ({ title, subtitle, rate, votes, posterPath, link }) => {
  return (
    <StyledMovieTile to={link}>
      {posterPath ? (
        <TilePoster src={`${posterURL}${posterPath}`} alt="Poster" />
      ) : (
        <NoMoviePlaceholder />
      )}

      <MovieInfo>
        <div>
          <MovieTitle>{title}</MovieTitle>
          <Subtitle>{subtitle}</Subtitle>
          <Genres>
            <GenreTag>Action</GenreTag>
            <GenreTag>Adventure</GenreTag>
            <GenreTag>Drama</GenreTag>
            <GenreTag>ScienceFiction</GenreTag>
            <GenreTag>Horror</GenreTag>
          </Genres>
        </div>
        <Rating rate={rate} votes={votes} />
      </MovieInfo>
    </StyledMovieTile>
  );
};

export const PersonTile = ({ posterPath, name, subtitle, id }) => {
  return (
    <StyledPersonTile to={`/people/${id}`}>
      {posterPath ? (
        <PersonTilePoster src={`${posterURL}${posterPath}`} alt="Poster" />
      ) : (
        <NoPersonPlaceholder />
      )}
      <PersonTitle>{name}</PersonTitle>
      <PersonSubtitle>{subtitle}</PersonSubtitle>
    </StyledPersonTile>
  );
};

export const DetailTile = ({
  title,
  subtitle,
  rate,
  votes,
  posterPath,
  tags,
  overview,
  isOnMainTile,
  isOnBackdrop,
  firstData,
  secondData,
}) => {
  return (
    <StyledDetailTile>
      {posterPath ? (
        <DetailTilePoster src={posterPath} alt="Poster" />
      ) : (
        <NoMoviePlaceholder />
      )}
      <DetailInfo>
        <DetailMovieTitle>{title}</DetailMovieTitle>
        {title && <DetailSubtitle>{subtitle}</DetailSubtitle>}
        {firstData && (
          <AboutContainer>
            <AboutContent>
              <AboutTitle>Production:</AboutTitle>
              {firstData}
            </AboutContent>
            <AboutContent>
              <AboutTitle>Release date:</AboutTitle>
              {secondData}
            </AboutContent>
          </AboutContainer>
        )}
        <>
          <Genres>
            {tags.map(({ name }) => (
              <GenreTag key={name}>{name}</GenreTag>
            ))}
          </Genres>
          <Rating
            votes={votes}
            rate={rate}
            isOnBackdrop={isOnBackdrop}
            isOnMainTile={isOnMainTile}
          />
        </>
      </DetailInfo>
      {overview && <Overview>{overview}</Overview>}
    </StyledDetailTile>
  );
};
