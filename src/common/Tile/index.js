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
  Votes,
  Year,
} from "./styled";
import examplePoster from "../../assets/poster.png";

export const Tile = ({ title, year, rate, votes }) => {
  return (
    <TileContainer>
      <Poster src={examplePoster} alt="Poster" />
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
  );
};
