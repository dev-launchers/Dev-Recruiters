import { useState } from "react";
import CardTag from "@components/common/CardTag/CardTag";
import RoundedButton from "@components/common/RoundedButton";
import {
  Card,
  CardSection,
  Description,
  DetailsSection,
  ExpandButton,
  PositionList,
  PositionListItem,
  PositionListTitle,
  PositionsListContainer,
  TagsContainer,
  Title,
  TitleSection,
} from "./StyledPositionCard";

interface Props {
  position: any;
}

export default function PositionCard({ position }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Card>
      <CardSection>
        <TitleSection>
          <Title>{position.title}</Title>
        </TitleSection>
        <DetailsSection>
          <TagsContainer>
            <CardTag dark>{position.level}</CardTag>
            {position.stack.map((item: string, index: number) => (
              <CardTag key={index}>{item}</CardTag>
            ))}
          </TagsContainer>
          <Description>{position.description}</Description>
        </DetailsSection>
      </CardSection>

      {isExpanded && (
        <CardSection>
          <TitleSection>
            <RoundedButton
              fontSize={1.5}
              paddingX={1.25}
              paddingY={0.625}
              bgColor="#454D58"
              textColor="#FFF"
            >
              Apply
            </RoundedButton>
          </TitleSection>
          <DetailsSection>
            <PositionsListContainer>
              <PositionListTitle>Expectations</PositionListTitle>
              <PositionList>
                {position.expectations.map(
                  (expectation: string, index: number) => (
                    <PositionListItem key={index}>
                      {expectation}
                    </PositionListItem>
                  )
                )}
              </PositionList>
            </PositionsListContainer>
          </DetailsSection>
        </CardSection>
      )}

      <ExpandButton
        isExpanded={isExpanded}
        type="button"
        fontSize={0.85}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        {isExpanded ? "Show Less" : "Show More"}
      </ExpandButton>
    </Card>
  );
}
