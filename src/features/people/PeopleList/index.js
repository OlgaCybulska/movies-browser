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

const PeopleList = () => {
  const dispatch = useDispatch();
  const dataURL = useDataURL();
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchData(dataURL));
  }, [dataURL]);

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
              {popularActors.map((actor) => (
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