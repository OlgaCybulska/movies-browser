import { useDispatch, useSelector } from "react-redux";
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
import { useQueryParameters } from "../../../utils/queryParams";
import { searchBarParamName } from "../../../utils/searchBarParamName";
import { SmallGridWrapper } from "../../../common/GridWrapper/styled";
import { StyledLink } from "../../../common/Tile/styled";
import { PersonTile } from "../../../common/Tile";

const PeopleList = () => {
  const dispatch = useDispatch();

  const query = useQueryParameters(searchBarParamName);
  const dataURL = useDataURL(query);
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
              <SectionHeader>
                {query ? `Search results for "${query}"`: "Popular people"}
              </SectionHeader>
              <SmallGridWrapper>
              {popularActors.results ? popularActors.results[0].gender && popularActors.results.map((actor) => (
                <li key={actor.id}>
                  <PersonTile
                          posterPath={actor.profile_path}
                          name={actor.name}
                          id={actor.id}
                        />
                </li>
              )) : null}
              </SmallGridWrapper>
            </Section>
          </Container>
          <Pagination />
        </>
      );
  }
};

export default PeopleList;
