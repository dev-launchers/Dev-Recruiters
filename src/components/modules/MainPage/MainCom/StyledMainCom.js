import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns:repeat(auto-fit, minmax(${props => props.length || "100px"}, 1fr));
  place-items: center;
  place-content: center;
  margin: 2em 0;
  row-gap: 2rem;
`;

export const ProjectContainer = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1); 
  border-radius:45px;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 20%);
  width: 100%;
  height: 100%;
  max-width: ${props => props.lengthMax || "500px"};
  @media (orientation: portrait) {
    width: 900vw;
  }
`;
