import {
  Button,
  ErrorContainer,
  ErrorSubHeader,
  StyledErrorIcon,
  StyledLink,
  StyledSectionHeader,
} from "./styled";
import errorIcon from "../../assets/error.png";

const ErrorPage = () => {
  return (
    <ErrorContainer>
      <StyledErrorIcon src={errorIcon} alt="Error Icon" />
      <StyledSectionHeader>Ooops! Something went wrong...</StyledSectionHeader>
      <ErrorSubHeader>
        Please check your network connection
        <br />
        and try again
      </ErrorSubHeader>
      <StyledLink to="/movies-browser#/movies">
        <Button>Back to home page</Button>
      </StyledLink>
    </ErrorContainer>
  );
};

export default ErrorPage;
