import Link from 'next/link';
import { useState } from 'react';
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
  LikeButton,
  Icon,
} from './StyleProjectListItem';

interface Props {
  project: ProjectLite;
}

export default function ProjectListItem({ project }: Props) {
  const [liked, setLiked] = useState(false);
  return (
    <Wrapper>
      <TitleSection>
        <LikeButton onClick={() => setLiked((prev) => !prev)}>
          <Icon
            Active={liked}
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
              clipRule='evenodd'
            />
          </Icon>
        </LikeButton>
        <Title>{project.title}</Title>
        <Paragraph>{project.catchPhrase}</Paragraph>
        <Paragraph Mobile={true}>
          Product - {project.isPlatform ? 'Platform' : 'Independent'}
        </Paragraph>
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
        <Paragraph Mobile={true}>{project.catchPhrase}</Paragraph>
        <SectionTextContainer>
          <SectionTextContainer>
            <Subtitle>Time Commitment</Subtitle>
            <Paragraph>{project.commitmentLevel}</Paragraph>
          </SectionTextContainer>
        </SectionTextContainer>
        <Link href={`/${project.slug}`} passHref>
          <CommitmentSectionButton>
            Project and Position Details
          </CommitmentSectionButton>
        </Link>
      </CommitmentSection>
    </Wrapper>
  );
}
