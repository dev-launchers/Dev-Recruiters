import styled from "styled-components";
import { RoundedButtonProps } from "../../../common/RoundedButton/StyledRoundedButton";

export const Card = styled.div`
  position: relative;
  width: auto;
  height: auto;
  background-color: #c3c0c0;
  border-radius: 2.5rem;
  padding: 1.5rem 2.8rem;
  transition: height 1s ease-in-out;
`;

export const CardSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 2rem;
  height: auto;
`;

export const TitleSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 12%;
`;

export const DetailsSection = styled.div`
  height: auto;

  width: auto;
`;

export const Title = styled.p`
  width: "15%";
  height: auto;
  padding: 0;
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.headline}, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 2.4375rem;
  max-width: 13rem;
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.normal}, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.12rem;
  line-height: 1.3125rem;
  color: #454d58;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: flex-start;
  column-gap: 0.9375rem;
  width: auto;
`;

export const PositionsListContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const PositionListTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.headline}, sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
`;
export const PositionList = styled.ul`
  padding: 0;
  margin: 0.75rem;
`;
export const PositionListItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.normal}, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
`;

interface ExpandButtonProps extends RoundedButtonProps {
  isExpanded: boolean;
}

export const ExpandButton = styled.button<ExpandButtonProps>`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: ${(props) => (props.isExpanded ? "1.87rem 2.5rem" : ".62rem 2.5rem")};
  font-family: ${({ theme }) => theme.fonts.normal}, sans-serif;
  font-size: ${(props) =>
    props.fontSize ? `${props.fontSize}rem` : "1.12rem"};
  background: ${(props) => props.bgColor ?? "rgba(84, 87, 91, 0.2)"};
  color: ${(props) => props.textColor ?? "inherit"};
  border-radius: ${(props) => props.borderRadius ?? "1.25rem"};
  border: none;
  padding: 0.31rem 0.62rem;
`;
