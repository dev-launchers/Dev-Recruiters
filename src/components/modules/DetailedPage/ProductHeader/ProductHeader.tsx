import React from "react";
import avatar from "../../../../images/avatar.png";
import {
  HeaderBlock,
  ColumnTitle,
  Type,
  Username,
  Tags,
  Date,
  Column,
  Row,
  Commitment,
  Vision,
  UsernameAvatar,
} from "./StyledProductHeader";

interface ProductHeaderProps {
  title: string;
  vision: string;
  type: string;
  keywords: string[];
  date: string;
  commitmentLevel: string;
  username: string;
  usernameAvatar: string;
}

export default function ProductHeader({
  title,
  vision,
  type,
  keywords = [],
  date,
  commitmentLevel,
  username,
  usernameAvatar,
}: ProductHeaderProps) {
  return (
    <HeaderBlock>
      <Row>
        <Column>
          <ColumnTitle>{title}</ColumnTitle>
          <Type>{type}</Type>
          <Vision>{vision}</Vision>
        </Column>
        <Column tagsColumn>
          <ColumnTitle>Tags</ColumnTitle>
          <Row>
            {keywords.map((keyword) => (
              <Tags key={keyword}>{keyword}</Tags>
            ))}
          </Row>
        </Column>
        <Column userColumn>
          <Row style={{ marginTop: "1rem" }}>
            <UsernameAvatar src={avatar} />
            <Username>{username}</Username>
          </Row>
          <Date>{date}</Date>
          <Commitment>{commitmentLevel}</Commitment>
        </Column>
      </Row>
    </HeaderBlock>
  );
}
