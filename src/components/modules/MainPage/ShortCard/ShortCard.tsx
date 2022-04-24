import Link from "next/link";
import {
  Container,
  CardHeader,
  CardBottom,
  Title,
  Description,
  TypeContent,
  CommitmentContent,
  PositionContent,
  Input,
  Category,
  CategoryContainer,
  ButtonsContainer,
  CategoriesContainer,
} from "./StyledShortCard";

export interface Props {
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

export default function ShortCard({ cardData }: Props) {
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
              <TypeContent>{cardData.type}</TypeContent>
              <TypeContent>
                {cardData.isPlatform ? "Platform" : "Independent"}
              </TypeContent>
            </CategoryContainer>
            <CategoryContainer>
              <Category>Position Available</Category>
              <ul>
                {cardData.positionsAvailable.map((e) => (
                  <PositionContent key={e.id}>
                    <span>{e.positonType}</span>
                  </PositionContent>
                ))}
              </ul>
            </CategoryContainer>
            <CategoryContainer>
              <Category>Time Commitment</Category>
              <CommitmentContent>{cardData.commitmentHours}</CommitmentContent>
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
