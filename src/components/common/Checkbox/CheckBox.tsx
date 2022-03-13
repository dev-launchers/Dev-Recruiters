import React from 'react'
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
  Label,
} from './StyledCheckbox'

interface Props {
  id: string
  label: any
  checked: boolean
  className?: string
  checkedBg?: string
  uncheckedBg?: string
  strokeColor?: string
  width?: number | undefined
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Checkbox({
  id,
  label,
  checked,
  className,
  strokeColor = '#000',
  checkedBg = '#FFF',
  uncheckedBg = '#FFF',
  width = undefined,
  onChange,
}: Props) {
  return (
    <Label htmlFor={id}>
      {label}
      <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} onChange={onChange} id={id} />
        <StyledCheckbox
          checked={checked}
          checkedBg={checkedBg}
          uncheckedBg={uncheckedBg}
          width={width}
        >
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" stroke={strokeColor} />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
    </Label>
  )
}
