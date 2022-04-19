import styled from "styled-components";

export const Tags = styled.div`
  color: #c4c4c4;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 21px;
  padding: 6px;
  border: 1px solid rgba(211, 212, 214, 0.9);
  border-radius: 20px;
`;

export const ColumnTitle = styled.div`
  margin-top: 1rem;
  font-family: ${({ theme }) => theme.fonts.headline};
  color: #f1f4f5;
  font-size: 3rem;
  font-weight: 400;
  line-height: 1.125rem;
  padding: 0.375rem;
`;

export const HeaderBlock = styled.div`
  min-height: 7.5vh;
  font-family: ${({ theme }) => theme.fonts.normal};
`;

export const Column = styled.div`
  background-color: ${({ bg }) => (bg ? bg : "#30363E")};
  width: ${({ w }) => (w ? w : "50%")};
  align-items: ${({ fa }) => (fa ? fa : "flex-start")};
  display: flex;
  flex-direction: column;
  border-radius: 25px 25px 0px 0px;
  padding: 1rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > ${Tags} {
    margin-top: 1.375rem;
    margin-left: 1rem;
  }
`;

export const Type = styled.div`
  color: #d3d4d6;
  font-size: 1.5rem;
  font-weight: 400;
  font-style: italic;
  margin-left: 1rem;
  margin-top: 0.875rem;
  line-height: 2.5rem;
`;

export const Vision = styled.div`
  color: #d3d4d6;
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 1rem;
  line-height: 2.5rem;
`;

export const Username = styled.div`
  color: #c4c4c4;
  font-size: 1.5rem;
  font-weight: 400;
  margin-right: 1rem;
  line-height: 2.1875rem;
`;
export const UsernameAvatar = styled.img`
  width: 2.1875rem;
  height: 2.1875rem;
  margin-right: 1rem;
`;
export const Date = styled.div`
  color: #c4c4c4;
  font-size: 1.5rem;
  font-weight: 400;
  margin-right: 1rem;
  line-height: 2.1875rem;
`;
export const Commitment = styled.div`
  color: #c4c4c4;
  font-size: 1.5rem;
  font-weight: 400;
  margin-right: 1rem;
  line-height: 2.1875rem;
`;
