import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-radius: 40px;
  flex-direction: column;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: ${({ theme }) => theme.colors.NEUTRAL_4};
  flex-grow: 1;
`;

export const CardHeader = styled.div`
  border-radius: 40px;
  padding: 30px 10px;
  background-color: ${({ theme }) => theme.colors.NEUTRAL_3};
  text-align: center;
  color: white;
  font-size: 1.2rem;
`;

export const CardBottom = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.NEUTRAL_4};
  text-align: center;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  padding: 10px 10px;
  font-size: 1.2rem;

  & > * {
    flex: 1;
  }
`;

export const Title = styled.div`
  font-size: 2.25rem;
  font-weight: 700;
`;

export const Type = styled.div`
  margin-bottom: 2rem;
`;
export const Description = styled.div`
  font-size: 1.125rem;
  font-weight: 400;
`;

export const Commitment = styled.div``;
export const CommitmentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CommitmentContent = styled.div``;

export const Position = styled.div``;
export const PositionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
export const PositionContent = styled.li`
  display: flex;
  list-style: none;
  gap: 1rem;
  ::before {
    content: "•";
  }
`;
export const TypeContainer = styled.div`
  font-size: 1.2rem;
`;
export const TypeContent = styled.div``;
export const Input = styled.a`
  display: block;
  cursor: pointer;
  color: white;
  border-radius: 50px;
  margin-top: auto;
  padding: 0.5rem;
  background-color: #59687b;
  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
`;
