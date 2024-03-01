import {
  Description,
  MovieTitle,
  Poster,
  Rate,
  RateStar,
  Ratings,
  Tag,
  Tags,
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
        <Tags>
          <Tag>Action</Tag>
          <Tag>Adventure</Tag>
          <Tag>Drama</Tag>
        </Tags>
      </Description>
      <Ratings>
        <RateStar />
        <Rate>{rate}</Rate>
        <Votes>{votes} votes</Votes>
      </Ratings>
    </TileContainer>
  );
};
