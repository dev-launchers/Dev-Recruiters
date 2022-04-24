import React from "react";
const Avatar = require("../../../../images/avatar.png");
import {
  HeaderBlock,
  ColumnTitle,
  Type,
  Username,
  Tags,
  CreationDate,
  Column,
  Row,
  Commitment,
  Vision,
  UsernameAvatar,
} from "./StyledProductHeader";

interface ProductHeaderProps {
  title: string;
  vision: string;
  isPlatform: boolean;
  type: "Product" | "Project" | "Idea";
  keywords: string[];
  date: string;
  username: string;
  userAvatar?: string;
  minCommitmentHours: number;
  maxCommitmentHours: number;
}

export default function ProductHeader({
  title,
  vision,
  isPlatform = false,
  type,
  keywords = [],
  date,
  username,
  // userAvatar,
  minCommitmentHours,
  maxCommitmentHours,
}: ProductHeaderProps) {
  const formattedDate = new Date(date).toDateString().split(" ").slice(1).join(" ");

  return (
    <HeaderBlock>
      <Row>
        <Column bgColor="#30363E" w="50%">
          <ColumnTitle>{title}</ColumnTitle>
          <Type>
            {isPlatform ? "Platform" : "Independent"} {type}
          </Type>
          <Vision>{vision}</Vision>
        </Column>
        <Column bgColor="#4f5154" w="30%">
          <ColumnTitle>Tags</ColumnTitle>
          <Row>
            {keywords.map((keyword, id) => (
              <Tags key={id}>{keyword}</Tags>
            ))}
          </Row>
        </Column>
        <Column bgColor="#59687B" w="30%" fa="flex-end">
          <Row style={{ marginTop: "1rem" }}>
            <UsernameAvatar src={Avatar} />
            <Username>{username}</Username>
          </Row>
          <CreationDate>
            Product Created:{" "}
            {formattedDate}
          </CreationDate>
          <Commitment>
            {minCommitmentHours} - {maxCommitmentHours} hrs/week
          </Commitment>
        </Column>
      </Row>
    </HeaderBlock>
  );
}
