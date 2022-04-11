import { ProjectLite } from '../../../../../models/project';
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
  PositionLevel,
} from './StyleProjectListItem';

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
        <Paragraph>
          Idea - {project.isPlatform ? 'Platform' : 'Independent'}
        </Paragraph>
      </TypeSection>
      <PositionsSection>
        <div>
          <Subtitle>Positions Available / Level</Subtitle>
          {project.opportunities?.length > 0 && (
            <PositionsList>
              {project.opportunities.slice(0, 3).map((opportunity) => (
                <PositionsListItem key={opportunity.id}>
                  <PositionTitle>{opportunity.title}</PositionTitle>
                  <PositionLevel>{opportunity.level}</PositionLevel>
                </PositionsListItem>
              ))}
            </PositionsList>
          )}
        </div>
        {project.opportunities?.length > 4 && (
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
