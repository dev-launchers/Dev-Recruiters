import {
  Wrapper,
  Heading,
  FeaturedProductsSection,
  FeaturedProducts,
  CardsContainer,
  HeadingContainer,
} from '@components/modules/OpportunitiesAggregator/StyledOpportunitiesAggregator';

import * as React from 'react';
import ShortCard, { ShortCardProps } from './ShortCard';
import { featuredCardData } from './data';
import FilteringComponent, {
  FilteringComponentProps,
} from './filtering/FilteringComponent';
import BoxContainer from '@components/common/BoxContainer';

interface Props extends FilteringComponentProps, ShortCardProps {}

const OpportunitiesAggregator: React.FunctionComponent<Props> = ({
  projects,
  opportunities,
  cardData,
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
            {featuredCardData.map((data, index) => (
              <ShortCard key={index} cardData={data} />
            ))}
          </CardsContainer>
        </BoxContainer>
      </FeaturedProductsSection>
      <BoxContainer paddingHorizontal={19} paddingVertical={32}>
        <FilteringComponent projects={projects} opportunities={opportunities} />
      </BoxContainer>
      {/* filtering component goes here! */}
    </Wrapper>
  );
};

export default OpportunitiesAggregator;
