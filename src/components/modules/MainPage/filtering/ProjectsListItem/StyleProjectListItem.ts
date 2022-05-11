import styled from 'styled-components';


export const ItemContainer = styled.div`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.White};
  display: flex;
  flex-direction: row;

  border-radius: 1.875rem;
  min-height: 168px;

  @media (max-width: 640px) {
    flex-direction: column;
    border-radius: 10px;
  }
`;

export const Section = styled.div<{
  bgColor?: string;
  color?: string;
  width?: number;
}>`
  width: ${(props) => (props.width ? props.width : '50%')};
  background-color: ${(props) =>
    props.bgColor ? props.theme.colors[props.bgColor] : 'transparent'};
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : 'inherit'};
  border-radius: 1.875rem;
  padding: 20px;
  @media (max-width: 640px) {
    width: 100%;
    padding: 1rem 0;
    border-radius: 10px;
  }
`;
export const InfoSection = styled.div`
  padding-left: 2rem;
  height: 100%;

  & h2,
  h3,
  p {
    padding: 0;
    padding-bottom: 10px;
    margin: 0;
  }
  & h2 {
    font-family: ${({ theme }) => theme.fonts.headline};
    font-size: 1.6875em;
  }
  & h3 {
    font-family: ${({ theme }) => theme.fonts.normal};
    color: ${({ theme }) => theme.colors.LightGray};
    font-size: 1rem;
    font-style: italic;
    font-weight: 400;
  }
  & p {
    font-family: ${({ theme }) => theme.fonts.normal};
    font-size: 1rem;
    max-width: 24rem;
  }
`;
export const DetailsSection = styled.div``;
export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  //justify-content: space-around;
  @media (max-width: 640px) {
    display: none;
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.normal};
  font-weight: 700;
  font-size: 16px;
`;

export const PositionsContainer = styled.div`
  & ul {
    list-style-type: disc;
  }

  & li {
    display: list-item;
  }
`;

export const PositionTitle = styled.span`
  font-size: 1rem;
  line-height: 1.75rem;
  font-weight: 400;
`;

export const PositionLevel = styled.span`
  padding-left: 0.5rem;
  font-size: 1rem;
  line-height: 1.75rem;
  font-style: italic;
  font-weight: 300;
`;

export const CommitmentContainer = styled.div`
  padding-left: 2rem;
  & p {
    padding: 0;
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.normal};
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
  }
`;
export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
`;

export const PositionsButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.normal};
  border: none;
  color: ${({ theme }) => theme.colors.White};
  background: ${({ theme }) => theme.colors.Gray};
  border-radius: 30px;
  font-size: 16px;
  padding: 10px;

  @media (max-width: 640px) {
    display: none;
  }
`;
export const DetailsButton = styled.a`
  font-family: ${({ theme }) => theme.fonts.normal};
  border: none;
  color: ${({ theme }) => theme.colors.White};
  background: ${({ theme }) => theme.colors.DarkElectricBlue};
  border-radius: 30px;
  font-size: 16px;
  padding: 10px;
  margin-left: auto;
  text-align: center;

  &:hover{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.White};
  }

  @media (max-width: 640px) {
    margin: auto;
    width: 90%;
    border-radius: 10px;
  }
`;
