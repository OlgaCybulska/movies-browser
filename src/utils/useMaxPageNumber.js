import { useSelector } from "react-redux";
import { selectData } from "./API/dataSlice";

export const maxPageNumber = 500;

export const useMaxPageNumber = () => {
  const data = useSelector(selectData);

  if (data.total_pages < 500) {
    return data.total_pages;
  }

  return 500;
}