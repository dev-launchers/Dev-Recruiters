import { Container, Content } from './StyledBoxContainer';

interface Props {
  bgColor?: string;
  paddingHorizontal?: number;
  paddingVertical?: number;
  marginTop?: number;
  marginBottom?: number;
}

export default function BoxContainer({
  bgColor,
  marginTop,
  marginBottom,
  paddingHorizontal,
  paddingVertical,
}: Props) {
  return (
    <Container
      bgColor={bgColor}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Content
        paddingHorizontal={paddingHorizontal}
        paddingVertical={paddingVertical}
      ></Content>
    </Container>
  );
}
