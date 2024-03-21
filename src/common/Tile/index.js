import {
  Description,
  MovieTitle,
  Poster,
  Rate,
  RateStar,
  Ratings,
  GenreTag,
  Genres,
  TileContainer,
  TileImageContainer,
  TilePoster,
  Votes,
  Year,
  NoMovieIcon,
} from "./styled";
import { posterURL } from "../../utils/API/apiDataURLs";
import { motion } from "framer-motion";

export const Tile = ({ title, year, rate, votes, posterPath }) => {
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
          <Year>{year}</Year>
          <Genres>
            <GenreTag>Action</GenreTag>
            <GenreTag>Adventure</GenreTag>
            <GenreTag>Drama</GenreTag>
          </Genres>
          <Ratings>
            <RateStar />
            <Rate>{rate}</Rate>
            <Votes>{votes} votes</Votes>
          </Ratings>
        </Description>
      </TileContainer>
    </motion.div>
  );
};
