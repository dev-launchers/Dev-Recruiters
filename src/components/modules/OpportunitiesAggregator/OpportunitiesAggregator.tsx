import {
  Wrapper,
  Heading,
  FeaturedProductsSection,
  FeaturedProducts,
  CardsContainer,
  HeadingContainer,
} from "@components/modules/OpportunitiesAggregator/StyledOpportunitiesAggregator";

import * as React from "react";
import ShortCard, { ShortCardProps } from "./ShortCard";
import { featuredCardData } from "./data";
import FilteringComponent, {
  FilteringComponentProps,
} from "./filtering/FilteringComponent";

interface Props extends FilteringComponentProps, ShortCardProps {}

const OpportunitiesAggregator: React.FunctionComponent<Props> = ({
  projects,
  cardData,
}) => {
  return (
    <Wrapper>
      <HeadingContainer>
        <Heading>Join Us!</Heading>
        <span>Find a Project to Join!</span>
      </HeadingContainer>
      <FeaturedProductsSection>
        <FeaturedProducts>
          <h2>Featured Products</h2>
        </FeaturedProducts>
        <CardsContainer>
          {featuredCardData.map((data, index) => (
            <ShortCard key={index} cardData={data} />
          ))}
        </CardsContainer>
      </FeaturedProductsSection>
      {/* <FilteringComponent />  */} {/* filtering component goes here! */}
    </Wrapper>
  );
};

export default OpportunitiesAggregator;
