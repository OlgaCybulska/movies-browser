import { Rate, RateStar, RatingContainer, RatingRange, Votes } from "./styled";

const Rating = ({ rate, votes, isOnBackdrop, isOnMainTile }) => {
  return (
    <>
      {votes ? (
        <RatingContainer $backdrop={isOnBackdrop} $mainTile={isOnMainTile}>
          <RateStar $backdrop={isOnBackdrop} $mainTile={isOnMainTile} />
          <Rate $backdrop={isOnBackdrop} $mainTile={isOnMainTile}>
            {rate}
          </Rate>
          <RatingRange $backdrop={isOnBackdrop} $mainTile={isOnMainTile}>
            / 10
          </RatingRange>
          <Votes $backdrop={isOnBackdrop} $mainTile={isOnMainTile}>
            {votes} votes
          </Votes>
        </RatingContainer>
      ) : (
        <RatingContainer $backdrop={isOnBackdrop} $mainTile={isOnMainTile}>
          <Votes $backdrop={isOnBackdrop} $mainTile={isOnMainTile}>
            No votes yet
          </Votes>
        </RatingContainer>
      )}
    </>
  );
};

export default Rating;
