import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import {
  Container,
  FooterCard,
  HeaderCard,
  TextBold,
  Input,
  ButtonSection,
} from '../LongCard/StyledLongCard';

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
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm]}
            >
              {details}
            </ReactMarkdown>
          ) : (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {details.slice(0, details.length / 1)}
            </ReactMarkdown>
          )}
        </FooterCard>
        <ButtonSection>
          <Input onClick={() => setIsExpanded(!isExpanded)}>
            <a>{isExpanded ? 'Collapse' : 'Read Full'} Description</a>
          </Input>
        </ButtonSection>
      </Container>
    </>
  );
}
