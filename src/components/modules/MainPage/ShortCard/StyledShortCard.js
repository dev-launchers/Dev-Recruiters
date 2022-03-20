import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 0.5%;
  border-radius:45px;
  width: ${({ size }) => (size === "large" ? "90%" : "30%")};
  background-color: White;
  /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); */
  display: flex;
  flex-direction: column;
  @media (orientation: portrait) {
    width: 100%;
    margin-bottom: 5%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: ${({ flexDirection }) => flexDirection || "column"};
  ${({ size }) =>
    size === "large" &&
    css`
      flex-direction: row;
      justify-content: space-around;
    `}
  && {
    flex-direction: ${({ flexDirection }) => flexDirection || "column"};
  }
  align-content: center;
  text-align: ${({ textAlignment }) => textAlignment || "center"};
`;

export const ImageHolder = styled.div`
  position: relative;
  border-radius:45px;
  width: 100%;
  height: 25vh;
  overflow: hidden;
  background-color:#3a7ca5;
  text-align: center;
  a {
    display: flex;
    width: 100%;
    height: 100%;
  }
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

export const DataHolder = styled.div`
  margin-top: 0.5em;
  padding: 0.5rem;
  width: 95%;
  ${({ size }) =>
    size === "large" &&
    css`
      width: 76%;
      padding: 6.75%;
    `}
`;

export const Description = styled.div`
  width: 100%;
  font-size: 1.2rem;
  padding-top: 1%;
  color: #ffff;
`;


export const FooterContent = styled.div`
  columns: auto;
  columns: 3;

`;

export const ButtonSty = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
  color:#3a7ca5;
`;

export const TextBold = styled.div`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 5px;
`;

export const SectionDiv = styled.div`
  text-align : left;
`;

export const HeadLine = styled.div`
  color: White;
  margin-top: 2rem;
  font-size: 2.5rem;
`;