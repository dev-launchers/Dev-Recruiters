import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: ${(props) => props.theme.fonts.normal};
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  height: 100%;
  //min-height: 13.125rem;
  background: ${({ theme }) => theme.colors.SilverSand};
  border-radius: 2.5rem;

  @media (max-width: 640px) {
    flex-direction: column;
    border-radius: 30px;
  }
`;

export const TitleSection = styled.div`
  position: relative;
  flex: 1 0 30%;
  padding-left: 3.5rem;
  padding-right: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.SliverSand};
  color: ${({ theme }) => theme.colors.White};
  z-index: 1;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.Crayola};
    border-radius: 30px;
    z-index: -1;
  }
  & p {
    padding: 5px 0;
    margin: 0;
  }

  @media (max-width: 640px) {
    padding: 2rem;
    background: ${({ theme }) => theme.colors.SliverSand};
  }
`;

export const TypeSection = styled.div`
  position: relative;
  flex: 1 0 15%;
  padding-left: 3.5rem;
  padding-right: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${({ theme }) => theme.colors.SliverSand};
  padding: 2rem 1.25rem;
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.SliverSand};
    border-radius: 0 40px 40px 0;
    z-index: -1;
  }
  & p {
    padding: 0;
    margin: 0;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;

export const PositionsSection = styled.div`
  position: relative;
  flex: 1 0 20%;
  padding: 2rem 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.SliverSand};
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background: ${({ theme }) => theme.colors.SliverSand};
    border-radius: 0 40px 40px 0;
    z-index: -1;
  }

  & button {
    width: auto;
    margin-left: auto;
    margin-right: auto;
    padding: 0.375rem 2rem;
    background: ${({ theme }) => theme.colors.SonicSilver};
    border: none;
    cursor: pointer;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

export const CommitmentSection = styled.div`
  background: ${({ theme }) => theme.colors.SliverSand};
  flex: 1 0 15%;
  padding: 2rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  & p {
    padding: 0;
    margin: 0;
  }
`;

export const SectionTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
    display: none;
  }
`;

export const PositionsList = styled.ul`
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  list-style-type: disc;
`;
export const PositionsListItem = styled.li`
  display: list-item;
  
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

export const Title = styled.h2`
  font-family: ${(props) => props.theme.fonts.headline};
  margin: 0;
  padding: 0;
  font-size: 1.70rem;
  line-height: 2.5rem;
  font-weight: 700;
`;
export const Subtitle = styled.p`
  font-size: 1rem;
  line-height: 1.75rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;
export const Paragraph = styled.p<{ Mobile?: boolean }>`
  display: ${({ Mobile }) => (Mobile ? 'none' : 'block')};
  font-size: 0.85rem;
  line-height: 1.75rem;

  @media (max-width: 640px) {
    display: ${({ Mobile }) => (Mobile ? 'block' : 'none')};
    font-style: ${({ Mobile }) => (Mobile ? 'italic' : 'none')};
  }
`;

export const PositionsSectionButton = styled.button`
  font-size: 0.85rem;

  background: ${({ theme }) => theme.colors.SonicSilver};
  color: ${({ theme }) => theme.colors.White};
  border-radius: 1.25rem;
  border: none;
  cursor: pointer;
  width: 14.375rem;
  padding-top: 0.25rem;
  padding-left: 1.0625rem;
  padding-right: 0.375rem;
  padding-bottom: 0.375rem;
  margin-top: auto;
`;

export const CommitmentSectionButton = styled.a`
text-decoration: none;
text-align: center;
  font-size: 0.85rem;
  background: ${({ theme }) => theme.colors.DarkElectricBlue};
  color: ${({ theme }) => theme.colors.White};
  border-radius: 1.25rem;
  border: none;
  cursor: pointer;
  //width: 15.7rem;
  padding: 0.5rem 1rem;
  margin-top: auto;
  &:hover{
    color: ${({ theme }) => theme.colors.White};
  }
  @media (max-width: 640px) {
    padding: 0.6rem 2rem;
    margin-top: 2rem;
    width: auto;
  }
`;

export const LikeButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  border: none;
  margin: 2rem 1rem;
  background: none;
  @media (min-width: 641px) {
    display: none;
  }
`;

export const Icon = styled.svg<{ Active: boolean }>`
  color: ${(props) =>
    props.Active ? props.theme.colors.White : props.theme.colors.Crayola};
  stroke: ${(props) => props.theme.colors.White};
  height: 2rem;
  width: 2rem;
`;
