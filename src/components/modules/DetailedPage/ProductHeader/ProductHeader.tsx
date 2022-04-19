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
        <Column bg="#30363E" w="50%" fa>
          <ColumnTitle>{title}</ColumnTitle>
          <Type>{type}</Type>
          <Vision>{vision}</Vision>
        </Column>
        <Column bg="#4f5154" w="30%" fa>
          <ColumnTitle>Tags</ColumnTitle>
          <Row>
            {keywords.map((keyword, id) => (
              <Tags key={id}>{keyword}</Tags>
            ))}
          </Row>
        </Column>
        <Column bg="#30363e" w="30%" fa="flex-end">
          <Row style={{ marginTop: "1rem" }}>
            <UsernameAvatar src={avatar} />
            <Username>{username}</Username>
          </Row>
          <Date>{date}</Date>
          <Commitment>
            {minCommitmentHours} - {maxCommitmentHours} hrs/week
          </Commitment>
        </Column>
      </Row>
    </HeaderBlock>
  );
}
