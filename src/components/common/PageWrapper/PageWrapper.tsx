import styled from 'styled-components';

interface Props {
  children: React.ReactElement;
}
export default function PageWrapper({ children }: Props) {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: #454d58;

  @media (max-width: 640px) {
    padding: 0 16px;
  }
`;

const Container = styled.div`
  width: 100%;
  margin: auto auto;
  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
  @media (min-width: 1536px) {
    max-width: 1536px;
  }
`;
