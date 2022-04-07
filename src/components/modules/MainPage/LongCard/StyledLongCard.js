import styled, { css } from "styled-components";

export const Container = styled.div`
  width:100rem;
  height: 17.5rem;
  height:100%;
  margin: 0.5%;
  font-size:1.2rem;
  border-bottom-right-radius:40px;
  border-bottom-left-radius:40px;
  background-color:#C3C0C0;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); */
  display: flex;
  flex-direction: column;
  @media (orientation: portrait) {
    width: 100%;
    height:100%;
    margin-bottom: 5%;
  }
`;


export const HeaderCard = styled.div`
  position: relative;
  border-bottom-right-radius:40px;
  border-bottom-left-radius:40px;
  width:100rem;
  font-weight: 500; 
  font-size: 24px;
  height: 102px;
  background-color:#89969F;
  text-align: left;
  @media (orientation: portrait) {
    width: 100%;
    margin-bottom: 5%;
  }
`;

export const FooterCard = styled.div`
  padding:1rem 0 1rem 0.5rem;
  display: absolute;
  width:100rem;
 
  @media (orientation: portrait) {
    width: 100%;
    height:100%;
    margin-bottom: 5%;
  }
`;

export const TextBold = styled.div`
  padding: 3rem;
`;
export const ButtonSection = styled.div`
  display: felx;
  justify-content: flex-end;
`;

export const Input = styled.button`
  display:absolute;;
  margin: 0 0.5rem 1rem 1rem;
  padding: 5px 5px;
  type:button;
  border-radius: 50px;
  background-color: rgba(123, 123, 123,0.2)
`;
