import { ProjectLite } from "../../../../../models/project";
import {
  TitleSection,
  Wrapper,
  Title,
  CommitmentSection,
  Subtitle,
  Paragraph,
  PositionsList,
  PositionsListItem,
  Button,
  PositionTitle,
  TypeSection,
  PositionsSection,
} from "./StyleProjectListItem";

interface Props {
  project: ProjectLite;
}

export default function ProjectListItem({ project }: Props) {
  return (
    <Wrapper>
      <TitleSection>
        <Title>{project.title}</Title>
        <Paragraph>{project.catchPhrase}</Paragraph>
      </TitleSection>
      <TypeSection>
        <Subtitle>Type</Subtitle>
        <Paragraph>Idea - Platform</Paragraph>
      </TypeSection>
      <PositionsSection>
        <div>
          <Subtitle>Positions Available / Level</Subtitle>
          {project.openPositions.length > 0 && (
            <PositionsList>
              {project.openPositions.slice(0, 3).map((position) => (
                <PositionsListItem key={position.id}>
                  <PositionTitle>{position.title}</PositionTitle>
                  {/* <PositionLevel>Advanced</PositionLevel> */}
                </PositionsListItem>
              ))}
            </PositionsList>
          )}
        </div>
        {project.openPositions.length > 4 && (
          <Button>More available positions</Button>
        )}
      </PositionsSection>
      <CommitmentSection>
        <Subtitle>Time Commitment</Subtitle>
        <Paragraph>{project.commitmentLevel}</Paragraph>
        <Button>See More</Button>
      </CommitmentSection>
    </Wrapper>
  );
}
