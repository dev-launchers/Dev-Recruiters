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

export default function ProductHeader() {
  return (
    <HeaderBlock>
      <Row>
        <Column>
          <HeaderTitle>Dev Socials</HeaderTitle>
          <HeaderSubtitle>Idea platform</HeaderSubtitle>
          <Row>
            <TechonlogyTags>Beginner</TechonlogyTags>
            <TechonlogyTags>Javascript</TechonlogyTags>
            <TechonlogyTags>React</TechonlogyTags>
          </Row>
        </Column>
        <Column>
          <ProfileId>Andrew Lead</ProfileId>
          <Date>May 10, 2021</Date>
          <Time>3-5 Hrs/week</Time>
        </Column>
      </Row>
    </HeaderBlock>
  );
}
