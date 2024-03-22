import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useEffect } from "react";
import { Container } from "../../../common/Container";
import { Section } from "../../../common/Section";
import { SectionHeader } from "../../../common/SectionHeader";
import { useDataURL } from "../../../utils/API/useDataURL";
import { Pagination } from "../../../common/Pagination";
import { fetchData, selectDataList, selectStatus } from "../../../utils/API/dataSlice";
import { LoadingPage } from "../../../common/LoadingPage";
import { ErrorPage } from "../../../common/ErrorPage";
import { selectPage } from "../../../common/Pagination/paginationSlice";
import { selectSearchContent } from "../../SiteHeader/NavBar/navBarSlice";

const PeopleList = () => {
  const dispatch = useDispatch();

  const searchContent = useSelector(selectSearchContent);
  const page = useSelector(selectPage);
  const dataURL = useDataURL(searchContent, page);
  const status = useSelector(selectStatus);
  
  useEffect(() => {
      dispatch(fetchData(dataURL));
  }, [dataURL, searchContent, page, dispatch]);

  const popularActors = useSelector(selectDataList);

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
                Popular people
              </SectionHeader>
              {popularActors[0].gender && popularActors.map((actor) => (
                <li key={actor.id}>
                  <Link to={`/people/${actor.id}`}>
                    {actor.name}
                  </Link>
                </li>
              ))}
            </Section>
          </Container>
          <Pagination />
        </>
      );
  }
}

export default PeopleList;