import styled from 'styled-components';

export const Container = styled.div`
  font-size: 1.2rem;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  background-color: ${({ theme }) => theme.colors.NEUTRAL_6};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  flex-direction: column;

  // @media (orientation: portrait) {
  //   margin-bottom: 5%;
  // }
`;

export const HeaderCard = styled.div`
  position: relative;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  font-weight: 500;
  font-size: 24px;
  height: 102px;
  background-color: ${({ theme }) => theme.colors.NEUTRAL_5};
  text-align: left;
  // @media (orientation: portrait) {
  // }
`;

export const FooterCard = styled.div`
  padding: 1rem 2.5rem;

  width: 50%;

  @media (max-width: 1024px) {
    width: 100%;
  }
  /* & > li {
    margin-left: 3rem;
    list-style: disc !important;
  } */
  // @media (orientation: portrait) {
  // }
`;

export const TextBold = styled.div`
  padding: 3rem;
`;
export const ButtonSection = styled.button`
  margin: 20px;
  margin-left: auto;
  padding: 12px 15px;
  border-radius: 50px;
  font-family: ${({ theme }) => theme.fonts.normal};
  background-color: ${({ theme }) => theme.colors.NEUTRAL_3};
  color: ${({ theme }) => theme.colors.White};
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 11px;
  text-align: center;
  letter-spacing: 0.1625px;
  border: none;
  box-shadow: none;
`;

export const Input = styled.button``;
