import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Container,
  FooterCard,
  HeaderCard,
  TextBold,
  Input,
  ButtonSection,
} from "../LongCard/StyledLongCard";

export interface Props {
  description: string;
  details: string;
}

export default function LongCard({ description, details }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <Container>
        <HeaderCard>
          <TextBold>Description</TextBold>
        </HeaderCard>
        <FooterCard>
          {isExpanded ? (
            <ReactMarkdown children={details}></ReactMarkdown>
          ) : (
            <ReactMarkdown>
              {details.slice(0, details.length / 2)}
            </ReactMarkdown>
          )}
        </FooterCard>
        <ButtonSection>
          <Input onClick={() => setIsExpanded(!isExpanded)}>
            <a>{isExpanded ? "Collapse" : "Read Full"} Description</a>
          </Input>
        </ButtonSection>
      </Container>
    </>
  );
}
