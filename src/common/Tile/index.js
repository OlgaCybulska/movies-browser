import {
  Description,
  MovieTitle,
  GenreTag,
  Genres,
  TileContainer,
  TileImageContainer,
  TilePoster,
  NoMovieIcon,
  Subtitle,
  DetailTileContainer,
  DetailTileImageContainer,
  DetailDescription,
  DetailMovieTitle,
  DetailSubtitle,
  Overview,
  TileData,
  TileDataContent,
  TileDataTitle,
  SmallTileContainer,
  SmallTileImageContainer,
  SmallTileTitle,
  SmallSubtitle,
  NoPersonIcon,
} from "./styled";
import { posterURL } from "../../utils/API/apiDataURLs";
import { motion } from "framer-motion";
import Rating from "../Rating";

export const Tile = ({ title, subtitle, rate, votes, posterPath }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <TileContainer>
        <TileImageContainer>
          {posterPath ? (
            <TilePoster src={`${posterURL}${posterPath}`} alt="Poster" />
          ) : (
            <NoMovieIcon />
          )}
        </TileImageContainer>
        <Description>
          <MovieTitle>{title}</MovieTitle>
          <Subtitle>{subtitle}</Subtitle>
          <Genres>
            <GenreTag>Action</GenreTag>
            <GenreTag>Adventure</GenreTag>
            <GenreTag>Drama</GenreTag>
          </Genres>
          <Rating rate={rate} votes={votes} />
        </Description>
      </TileContainer>
    </motion.div>
  );
};

export const SmallTile = ({ posterPath, title, subtitle }) => {
  return (
    <SmallTileContainer>
      <SmallTileImageContainer>
        {posterPath ? (
          <TilePoster src={`${posterURL}${posterPath}`} alt="" />
        ) : (
          <NoPersonIcon />
        )}
      </SmallTileImageContainer>
      <SmallTileTitle>{title}</SmallTileTitle>
      <SmallSubtitle>{subtitle}</SmallSubtitle>
    </SmallTileContainer>
  );
};

export const DetailTile = ({
  movieTile,
  title,
  subtitle,
  rate,
  votes,
  posterPath,
  overview,
  isOnMainTile,
  isOnBackdrop,
  firstData,
  secondData,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <DetailTileContainer>
        <DetailTileImageContainer>
          {posterPath ? (
            <TilePoster src={`${posterURL}${posterPath}`} alt="Poster" />
          ) : (
            <NoMovieIcon />
          )}
        </DetailTileImageContainer>
        <DetailDescription>
          <DetailMovieTitle>{title}</DetailMovieTitle>
          {title && <DetailSubtitle>{subtitle}</DetailSubtitle>}
          {firstData && (
            <TileData>
              <TileDataContent>
                <TileDataTitle>
                  {movieTile ? `Production: ` : `Date of birth: `}
                </TileDataTitle>

                {firstData}
              </TileDataContent>
              <TileDataContent>
                <TileDataTitle>
                  {movieTile ? `Release date: ` : `Place of birth: `}
                </TileDataTitle>

                {secondData}
              </TileDataContent>
            </TileData>
          )}
          {movieTile ? (
            <>
              <Genres>
                <GenreTag>Action</GenreTag>
                <GenreTag>Adventure</GenreTag>
                <GenreTag>Drama</GenreTag>
              </Genres>
              <Rating
                votes={votes}
                rate={rate}
                isOnBackdrop={isOnBackdrop}
                isOnMainTile={isOnMainTile}
              />
            </>
          ) : null}
        </DetailDescription>
        {overview && <Overview>{overview}</Overview>}
      </DetailTileContainer>
    </motion.div>
  );
};
