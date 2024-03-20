import { useEffect, useSelector } from "react";
import { useHistory, useLocation } from "react-router-dom";
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
  const history = useHistory();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const currentPage = searchParams.get("page");

  const maxPages = 500;

  useEffect(() => {
    if (+currentPage < 1) {
      return (
        searchParams.set("page", 1),
        history.push(`${location.pathname}?${searchParams.toString()}`)
      );
    }
    if (+currentPage >= maxPages + 1) {
      return (
        searchParams.set("page", maxPages),
        history.push(`${location.pathname}?${searchParams.toString()}`)
      );
    }
  }, [currentPage]);

  const toFirstPage = () => {
    searchParams.set("page", 1);
    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  const onDecrement = () => {
    searchParams.set("page", +currentPage - 1);
    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  const onIncrement = () => {
    searchParams.set("page", +currentPage + 1);
    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  const toLastPage = () => {
    searchParams.set("page", maxPages);
    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <Wrapper>
      <Button onClick={toFirstPage}>
        <VectorLeft />
        <VectorMobileLeft />
        <ButtonText>First</ButtonText>
      </Button>
      <Button onClick={onDecrement}>
        <VectorLeft />

        <ButtonText>Previous</ButtonText>
      </Button>
      <TextContainer>
        <TextNormal>Page</TextNormal>
        <TextBold>1</TextBold>
        <TextNormal>of</TextNormal>
        <TextBold>500</TextBold>
      </TextContainer>
      <Button onClick={onIncrement}>
        <ButtonText>Next</ButtonText>
        <Vector />
      </Button>
      <Button onClick={toLastPage}>
        <ButtonText>Last</ButtonText>
        <VectorMobile />
        <Vector />
      </Button>
    </Wrapper>
  );
};
