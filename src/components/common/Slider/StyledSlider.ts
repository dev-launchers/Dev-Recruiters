import styled from "styled-components";

export const Container = styled.div`
 // min-width: 350px;
 box-sizing: border-box;
  position: relative;
  font-family: ${({ theme }) => theme.fonts.normal};
  color: ${({ theme }) => theme.colors.White};
  width: 100%;
  overflow: hidden;
  padding: 0 2rem;
  user-select: none; 

  @media (max-width:640px) {
    color: ${({ theme }) => theme.colors.Black};
  }
`;
export const SliderInputContainer = styled.div`
  width:90%;
  min-width: 350px;
  margin: 0 5%;
  @media (max-width:640px) {
    
    min-width: 0;
    
  }
`;
export const SliderInput = styled.input.attrs({ type: 'range' })`
  -webkit-appearance: none;
  width: 100%;
  height: 9px;
  background: ${({ theme }) => theme.colors.BlackCoral};
  border-radius: 3rem;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: ${({ theme }) => theme.colors.DarkElectricBlue};
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: ${({ theme }) => theme.colors.DarkElectricBlue};
    border-radius: 50%;
    cursor: pointer;
  }

`;

export const LabelsContainer = styled.div`
  //width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  & p {
    font-family: ${({ theme }) => theme.fonts.normal};
    //color: ${({ theme }) => theme.colors.White};
    font-size: 1rem;
  }
`;

export const BubbleContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  
`;

export const Bubble = styled.div<{ newVal: number }>`
  position: absolute;
  margin:0 1rem;
  width: auto;
  padding: 5px;
  top: 0;
  transform: translateX(-50%);
  left: ${({ newVal }) => `calc(${newVal}% + (${8 - newVal * 0.15}px))`};
  background: ${({ theme }) => theme.colors.BlackCoral};
  border-radius: 2rem;
  & p {
    margin: 0;
    padding: 0;
    font-size: 1rem;
  }
  & span {
    font-family: ${({ theme }) => theme.fonts.normal};
    color: ${({ theme }) => theme.colors.White};
  }
`;

