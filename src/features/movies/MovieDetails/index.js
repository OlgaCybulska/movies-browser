import { useDispatch, useSelector } from "react-redux";
import { Section } from "../../../common/Section";
import { SectionHeader } from "../../../common/SectionHeader";
import { useDataURL } from "../../../utils/API/useDataURL";
import { useEffect } from "react";
import { fetchAdditionalData, fetchData, selectData, selectStatus } from "../../../utils/API/dataSlice";
import { useAdditionalDataURL } from "../../../utils/API/useAdditionalDataURL";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const dataURL = useDataURL();
  const status = useSelector(selectStatus);
  const additionalDataURL = useAdditionalDataURL();

  useEffect(() => {
    dispatch(fetchData(dataURL));
    dispatch(fetchAdditionalData(additionalDataURL));
  }, [dispatch, dataURL, additionalDataURL]);

  const movieDetails = useSelector(selectData);

  return (
    <Section>
      <SectionHeader>{movieDetails.original_title}</SectionHeader>
    </Section>
  );
}

export default MovieDetails;