import styled from "styled-components";

export const FiltersWrapper = styled.div`
  padding-left: 2rem;
`;

export const FilterTitle = styled.p`
  font-size: 26px;
  color: #fff;
  padding-bottom: 20px;
  padding-left: 1.5rem;
  margin: 0;
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
  justify-content: start;
  column-gap: 1.5rem;
  width: 100%;
`;

export const ChipsList = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 20px;
`;

export const ChipsListItem = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  background-color: #9399a0;
  font-size: 1rem;
  padding: 8px 24px;
  padding-right: 0;
  border-radius: 20px;
  width: full;

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
    border: none;
    padding-right: 1rem;
  }
`;