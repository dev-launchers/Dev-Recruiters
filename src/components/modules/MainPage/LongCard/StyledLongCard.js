import styled, { css } from "styled-components";

export const Container = styled.div`
  width:100rem;
  margin: 0.5%;
  border-bottom-right-radius:40px;
  border-bottom-left-radius:40px;
  //width: ${({ size }) => (size === "large" ? '90%' : '30%')};
  background-color:#C3C0C0;
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
  width:100rem;
  flex-direction: ${({ flexDirection }) => flexDirection || "column"};
  ${({ size }) =>
    size === "large" &&
    css`
      flex-direction: row;
      justify-content: center;
    `}
  && {
    flex-direction: ${({ flexDirection }) => flexDirection || "column00"};
  }
  align-content: center;
  text-align: ${({ textAlignment }) => textAlignment || "left"};
  @media (orientation: portrait) {
    width: 100%;
    margin-bottom: 5%;
  }
`;

export const ImageHolder = styled.div`
  position: relative;
  border-bottom-right-radius:40px;
  border-bottom-left-radius:40px;
  width:100rem;
  height: 102px;
  overflow: hidden;
  background-color:#89969F;
  text-align: left;
  a {
    display: flex;
    width: 100%;
    height: 100%;
  }
  @media (orientation: portrait) {
    width: 100%;
    margin-bottom: 5%;
  }
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

export const FooterContent = styled.div`
  width:100rem;
  @media (orientation: portrait) {
    width: 100%;
    margin-bottom: 5%;
  }
`;


export const TextBold = styled.div`
  margin: 0 10px;
`;

export const SectionDiv = styled.div`
  text-align : left;
`;

export const HeadLine = styled.div`
  font-weight: 500;
  margin: 3rem 4rem;
  font-size: 24px;
`;