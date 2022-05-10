import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.OuterSpace};

  & > #background {
    position: absolute;
    right: 0;
    top: 18%;
    z-index: -1;
    height: 368.23px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.BlackCoral};
  }
  & > :not(#background) {
    max-width: 1440px;
  }
`;

export const HeadingContainer = styled.div`
  color: ${({ theme }) => theme.colors.LightGray};
  text-align: center;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  border-width: 0.75px;
  border-color: ${({ theme }) => theme.colors.AntiFlashWhiteT40};
  margin-bottom: 1rem;
  min-width: 30.46875rem;
  margin-inline: auto;
`;

export const FeaturedProductsSection = styled.div`
  margin-top: 1rem;
  padding-block: 1.2rem;
`;

export const FeaturedProducts = styled.div`
  margin: auto;
  width: 20%;
  color: ${({ theme }) => theme.colors.LightGray};
  background-color: ${({ theme }) => theme.colors.BlackT38};
  padding: 1.4rem 2rem;
  border-radius: 1.875rem;

  h2 {
    text-align: center;
    margin: 0;
    letter-spacing: 0.16px;
    line-height: 11.3px;
  }

  @media (orientation: portrait) {
    width: initial;
    background-color: transparent;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
  & > * {
    flex: 1;
  }
`;
