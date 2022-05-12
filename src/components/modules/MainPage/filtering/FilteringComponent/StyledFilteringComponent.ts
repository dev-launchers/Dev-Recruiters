import styled from 'styled-components';

export const FiltersWrapper = styled.div`
  padding-left: 2rem;
  @media (max-width: 640px) {
    padding-left: 0;
  }
`;

export const SectionTitle = styled.p<{ Mobile?: boolean }>`

  font-family: ${({ theme }) => theme.fonts.normal}, sans-serif;
  font-size: 1em;
  color: ${({ theme }) => theme.colors.White};
  padding-bottom: 1.25rem;
  padding-left: 1.5rem;
  margin: 0;
  @media (max-width: 640px) {
    display: ${({ Mobile }) => Mobile ? "block" : "none"};
  }
`;

export const Wrapper = styled.div`
  padding-left: 0;
  padding-bottom: 6.25rem;
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  padding: 0rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;


  @media (max-width: 1280px) {
    flex-direction: column-reverse;
    
  }

  @media (max-width: 640px) {
    flex-direction: column-reverse;
    row-gap: 2rem;
  }
`;

export const Section = styled.div`
 
`;

export const CommitmentSection = styled.div`
box-sizing: border-box;
 @media (max-width:640px) {
    padding:10px 0;
    background-color: ${({ theme }) => theme.colors.BrightGray};
    color: ${({ theme }) => theme.colors.Black};
    border-radius: 10px;

    & p {
      color: ${({ theme }) => theme.colors.Black};
    }
  }
`;

export const DropDownContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1.5rem;

  @media (max-width: 640px) {
    display: none;
  }
`;

export const ChipsList = styled.ul`
  padding-top: 2rem;
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 1.25rem;
  row-gap: 1.25rem;
`;

export const ChipsListItem = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  background-color: ${({ theme }) => theme.colors.Gray};
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  padding-right: 0;
  border-radius: 1.25rem;
  width: full;
  color: ${({ theme }) => theme.colors.AntiFlashWhite};

  &:hover {
    filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04))
      drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1));
  }

  & p {
    padding: 0;
    margin: 0;
    width: 100%;
  }

  & button {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.AntiFlashWhite};
    border: none;
    padding-right: 1rem;
  }
`;

export const FilterMenuButton = styled.button`
display: none;
flex-direction: row;
align-items: center;
width: auto;
margin-right: auto;

font-style: normal;
font-weight: 400;
font-size: 1em;
line-height: 22px;
text-transform: capitalize;

box-shadow: 0px 1.33333px 1.33333px rgba(0, 0, 0, 0.25);
border-radius: 10px;

color: ${({ theme }) => theme.colors.OuterSpace};
background: ${({ theme }) => theme.colors.BrightGray};
border: none;
padding: 5px 10px;
padding-right: 32px;

& svg {
  stroke: ${({ theme }) => theme.colors.OuterSpace};
  margin-right: 5px;
  height: 25px;
  width: 25px;
}

@media (max-width: 640px) {
    display: flex;
  }
`;


