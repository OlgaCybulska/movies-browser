import { useDispatch, useSelector } from "react-redux";
import { Section } from "../../../common/Section";
import { SectionHeader } from "../../../common/SectionHeader";
import { useDataURL } from "../../../utils/API/useDataURL";
import { fetchData, selectDataDetails } from "../../../utils/API/dataSlice";
import { useEffect } from "react";

const PeopleDetails = () => {
  const dispatch = useDispatch();
  const dataURL = useDataURL();

  useEffect(() => {
    dispatch(fetchData(dataURL));
  }, [dispatch, dataURL]);

  const peopleDetails = useSelector(selectDataDetails);

  return (
    <Section>
      <SectionHeader>{peopleDetails.name}</SectionHeader>
    </Section>
  );
};

export default PeopleDetails;