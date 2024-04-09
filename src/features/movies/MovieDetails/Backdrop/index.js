import {
  Backdrop,
  Vignette,
  TitleContainer,
  Title,
  GradientCover,
  BackdropContainer,
} from "./styled";
import Rating from "../../../../common/Rating";

const BackdropSection = ({ backgroundURL, title, votes, rate }) => (
  <BackdropContainer>
    <Backdrop $background={backgroundURL}>
      <GradientCover />
      <Vignette />
      <TitleContainer>
        <Title>{title}</Title>
        <Rating
          votes={votes}
          rate={rate}
          isOnBackdrop={true}
          isOnMainTile={false}
        />
      </TitleContainer>
    </Backdrop>
  </BackdropContainer>
);

export default BackdropSection;
