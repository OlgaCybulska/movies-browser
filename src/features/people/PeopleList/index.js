import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../common/Container";
import { Section } from "../../../common/Section";
import { SectionHeader } from "../../../common/SectionHeader";
import { useDataURL } from "../../../utils/API/useDataURL";
import { Pagination } from "../../../common/Pagination";
import { useEffect } from "react";
import { fetchData, selectDataList } from "../../../utils/API/dataSlice";

const PeopleList = () => {
  const dispatch = useDispatch();
  const dataURL = useDataURL();

  useEffect(() => {
    dispatch(fetchData(dataURL));
  }, [dataURL]);

  const popularActors = useSelector(selectDataList);

  return (
    <>
      <Container>
        <Section>
          <SectionHeader>
            Popular people
          </SectionHeader>
          {/* {popularActors.map((actor) => (
                  <li key={actor.id}>
                    <StyledLink to={`/movies/${actor.id}`}>
                      <Tile
                        posterPath={actor.poster_path}
                        title={actor.original_title}
                        year={actor.release_date.slice(0, 4)}
                        rate={actor.vote_average.toFixed(1)}
                        votes={actor.vote_count}
                      />
                    </StyledLink>
                  </li>
                ))} */}
        </Section>
      </Container>
      <Pagination />
    </>
  );
}

export default PeopleList;