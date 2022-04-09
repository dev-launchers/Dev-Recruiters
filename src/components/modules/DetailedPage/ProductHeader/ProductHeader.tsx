import React from "react";
import {
  HeaderBlock,
  ColumnTitle,
  HeaderSubtitle,
  Username,
  Tags,
  Date,
  Column1,
  Column2,
  Column3,
  Row,
  Commitment,
  Description,
  UsernameAvatar,
} from "./StyledProductHeader";

interface ProductHeaderProps {
  title: string;
  vision: string;
  description: string;
  keywords: string[];
  date: string;
  commitmentLevel: string;
  username: string;
  usernameAvatar: string;
}

export default function ProductHeader({
  title,
  vision,
  keywords = [],
  date,
  commitmentLevel,
  username,
  usernameAvatar,
  description,
}: ProductHeaderProps) {
  return (
    <HeaderBlock>
      <Row>
        <Column1>
          <ColumnTitle>{title}</ColumnTitle>
          <HeaderSubtitle>{vision}</HeaderSubtitle>
          <Description>Description</Description>
        </Column1>
        <Column2>
          <ColumnTitle>Tags</ColumnTitle>
          <Row>
            {keywords.map((keyword, index) => (
              <Tags key={index}>{keyword}</Tags>
            ))}
          </Row>
        </Column2>
        <Column3>
          <Row>
            <UsernameAvatar>{usernameAvatar}</UsernameAvatar>
            <Username>{username}Username</Username>
          </Row>
          <Date>{date}date</Date>
          <Commitment>{commitmentLevel}5hrs</Commitment>
        </Column3>
      </Row>
    </HeaderBlock>
  );
}
