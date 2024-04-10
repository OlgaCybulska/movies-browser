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
import { formatYear } from "../../utils/dataFormatFunctions";

export const Tile = ({
  movieTile,
  isOnMovieDetails,
  title,
  subtitle,
  rate,
  genres,
  role,
  votes,
  posterPath,
  link,
}) => {
  return (
    <StyledMovieTile to={link}>
      {posterPath ? (
        <TilePoster src={`${posterURL}${posterPath}`} alt="Poster" />
      ) : (
        <div>
          <NoMoviePlaceholder />
        </div>
      )}

      <MovieInfo>
        <div>
          <MovieTitle>{title}</MovieTitle>
          <Subtitle>
            {movieTile
              ? `${subtitle}`
              : `${role} ${subtitle ? `(${formatYear(subtitle)})` : ""}`}
          </Subtitle>
          <Genres $movieDetails={isOnMovieDetails}>
            {genres
              ? genres.map((genre, id) => <GenreTag key={id}>{genre}</GenreTag>)
              : ""}
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
  movieTile,
  rate,
  title,
  subtitle,
  votes,
  posterPath,
  isOnMovieDetails,
  genres,
  overview,
  isOnMainTile,
  isOnBackdrop,
  firstData,
  secondData,
}) => {
  return (
    <StyledDetailTile>
      {posterPath ? (
        <DetailTilePoster src={`${posterURL}${posterPath}`} alt="Poster" />
      ) : movieTile ? (
        <NoMoviePlaceholder />
      ) : (
        <NoPersonPlaceholder />
      )}
      <DetailInfo>
        <DetailMovieTitle>{title}</DetailMovieTitle>
        {subtitle && <DetailSubtitle>{subtitle}</DetailSubtitle>}
        {firstData && (
          <AboutContainer>
            <AboutContent>
              <AboutTitle>
                {movieTile ? `Production: ` : `Date of birth: `}
              </AboutTitle>
              {firstData}
            </AboutContent>
            <AboutContent>
              <AboutTitle>
                {movieTile ? `Release date: ` : `Place of birth: `}
              </AboutTitle>
              {secondData}
            </AboutContent>
          </AboutContainer>
        )}

        {movieTile ? (
          <>
            <Genres $movieDetails={isOnMovieDetails}>
              {genres
                ? genres.map((genre, id) => (
                    <GenreTag key={id}>{genre}</GenreTag>
                  ))
                : null}
            </Genres>
            {rate && (
              <Rating
                votes={votes}
                rate={rate}
                isOnBackdrop={isOnBackdrop}
                isOnMainTile={isOnMainTile}
              />
            )}
          </>
        ) : (
          ""
        )}
      </DetailInfo>
      {overview && <Overview>{overview}</Overview>}
    </StyledDetailTile>
  );
};
