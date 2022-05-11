import { useState } from 'react';
import {
  Bubble,
  BubbleContainer,
  Container,
  LabelsContainer,
  SliderInput,
  SliderInputContainer,
} from './StyledSlider';

interface Props {
  min: number;
  max: number;
  prefix?: string;
  onChange: (value: number) => void;
}

export default function Slider({
  min = 0,
  max = 100,
  onChange,
  prefix,
}: Props) {
  const [value, setValue] = useState(0);

  const handleOnChange = (value: number) => {
    setValue(value);
    onChange(value);
  };

  const getBubblePosition = () => {
    return value > 0 ? Number(((value - min) * 90) / (max - min)) : 0;
  };
  return (
    <div>
      <Container>
        <BubbleContainer>
          <Bubble newVal={getBubblePosition()}>
            <p>
              <span>{value}</span>
              <span>{prefix}</span>
            </p>
          </Bubble>
        </BubbleContainer>
        <SliderInputContainer>
          <SliderInput
            step={1}
            min={min}
            max={max}
            value={value}
            onChange={({ target }) => handleOnChange(+target.value)}
          />
        </SliderInputContainer>
        <LabelsContainer>
          <p>
            {min} {prefix}
          </p>
          {max % 2 === 0 && (
            <p>
              {min + max / 2} {prefix}
            </p>
          )}
          <p>
            {max} {prefix}
          </p>
        </LabelsContainer>
      </Container>
    </div>
  );
}
