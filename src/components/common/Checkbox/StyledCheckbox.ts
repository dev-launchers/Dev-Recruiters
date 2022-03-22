import styled from "styled-components"


interface StyledCheckboxProps {
  checked: boolean
  checkedBg: string
  uncheckedBg: string
  width?: number | undefined
}

export const Label = styled.label`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
 
`

export const CheckboxContainer = styled.div`
  display: block;
  
`

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
  height:1.1rem;
  width:1.1rem;
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: block;
  width: ${({ width }) => (width ? `${width}rem` : '1rem')};
  height: ${({ width }) => (width ? `${width}rem` : '1rem')};
  background: ${(props) =>
    props.checked ? props.checkedBg : props.uncheckedBg};
  border-radius: .18rem;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${(props) => props.checkedBg};
  }
  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`
