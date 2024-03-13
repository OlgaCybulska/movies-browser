/*import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";*/
import {
  Button,
  TextBold,
  TextContainer,
  TextNormal,
  Vector,
  VectorLeft,
  Wrapper,
  ButtonText,
  VectorMobileLeft,
  VectorMobile,
} from "./styled";

export const Pagination = () => {
  const location = useLocation();
  const history = useHistory();

  const searchParams = new URLSearchParams(location.search);
  const currentPage = searchParams.get(page);

  return (
    <Wrapper>
      <Button>
        <VectorLeft />
        <VectorMobileLeft />
        <ButtonText>First</ButtonText>
      </Button>
      <Button>
        <VectorLeft />

        <ButtonText>Previous</ButtonText>
      </Button>
      <TextContainer>
        <TextNormal>Page</TextNormal>
        <TextBold>1</TextBold>
        <TextNormal>of</TextNormal>
        <TextBold>500</TextBold>
      </TextContainer>
      <Button>
        <ButtonText>Next</ButtonText>
        <Vector />
      </Button>
      <Button>
        <ButtonText>Last</ButtonText>
        <VectorMobile />
        <Vector />
      </Button>
    </Wrapper>
  );
};
