import React from "react";
import {
  HeaderBlock,
  HeaderTitle,
  HeaderSubtitle,
  ProfileId,
  TechonlogyTags,
  Date,
  Column,
  Row,
  Time,
} from "./StyledProductHeader";

interface Project {
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
}: Project) {
  return (
    <HeaderBlock>
      <Row>
        <Column>
          <HeaderTitle>{title}</HeaderTitle>
          <HeaderSubtitle>{subtitle}</HeaderSubtitle>
          <Row>
            {tags.map((tag: string, index: number) => (
              <TechonlogyTags key={index}>{tag}</TechonlogyTags>
            ))}
          </Row>
        </Column>
        <Column>
          <ProfileId>{username}</ProfileId>
          <Date>{date}</Date>
          <Time>{commitment}</Time>
        </Column>
      </Row>
    </HeaderBlock>
  );
}
