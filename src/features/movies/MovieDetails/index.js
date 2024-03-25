import { useDispatch, useSelector } from "react-redux";
import { Section } from "../../../common/Section";
import { SectionHeader } from "../../../common/SectionHeader";
import { useDataURL } from "../../../utils/API/useDataURL";
import { useEffect } from "react";
import { fetchData, selectData } from "../../../utils/API/dataSlice";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const dataURL = useDataURL();

  useEffect(() => {
    dispatch(fetchData(dataURL));
  }, [dispatch, dataURL]);

  const movieDetails = useSelector(selectData);

  return (
    <Section>
      <SectionHeader>{movieDetails.original_title}</SectionHeader>
    </Section>
  );
}

export default MovieDetails;