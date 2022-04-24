import styled from "styled-components";

export const Container = styled.div`
  margin: 0.5%;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: ${({ theme }) => theme.colors.NEUTRAL_4};
`;

export const CardHeader = styled.div`
  font-family: ${({ theme }) => theme.fonts.normal};
  font-size: 1.6875rem;
  text-align: left;
  padding: 1rem 2.5625rem 1rem 2.5625rem;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.Crayola};
  color: ${({ theme }) => theme.colors.White};
  /* font-weight: 400; */
`;

export const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.NEUTRAL_4};
  text-align: center;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  padding: 0.8125rem 1.0625rem 0.6875rem 2.5625rem;
  font-size: 1.2rem;
`;
export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.headline};
  line-height: 2.125rem;
`;

export const Description = styled.div`
  font-size: 0.84375rem;
  padding-top: 0.5rem;
`;

export const Category = styled.div`
  font-weight: 700;
`;
export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  font-size: 0.8125rem;
`;

export const CommitmentContent = styled.div``;

export const PositionContent = styled.li`
  margin-left: 0.5rem;

  display: flex;
  list-style: none;
  gap: 0.5rem;
  ::before {
    content: "•";
  }
`;

export const TypeContent = styled.div``;
export const Input = styled.a`
  padding: 0.3rem 0.5rem;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.DarkElectricBlue};
  color: ${({ theme }) => theme.colors.White};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  font-size: 0.664375rem;
`;
