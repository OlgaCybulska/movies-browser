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
      <Button
        disabled={page === 1}
        onClick={() => { dispatch(setFirstPage()) }}
      >
        <VectorLeft $disabled={page === 1} />
        <VectorMobileLeft $disabled={page === 1} />
        <ButtonText>First</ButtonText>
      </Button>
      <Button
        disabled={page === 1}
        onClick={() => { dispatch(setPreviousPage()) }}
      >
        <VectorLeft $disabled={page === 1} />
        <ButtonText>Previous</ButtonText>
      </Button>
      <TextContainer>
        <TextNormal>Page</TextNormal>
        <TextBold>{page}</TextBold>
        <TextNormal>of</TextNormal>
        <TextBold>{maxPageNumber}</TextBold>
      </TextContainer>
      <Button
        disabled={page === maxPageNumber}
        onClick={() => { dispatch(setNextPage()) }}
      >
        <ButtonText>Next</ButtonText>
        <Vector $disabled={page === maxPageNumber} />
      </Button>
      <Button
        disabled={page === maxPageNumber}
        onClick={() => { dispatch(setLastPage()) }}
      >
        <ButtonText>Last</ButtonText>
        <VectorMobile $disabled={page === maxPageNumber} />
        <Vector $disabled={page === maxPageNumber} />
      </Button>
    </Wrapper>
  );
};
