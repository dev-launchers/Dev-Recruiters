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
  CommitmentSectionButton,
  PositionTitle,
  TypeSection,
  PositionsSection,
  PositionLevel,
  PositionsSectionButton,
  SectionTextContainer,
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
          <PositionsSectionButton>
            More available positions
          </PositionsSectionButton>
        )}
      </PositionsSection>
      <CommitmentSection>
        <SectionTextContainer>
          <SectionTextContainer>
            <Subtitle>Time Commitment</Subtitle>
            <Paragraph>{project.commitmentLevel}</Paragraph>
          </SectionTextContainer>
        </SectionTextContainer>
        <CommitmentSectionButton>
          Project and Position Details
        </CommitmentSectionButton>
      </CommitmentSection>
    </Wrapper>
  );
}
