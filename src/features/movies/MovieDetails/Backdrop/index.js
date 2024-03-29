import {
  Backdrop,
  Vignette,
  TitleContainer,
  Title,
  GradientCover,
  BackdropContainer,
} from "./styled";
import Rating from "../../../../common/Rating";
import backdropPicture from "../../../../assets/example_backdrop.jpg";

const BackdropSection = ({ title, votes, rate }) => (
  <BackdropContainer>
    <Backdrop $background={backdropPicture}>
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
