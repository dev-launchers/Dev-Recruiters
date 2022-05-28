import { Project } from "@models/project";
import Link from "next/link";
import { Id } from "react-toastify";
import { useTheme } from "styled-components";


import {
  Container,
  CardHeader,
  CardBottom,
  Title,
  Description,
  Content,
  PositionContent,
  Input,
  Category,
  CategoryContainer,
  ButtonsContainer,
  CategoriesContainer,
} from "./StyledShortCard";

const ShortCard = ({
  id,
  title,
  isPlatform,
  commitmentLevel,
  opportunities,
  catchPhrase,
  slug,
}: Pick<
  Project,
  | "id"
  | "title"
  | "isPlatform"
  | "commitmentLevel"
  | "opportunities"
  | "catchPhrase"
  | "slug"
>) => {
  const theme = useTheme();
  return (
    <>
      <Container key={id}>
        <CardHeader>
          <Title>{title}</Title>
          <Content style={{ color: theme.colors.LightGray, fontSize: "1rem" }}>
            {isPlatform ? "Platform" : "Independent"} Product
          </Content>
          <Description>{catchPhrase}</Description>
        </CardHeader>
        <CardBottom>
          <CategoriesContainer>
            <CategoryContainer>
              <Category>Position Available</Category>
              <ul>
                {opportunities.map((e) => (
                  <Content as={PositionContent} key={e.id}>
                    <span>{e.title}</span>
                  </Content>
                ))}
              </ul>
            </CategoryContainer>
            <CategoryContainer>
              <Category>Time Commitment</Category>
              <Content>{commitmentLevel}</Content>
            </CategoryContainer>
          </CategoriesContainer>
          <ButtonsContainer>
            <Link href={slug} passHref>
              <Input>Project Details</Input>
            </Link>
          </ButtonsContainer>
        </CardBottom>
      </Container>
    </>
  );
};
export default ShortCard;
