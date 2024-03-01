import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../assets/shape-star.svg";

export const TileContainer = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
`;

export const Poster = styled.img`
  border-radius: 5px;
  width: 292px;
  height: 434px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  margin-top: 16px;
  padding: 0;
`;

export const MovieTitle = styled.h2`
  font-weight: 500;
  font-size: 22px;
  margin: 0;
  padding: 0;
`;

export const Year = styled.caption`
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.color.waterloo};
  margin: 0;
  padding: 0;
`;

export const Tags = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Tag = styled.li`
  display: inline-flex;
  padding: 8px 16px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.mystic};
  font-size: 14px;
  font-weight: 400;
`;

export const Ratings = styled.div`
  margin-top: 39px;
  display: flex;
  gap: 12px;
  align-items: flex-start;
`;

export const RateStar = styled(StarIcon)`
  width: 24px;
  height: auto;
`;

export const Rate = styled.span`
  font-weight: 600;
`;
export const Votes = styled.span`
  font-weight: 400;
  color: ${({ theme }) => theme.color.waterloo};
`;
