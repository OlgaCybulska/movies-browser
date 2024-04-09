import { useDispatch, useSelector } from "react-redux";
import { useMaxPageNumber } from "../../utils/useMaxPageNumber";
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
import { selectPage, setPage } from "./paginationSlice";

export const Pagination = () => {
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  const maxPageNumber = useMaxPageNumber();

  return (
    <Wrapper>
      <Button
        disabled={page === 1}
        onClick={() => { dispatch(setPage(1)) }}
      >
        <VectorLeft $disabled={page === 1} />
        <VectorMobileLeft $disabled={page === 1} />
        <ButtonText>First</ButtonText>
      </Button>
      <Button
        disabled={page === 1}
        onClick={() => { dispatch(setPage(page - 1)) }}
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
        onClick={() => { dispatch(setPage(page + 1)) }}
      >
        <ButtonText>Next</ButtonText>
        <Vector $disabled={page === maxPageNumber} />
      </Button>
      <Button
        disabled={page === maxPageNumber}
        onClick={() => { dispatch(setPage(maxPageNumber)) }}
      >
        <ButtonText>Last</ButtonText>
        <VectorMobile $disabled={page === maxPageNumber} />
        <Vector $disabled={page === maxPageNumber} />
      </Button>
    </Wrapper>
  );
};
