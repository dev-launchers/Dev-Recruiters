import styled from "styled-components";



export const Container = styled.div`
  font-family: ${({ theme }) => theme.fonts.normal}, sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #ededed;
  padding: 0 12px;
  border-radius: 1.25rem;
  height: 2.75rem;
  width: 20.625rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 640px) {
  width: 90%;
  margin: auto auto;
  
}
`;

export const Icon = styled.svg`
  height: 23px;
  width: 23px;
  margin-right: 18px;
`;

export const SearchField = styled.input`
  background-color: transparent;
  border: none;
  font-family: ${({ theme }) => theme.fonts.normal};
  font-style: normal;
  font-weight: 400;
  font-size: 15.1847px;
  line-height: 15px;
  letter-spacing: 0.216667px;
  color: ${({ theme }) => theme.colors.OuterSpace};;

  &:focus-visible {
    outline: none;
  }
`;