import { useDispatch, useSelector } from "react-redux";
import { maxPageNumber } from "../../utils/maxPageNumber";
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
import { selectPage, setFirstPage, setLastPage, setNextPage, setPreviousPage } from "./paginationSlice";

export const Pagination = () => {
  const page = useSelector(selectPage);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Button onClick={() => { dispatch(setFirstPage()) }}>
        <VectorLeft />
        <VectorMobileLeft />
        <ButtonText>First</ButtonText>
      </Button>
      <Button onClick={() => { dispatch(setPreviousPage()) }}>
        <VectorLeft />
        <ButtonText>Previous</ButtonText>
      </Button>
      <TextContainer>
        <TextNormal>Page</TextNormal>
        <TextBold>{page}</TextBold>
        <TextNormal>of</TextNormal>
        <TextBold>{maxPageNumber}</TextBold>
      </TextContainer>
      <Button onClick={() => { dispatch(setNextPage()) }}>
        <ButtonText>Next</ButtonText>
        <Vector />
      </Button>
      <Button onClick={() => { dispatch(setLastPage()) }}>
        <ButtonText>Last</ButtonText>
        <VectorMobile />
        <Vector />
      </Button>
    </Wrapper>
  );
};
