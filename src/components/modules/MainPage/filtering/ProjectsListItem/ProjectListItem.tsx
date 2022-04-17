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
          Product - {project.isPlatform ? 'Platform' : 'Independent'}
        </Paragraph>
      </TypeSection>
      <PositionsSection>
        <div>
          <Subtitle>Positions Available / Level</Subtitle>
          <PositionsList>
            {project.opportunities.slice(0, 3).map((opportunity) => (
              <PositionsListItem key={opportunity.id}>
                <PositionTitle>{opportunity.title}</PositionTitle>
                <PositionLevel>{opportunity.level}</PositionLevel>
              </PositionsListItem>
            ))}
          </PositionsList>
        </div>
        {project.opportunities?.length > 4 && (
          <Button>More available positions</Button>
        )}
      </PositionsSection>
      <CommitmentSection>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Subtitle>Time Commitment</Subtitle>
          <Paragraph>{project.commitmentLevel}</Paragraph>
        </div>
        <Button>Project and Position Details</Button>
      </CommitmentSection>
    </Wrapper>
  );
}
