import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 0.5%;
  border-radius:45px;
  width: ${({ size }) => (size === "large" ? "90%" : "100%")};
  background-color: White;
  /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); */
  display:flex;
  flex-direction:row;
  @media (orientation: portrait) {
    width: 86%;
    margin-bottom: 5%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  ${({ size }) =>
    size === "large" &&
    css`
      flex-direction: row;
      justify-content: center;
    `}
  && {
    flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  }
  align-content: center;
 
  text-align: ${({ textAlignment }) => textAlignment || "left"};
`;


export const TagsContainer = styled.div`
  text-align: center;
  position: absolute;
  top: 3%;
  right: 1%;
  display: grid;
  gap: 0.5rem;
`;
export const Image = styled.div`
  background-color: lightgray;
  width: 100%;
  height: 100%;
  /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); */
  cursor: pointer;
  vertical-align: top;
  margin-left: auto;
  margin-right: auto;

  background-image: url(${(props) => props.imageSrc});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* outline: 2px solid black; */
`;

export const Description = styled.div`
  width: 100%;
  font-size: 1.2rem;
  margin-left:2rem;
  padding-top: 1%;
`;

export const ButtonSty = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
  color:#3a7ca5;
`;

export const TextBold = styled.div`
  font-weight: bold;
  font-size: 1rem;
  margin: 1rem 0 0 2.5rem;
`;

export const SectionDiv1 = styled.div`
  text-align : left;
  margin: 0.5rem 1rem 0 2rem;
  padding-right:1rem;
`;

export const SectionDiv2 = styled.div`
  text-align : center;
  background-color:#3a7ca5;
`;

export const SectionDiv3 = styled.div`
  text-align : left;
  background-color:#73A5C6;
`;

export const SectionDiv4= styled.div`
  text-align : left;
  margin-left: 2rem;
`;

export const HeadLine = styled.div`
  font-size: 2rem;
`;