import React from "react";
import avatar from "../../../../images/avatar.png";
import {
  HeaderBlock,
  ColumnTitle,
  Interests,
  Username,
  Tags,
  Date,
  Column1,
  Column2,
  Column3,
  Row,
  Commitment,
  Vision,
  UsernameAvatar,
} from "./StyledProductHeader";

interface ProductHeaderProps {
  title: string;
  vision: string;
  interests: string;
  keywords: string[];
  date: string;
  commitmentLevel: string;
  username: string;
  usernameAvatar: string;
}

export default function ProductHeader({
  title,
  vision,
  interests,
  keywords = [],
  date,
  commitmentLevel,
  username,
  usernameAvatar,
}: ProductHeaderProps) {
  return (
    <HeaderBlock>
      <Row>
        <Column1>
          <ColumnTitle>{title} This is a project title</ColumnTitle>
          <Interests>{interests}This is an interest</Interests>
          <Vision>{vision}This is a vision</Vision>
        </Column1>
        <Column2>
          <ColumnTitle>Tags</ColumnTitle>
          <Row>
            {keywords.map((keyword) => (
              <Tags key={index}>{keyword}</Tags>
            ))}
            <Tags>Tag</Tags>
          </Row>
        </Column2>
        <Column3>
          <Row style={{ marginTop: "1rem" }}>
            <UsernameAvatar src={avatar} />
            <Username>{username}Username</Username>
          </Row>
          <Date>{date}date</Date>
          <Commitment>{commitmentLevel}5hrs</Commitment>
        </Column3>
      </Row>
    </HeaderBlock>
  );
}
