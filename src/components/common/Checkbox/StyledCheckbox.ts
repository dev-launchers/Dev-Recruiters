import styled from "styled-components"


// interface StyledCheckboxProps {
//   checked: boolean
//   checkedBg: string
//   uncheckedBg: string
//   width?: number | undefined
// }

// export const Label = styled.label`
//   display: inline-flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   font-size: 0.875rem;
//   font-family: ${({ theme }) => theme.fonts.normal};

// `

// export const CheckboxContainer = styled.div`
//   display: block;

// `

// export const Icon = styled.svg`
//   fill: none;
//   stroke: white;
//   stroke-width: 2px;
//   height:1.1rem;
//   width:1.1rem;
// `

// export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
//   border: 0;
//   clip: rect(0 0 0 0);
//   clip-path: inset(50%);
//   height: 1px;
//   margin: -1px;
//   overflow: hidden;
//   padding: 0;
//   position: absolute;
//   white-space: nowrap;
//   width: 1px;
// `

// export const StyledCheckbox = styled.div<StyledCheckboxProps>`
//   display: block;
//   width: ${({ width }) => (width ? `${width}rem` : '1rem')};
//   height: ${({ width }) => (width ? `${width}rem` : '1rem')};
//   background: ${(props) =>
//     props.checked ? props.checkedBg : props.uncheckedBg};
//   border-radius: .18rem;
//   transition: all 150ms;

//   ${HiddenCheckbox}:focus + & {
//     box-shadow: 0 0 0 3px ${(props) => props.checkedBg};
//   }
//   ${Icon} {
//     visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
//   }
// `



export const CheckboxContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  & input:checked ~ .checkmark {
    background-color: ${({ theme }) => theme.colors.Crayola};
  }

  & input:checked ~ .checkmark:after {
    display: block;
  }

  & .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  /* opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0; */
`;

export const CheckMark = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: ${({ theme }) => theme.colors.White};
  border: 1px solid ${({ theme }) => theme.colors.Crayola};
  border-radius: 10px;
  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;
