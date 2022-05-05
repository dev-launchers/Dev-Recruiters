import { useState } from 'react';

import {
  Button,
  ButtonsSection,
  CommitmentSection,
  Container,
  DescriptionSection,
  ExpectationsList,
  ExpectationsListItem,
  ExpectationsSection,
  Icon,
  LikeButton,
  OpportunityDetailsContainer,
  OpportunityInfoContainer,
  PositionDetailsMobile,
  Section,
  TagsList,
  TagsListItem,
  TagsSection,
  TitleSection,
} from './StyledPositionCard';

interface Props {
  position: any;
}

export default function PositionCard({ position }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  return (
    <Container>
      <Section Mobile={false} color={'Dark'}>
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
        <OpportunityInfoContainer>
          <TitleSection>
            <h2>Web Developer </h2>
          </TitleSection>
          <PositionDetailsMobile>
            <p>{position.level}</p>
            <p>{position.commitment}</p>
          </PositionDetailsMobile>
          <ButtonsSection Mobile={true}>
            <Button
              color='SonicSilver'
              onClick={() => setIsExpanded((prev) => !prev)}
            >
              {`${isExpanded ? 'Collapse' : 'Display'} Positions`}
            </Button>
            <Button color='DarkElectricBlue'>Apply</Button>
          </ButtonsSection>
          <DescriptionSection Mobile={false} Expanded={isExpanded}>
            <h3>Position Description</h3>
            <p>
              {isExpanded
                ? position.description
                : `${position.description.substring(0, 320)}...`}
            </p>
          </DescriptionSection>
        </OpportunityInfoContainer>
      </Section>

      <Section Mobile={true} color={'Light'} Expanded={isExpanded}>
        <OpportunityDetailsContainer>
          <TagsSection>
            <h4>Position Tags</h4>
            <TagsList>
              <TagsListItem color='Dark'>{position.level}</TagsListItem>
              {position.skills.map((skill, index) => (
                <TagsListItem color='Light' key={index}>
                  {skill}
                </TagsListItem>
              ))}
            </TagsList>
          </TagsSection>
          <div>
            <CommitmentSection>
              <h4>Time Commitment</h4>
              <p>{position.commitment}</p>
            </CommitmentSection>
            <ExpectationsSection Expanded={isExpanded}>
              <h4>Expectations</h4>
              <ExpectationsList>
                {position.expectations.map((item, index) => (
                  <ExpectationsListItem key={index}>
                    {item}
                  </ExpectationsListItem>
                ))}
              </ExpectationsList>
            </ExpectationsSection>
          </div>
        </OpportunityDetailsContainer>
        <DescriptionSection Mobile={true} Expanded={isExpanded}>
          <h3>Position Description</h3>
          <p>
            {isExpanded
              ? position.description
              : `${position.description.substring(0, 320)}...`}
          </p>
        </DescriptionSection>
        <ButtonsSection Mobile={false}>
          <Button
            color='SonicSilver'
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            {`${isExpanded ? 'Collapse' : 'Display'} Positions`}
          </Button>
          <Button color='DarkElectricBlue'>Apply</Button>
        </ButtonsSection>
      </Section>
    </Container>
  );
}
