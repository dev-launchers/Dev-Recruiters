import {
  Wrapper,
  Heading,
  FeaturedProductsSection,
  FeaturedProducts,
  CardsContainer,
  HeadingContainer,
} from '@components/modules/OpportunitiesAggregator/StyledOpportunitiesAggregator';

import * as React from 'react';
import ShortCard from './ShortCard';
import FilteringComponent, {
  FilteringComponentProps,
} from './filtering/FilteringComponent';
import BoxContainer from '@components/common/BoxContainer';

interface Props extends FilteringComponentProps {}

const OpportunitiesAggregator: React.FunctionComponent<Props> = ({
  projects,
  opportunities,
}) => {
  return (
    <Wrapper>
      <BoxContainer paddingVertical={32}>
        <HeadingContainer>
          <Heading>Join Us!</Heading>
          <span>Find a Project to Join!</span>
        </HeadingContainer>
      </BoxContainer>
      <div id='background' />
      <FeaturedProductsSection>
        <BoxContainer
          bgColor='BlackCoral'
          paddingVertical={35}
          paddingHorizontal={20}
        >
          <FeaturedProducts>
            <h2>Featured Products</h2>
          </FeaturedProducts>
          <CardsContainer>
            {projects.map((data, index) => (
              <ShortCard
                key={index}
                title={data.title}
                id={data.id}
                catchPhrase={data.catchPhrase}
                commitmentLevel={data.commitmentLevel}
                isPlatform={data.isPlatform}
                opportunities={data.opportunities}
                slug={data.slug}
              />
            ))}
          </CardsContainer>
        </BoxContainer>
      </FeaturedProductsSection>
      <BoxContainer paddingHorizontal={19} paddingVertical={32}>
        <FilteringComponent projects={projects} opportunities={opportunities} />
      </BoxContainer>
    </Wrapper>
  );
};

export default OpportunitiesAggregator;
