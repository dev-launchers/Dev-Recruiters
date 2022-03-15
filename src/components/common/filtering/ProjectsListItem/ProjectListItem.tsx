import { Project } from "../project";
import {
  TitleSection,
  Wrapper,
  Title,
  ItemSection,
  Subtitle,
  Paragraph,
  PositionsList,
  PositionsListItem,
  Button,
  PositionLevel,
  PositionTitle,
} from "./StyleProjectListItem";

interface Props {
  project: Project;
}

export default function ProjectListItem({ project }: Props) {
  return (
    <Wrapper>
      <TitleSection>
        <Title>{project.title}</Title>
        <Paragraph>{project.catchPhrase}</Paragraph>
      </TitleSection>
      <ItemSection bgColor="rgba(123, 123, 123, 0.4)" flex="0 1 15%">
        <Subtitle>Type</Subtitle>
        <Paragraph>Idea - Platform</Paragraph>
      </ItemSection>
      <ItemSection
        bgColor="rgba(192, 192, 192, 1)"
        alignItems="start"
        flex="0 1 20%"
      >
        <Subtitle>Positions Available / Level</Subtitle>
        {project.openPositions.length > 0 ? (
          <PositionsList>
            {project.openPositions.map((position) => (
              <PositionsListItem key={position.id}>
                <PositionTitle>{position.title}</PositionTitle>
                <PositionLevel>Advanced</PositionLevel>
              </PositionsListItem>
            ))}
          </PositionsList>
        ) : (
          <Paragraph>No open positions for the moment</Paragraph>
        )}
      </ItemSection>
      <ItemSection bgColor="transparent" flex="0 1 15%">
        <Subtitle>Time Commitment</Subtitle>
        <Paragraph>{project.commitmentLevel}</Paragraph>
        <Button>See More</Button>
      </ItemSection>
    </Wrapper>
  );
}
