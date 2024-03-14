import {
  Button,
  ErrorContainer,
  ErrorSubHeader,
  StyledErrorIcon,
  StyledSectionHeader,
} from "./styled";
import errorIcon from "../../assets/error.png";

export const ErrorPage = () => {
  return (
    <ErrorContainer>
      <StyledErrorIcon src={errorIcon} alt="Error Icon" />
      <StyledSectionHeader>Ooops! Something went wrong...</StyledSectionHeader>
      <ErrorSubHeader>
        Please check your network connection
        <br />
        and try again
      </ErrorSubHeader>
      <Button>Back to home page</Button>
    </ErrorContainer>
  );
};
