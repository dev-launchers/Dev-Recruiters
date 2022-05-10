import Link from "next/link";
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

export interface ShortCardProps {
  cardData: {
    titleText: string;
    id: number;
    smallText: string;
    type: string;
    href: string;
    positionsAvailable: [
      {
        id: number;
        positonType: string;
      }
    ];
    isPlatform: boolean;
    commitmentHours: string;
  };
}

export default function ShortCard({ cardData }: ShortCardProps) {
  return (
    <>
      <Container key={cardData.id}>
        <CardHeader>
          <Title>{cardData.titleText}</Title>
          <Description>{cardData.smallText}</Description>
        </CardHeader>
        <CardBottom>
          <CategoriesContainer>
            <CategoryContainer>
              <Category>Type</Category>
              <Content>
                {cardData.isPlatform ? "Platform" : "Independent"}
              </Content>
              <Content>{cardData.type}</Content>
            </CategoryContainer>
            <CategoryContainer>
              <Category>Position Available</Category>
              <ul>
                {cardData.positionsAvailable.map((e) => (
                  <Content as={PositionContent} key={e.id}>
                    <span>{e.positonType}</span>
                  </Content>
                ))}
              </ul>
            </CategoryContainer>
            <CategoryContainer>
              <Category>Time Commitment</Category>
              <Content>{cardData.commitmentHours}</Content>
            </CategoryContainer>
          </CategoriesContainer>
          <ButtonsContainer>
            <Link href={cardData.href}>
              <Input>Project Details</Input>
            </Link>
          </ButtonsContainer>
        </CardBottom>
      </Container>
    </>
  );
}
