import styled from "styled-components";

export const HeaderBlock = styled.div`
  background-color: #30363e;
  min-height: 7.5vh;
  font-family: "Roboto", sans-serif;
  padding: 1rem;
  border-radius: 25px 25px 0 0;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderTitle = styled.div`
  color: #f1f4f5;
  font-size: 3rem;
  font-weight: 700;
  font-style: bold;
  margin-top: 1rem;
  margin-left: 1rem;
  line-height: 18px;
`;
export const HeaderSubtitle = styled.div`
  color: #d3d4d6;
  font-size: 1.5rem;
  font-weight: 400;
  font-style: italic;
  margin-top: 1rem;
  margin-left: 1rem;
  line-height: 40px;
`;
export const Username = styled.div`
  color: #c4c4c4;
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 1rem;
  margin-right: 1rem;
  line-height: 18px;
`;
export const Date = styled.div`
  color: #c4c4c4;
  font-size: 1.125rem;
  font-weight: 400;
  margin-top: 1rem;
  margin-right: 1rem;
  line-height: 18px;
`;
export const Commitment = styled.div`
  color: #c4c4c4;
  font-size: 1.875rem;
  font-weight: 400;
  margin-top: 3rem;
  margin-right: 1rem;
  line-height: 18px;
`;
export const Tags = styled.div`
  color: #c4c4c4;
  font-size: 1.125rem;
  font-weight: 400;
  margin-top: 1rem;
  margin-left: 1rem;
  line-height: 21px;
  padding: 6px;
  border: 1px solid rgba(211, 212, 214, 0.9);
  border-radius: 20px;
`;
