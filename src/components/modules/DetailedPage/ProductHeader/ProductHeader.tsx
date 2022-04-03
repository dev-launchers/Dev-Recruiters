import React from "react";
import {
  HeaderBlock,
  HeaderTitle,
  HeaderSubtitle,
  Username,
  Tags,
  Date,
  Column,
  Row,
  Commitment,
} from "./StyledProductHeader";

interface ProductHeaderProps {
  title: string;
  subtitle: string;
  tags: string[];
  date: string;
  commitment: string;
  username: string;
}

export default function ProductHeader({
  title,
  subtitle,
  tags,
  date,
  commitment,
  username,
}: ProductHeaderProps) {
  return (
    <HeaderBlock>
      <Row>
        <Column>
          <HeaderTitle>{title}</HeaderTitle>
          <HeaderSubtitle>{subtitle}</HeaderSubtitle>
          <Row>
            {tags.map((tag, index) => (
              <Tags key={index}>{tag}</Tags>
            ))}
          </Row>
        </Column>
        <Column>
          <Username>{username}</Username>
          <Date>{date}</Date>
          <Commitment>{commitment}</Commitment>
        </Column>
      </Row>
    </HeaderBlock>
  );
}
