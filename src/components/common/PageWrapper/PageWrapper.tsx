import styled from "styled-components";

interface Props {
  children: React.ReactElement;
}
export default function PageWrapper({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}
const Wrapper = styled.div`
  background-color: #454d58;
  padding: 2.5rem 3.75rem;
`;
