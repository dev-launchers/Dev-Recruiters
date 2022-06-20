import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  background: ${(props) => props.theme.colors.White};
  border-radius: 1.8rem;
  overflow: hidden;
`;

type sectionTheme = 'Dark' | 'Light';

export const Section = styled.div<{
  color: sectionTheme;
  Mobile: boolean;
  Expanded?: boolean;
}>`
  width: ${(props) => (props.color === 'Dark' ? 'auto' : '100%')};
  border-radius: 1.8rem;
  padding: 1rem;
  background-color: ${(props) =>
    props.color === 'Dark'
      ? props.theme.colors.Crayola
      : props.theme.colors.White};

  color: ${(props) =>
    props.color === 'Light'
      ? props.theme.colors.OuterSpace
      : props.theme.colors.White};

  @media (max-width: 760px) {
    display: ${({ Mobile, Expanded }) =>
    Mobile ? (Expanded ? 'block' : 'none') : 'block'};
    width: 100%;
  }
`;

export const OpportunityInfoContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: auto auto;

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

export const TitleSection = styled.div`
  padding: 0;

  width: 10rem;

  & h2 {
    font-family: ${(props) => props.theme.fonts.normal};
    font-weight: 400;
    font-size: 23.1734px;
    font-style: normal;
    line-height: 2rem;
    margin: 0;
  }

  @media (max-width: 760px) {
    width: 100%;
  } ;
`;

export const DescriptionSection = styled.div<{
  Expanded: boolean;
  Mobile: boolean;
}>`
  display: ${(props) => (props.Mobile ? 'none' : 'block')};

  & h3 {
    font-family: ${(props) => props.theme.fonts.normal};
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    margin: 0;
  }

  & p {
    height: ${(props) => (props.Expanded ? 'auto' : 'auto')};
    font-family: ${(props) => props.theme.fonts.normal};
    font-style: normal;
    font-size: 14px;
    line-height: 19px;
    line-height: 1.125rem;
    max-width: 28rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-wrap;
  }

  @media (max-width: 760px) {
    padding: 0 1rem;
    display: ${(props) => (props.Mobile ? 'block' : 'none')};
    & p {
      padding: 0 1rem;
      height: ${(props) => (props.Expanded ? 'auto' : 'auto')};
      font-family: ${(props) => props.theme.fonts.normal};
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.125rem;
    }
  }
`;

export const OpportunityDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: auto auto;
  font-family: ${(props) => props.theme.fonts.normal};

  & h4 {
    font-style: normal;
    font-size: 1rem;
    font-weight: 600;
    line-height: 22px;
  }
`;

export const TagsSection = styled.div`
  box-sizing: border-box;
  padding: 0 1rem;
  width: 100%;

  & h4 {
    font-style: normal;
    font-size: 1rem;
    font-weight: 600;
    line-height: 22px;
  }
  @media (max-width: 760px) {
    display: none;
  } ;
`;
export const TagsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: .5rem; 
  padding: 0;
  margin: 0;
`;
export const TagsListItem = styled.li<{ color: sectionTheme }>`
  padding: 0.2rem 1rem;
 
  background-color: ${(props) =>
    props.color === 'Dark'
      ? props.theme.colors.OuterSpace
      : props.theme.colors.White};

  color: ${(props) =>
    props.color === 'Light'
      ? props.theme.colors.OuterSpace
      : props.theme.colors.Argent};
  border: ${({ theme }) => `0.723357px solid ${theme.colors.OuterSpace}`};
  filter: ${({ theme }) =>
    `drop-shadow(0px 0.18rem 0.18rem ${theme.colors.BlackT38})`};

  border-radius: 1.8rem;

  font-family: ${(props) => props.theme.fonts.normal};
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-transform: capitalize;
`;

export const CommitmentSection = styled.div`
  margin-right: auto;
  min-width: 50%;
  padding: 0 1rem;
  & h4 {
    font-style: normal;
    font-size: 1rem;
    font-weight: 600;
    line-height: 22px;
  }
  & p {
    font-family: ${(props) => props.theme.fonts.normal};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    margin-left: 1rem;
  }
  @media (max-width: 760px) {
    display: none;
  }
`;

export const ExpectationsSection = styled.div<{ Expanded: boolean }>`
  display: ${(props) => (props.Expanded ? 'block' : 'none')};
  margin-right: auto;
  width: auto;

  padding: 0 1rem;
  & h4 {
    font-weight: 400;
    font-size: 15.9138px;
    line-height: 22px;
  }

  @media (max-width: 760px) {
    display: block;
    margin: 0 0;
  }
`;

export const ExpectationsList = styled.ul`
  list-style: disc;
  padding: 0;
  margin: 0;
  margin-left: 1.25rem;
`;
export const ExpectationsListItem = styled.li`
  font-family: ${(props) => props.theme.fonts.normal};
  font-style: normal;
  font-weight: 400;
  font-size: 13.0204px;
  line-height: 9px;
`;

export const ButtonsSection = styled.div<{
  Mobile: boolean;
  expanded?: boolean;
}>`
  display: ${(props) => (props.Mobile ? 'none' : 'flex')};
  width: 100%;
  //flex-direction: ${({ expanded }) => (expanded ? 'row-reverse' : 'row')};
  justify-content: flex-end;
  margin-left: auto;
  margin-top: 2rem;

  @media (max-width: 760px) {
    display: ${(props) => (props.Mobile ? 'flex' : 'none')};
    margin: auto auto;
    justify-content: space-evenly;
  }
`;

export const Button = styled.button<{ color?: string }>`
  font-family: ${(props) => props.theme.fonts.normal};
  background-color: ${(props) =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.OuterSpace};
  color: ${(props) => props.theme.colors.White};
  border-radius: 1.8rem;
  padding: 0.75rem;
  margin: 0 3px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 11px;
  text-align: center;
`;

export const PositionDetailsMobile = styled.div`
  padding: 0 12px;
  & p {
    font-family: ${(props) => props.theme.fonts.normal};
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.125rem;
    margin-top: 0;
  }
  @media (min-width: 670px) {
    display: none;
  }
`;

export const LikeButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  border: none;
  margin: 1rem;
  background: none;
  @media (min-width: 670px) {
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

export const ApplyButton = styled.a<{ color?: string }>`
  font-family: ${(props) => props.theme.fonts.normal};
  background-color: ${(props) =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.OuterSpace};
  color: ${(props) => props.theme.colors.White};
  border-radius: 1.8rem;
  padding: 0.75rem 2rem;
  margin: 0 3px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 11px;
  text-align: center;
`;
