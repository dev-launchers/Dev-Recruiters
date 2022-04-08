import styled from "styled-components";

export const SectionOne = styled.div`
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "3rem",
`;
export const SectionTwo = styled.div`
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
`;

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #30363E;
  @media (orientation:portrait) {
    flex-direction: column;
  }
`;