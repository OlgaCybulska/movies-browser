import { useDispatch, useSelector } from "react-redux";
import { Section } from "../../../common/Section";
import { SectionHeader } from "../../../common/SectionHeader";
import { useDataURL } from "../../../utils/API/useDataURL";
import { fetchAdditionalData, fetchData, selectData, selectStatus } from "../../../utils/API/dataSlice";
import { useEffect } from "react";
import { useAdditionalDataURL } from "../../../utils/API/useAdditionalDataURL";

const PeopleDetails = () => {
  const dispatch = useDispatch();
  const dataURL = useDataURL();
  const status = useSelector(selectStatus);
  const additionalDataURL = useAdditionalDataURL();

  useEffect(() => {
    dispatch(fetchData(dataURL));
    dispatch(fetchAdditionalData(additionalDataURL));
  }, [dispatch, dataURL, additionalDataURL]);

  const peopleDetails = useSelector(selectData);

  return (
    <Section>
      <SectionHeader>{peopleDetails.name}</SectionHeader>
    </Section>
  );
};

export default PeopleDetails;