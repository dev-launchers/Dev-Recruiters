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
  type: boolean;
  keywords: string[];
  date: string;
  username: string;
  usernameAvatar: string;
  minCommitmentHours: number;
  maxCommitmentHours: number;
}

export default function ProductHeader({
  title,
  vision,
  type,
  keywords = [],
  date,
  username,
  usernameAvatar,
  minCommitmentHours,
  maxCommitmentHours,
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
            {keywords.map((keyword, id) => (
              <Tags key={id}>{keyword}</Tags>
            ))}
          </Row>
        </Column>
        <Column userColumn>
          <Row style={{ marginTop: "1rem" }}>
            <UsernameAvatar src={avatar} />
            <Username>{username}</Username>
          </Row>
          <Date>{date}</Date>
          <Commitment>
            {minCommitmentHours} to {maxCommitmentHours} hours a week
          </Commitment>
        </Column>
      </Row>
    </HeaderBlock>
  );
}
