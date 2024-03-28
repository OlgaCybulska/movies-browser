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

export const Tile = ({ title, subtitle, genres, rate, votes, posterPath }) => {
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
            {genres
              ? genres.map((genre, id) => <GenreTag key={id}>{genre}</GenreTag>)
              : ""}
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
          // <TilePoster src={`${posterURL}${posterPath}`} alt="" /> this line to use for future API data
          <TilePoster src={posterPath} alt="Poster" />
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
  title,
  subtitle,
  genres,
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
            // <TilePoster src={`${posterURL}${posterPath}`} alt="Poster" /> this line to use for future API data
            <TilePoster src={posterPath} alt="Poster" />
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
                <TileDataTitle>Production:</TileDataTitle>

                {firstData}
              </TileDataContent>
              <TileDataContent>
                <TileDataTitle>Release date:</TileDataTitle>

                {secondData}
              </TileDataContent>
            </TileData>
          )}
          <>
            <Genres>
              {genres
                ? genres.map((genreName, id) => (
                    <GenreTag key={id}>{genreName}</GenreTag>
                  ))
                : ""}
            </Genres>
            <Rating
              votes={votes}
              rate={rate}
              isOnBackdrop={isOnBackdrop}
              isOnMainTile={isOnMainTile}
            />
          </>
        </DetailDescription>
        {overview && <Overview>{overview}</Overview>}
      </DetailTileContainer>
    </motion.div>
  );
};
