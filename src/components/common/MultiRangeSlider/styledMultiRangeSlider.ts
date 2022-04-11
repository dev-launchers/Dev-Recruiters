import styled from "styled-components";

export const Container = styled.div`
position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 4.5rem;
`;

export const Slider = styled.div`
  position: relative;
  width: 12.5rem;
`;

export const SliderTrack = styled.div`
  position: absolute;
  border-radius: 3px;
  height: 5px;
  background-color: #ced4da;
  width: 100%;
  z-index: 1;
`;

export const SliderRange = styled.div`
  position: absolute;
  border-radius: 3px;
  height: 5px;
  background-color: #fff;
  z-index: 2;
`;

export const SliderLeftValue = styled.div`
  position: absolute;
  color: #dee2e6;
  font-size: 12px;
  margin-top: 20px;
  left: 6px;
`;

export const SliderRightValue = styled.div`
  position: absolute;
  color: #dee2e6;
  font-size: 12px;
  margin-top: 20px;
  right: -4px;
`;

export const ThumbRight = styled.input`
  color: red;
  pointer-events: none;
  position: absolute;
  height: 0;
  width: 200px;
  outline: none;
  z-index: 4;
  
  &::-webkit-slider-thumb {
    background: #f1f5f7;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 1.125rem;
    width: 1.125rem;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
  &::-moz-range-thumb {
    background-color: #f1f5f7;
    color: yellow;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 1.125rem;
    width: 1.125rem;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
`;

export const ThumbLeft = styled.input<{ minVal: number; maxVal: number }>`
  pointer-events: none;
  position: absolute;
  height: 0;
  width: 12.5rem;
  outline: none;
  z-index: ${(props) => (props.minVal > props.maxVal - 100 ? 5 : 3)};
  &::-webkit-slider-thumb {
    background-color: #f1f5f7;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 1.125rem;
    width: 1.125rem;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }

  &::-moz-range-thumb {
    background-color: #f1f5f7;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
`;