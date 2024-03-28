import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Container } from "../../../common/Container";
import { Section } from "../../../common/Section";
import { SectionHeader } from "../../../common/SectionHeader";
import { useDataURL } from "../../../utils/API/useDataURL";
import { Pagination } from "../../../common/Pagination";
import {
  fetchData,
  selectData,
  selectStatus,
} from "../../../utils/API/dataSlice";
import LoadingPage from "../../../common/LoadingPage";
import ErrorPage from "../../../common/ErrorPage";
import { SmallGridWrapper, StyledLink } from "../../../common/Tile/styled";
import { SmallTile } from "../../../common/Tile";

const PeopleList = () => {
  const dispatch = useDispatch();

  const dataURL = useDataURL();
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchData(dataURL));
  }, [dataURL, dispatch]);

  const popularActors = useSelector(selectData);

  switch (status) {
    case "initial":
      return null;
    case "loading":
      return <LoadingPage />;
    case "error":
      return <ErrorPage />;
    case "success":
      return (
        <>
          <Container>
            <Section>
              <SectionHeader>Popular people</SectionHeader>
              <SmallGridWrapper>
                {popularActors.results
                  ? popularActors.results[0].gender &&
                    popularActors.results.map((actor) => (
                      <li key={actor.id}>
                        <StyledLink to={`/people/${actor.id}`}>
                          <SmallTile
                            posterPath={actor.profile_path}
                            title={actor.name}
                          />
                        </StyledLink>
                      </li>
                    ))
                  : null}
              </SmallGridWrapper>
            </Section>
          </Container>
          <Pagination />
        </>
      );
  }
};

export default PeopleList;
