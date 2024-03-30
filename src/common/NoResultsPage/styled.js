import styled from "styled-components";

import { ReactComponent as NoResultsImage } from "../../assets/no_results.svg";

export const StyledNoResultsImage = styled(NoResultsImage)`
  display: block;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.largeMobileMax}px) {
    width: 60%;
    height: 60%;
  }
`;
