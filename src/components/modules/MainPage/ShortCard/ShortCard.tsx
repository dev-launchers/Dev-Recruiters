import Link from "next/link";
import {
  Container,
  CardHeader,
  CardBottom,
  Title,
  Description,
  Type,
  Position,
  Commitment,
  TypeContainer,
  TypeContent,
  CommitmentContainer,
  CommitmentContent,
  PositionContent,
  PositionContainer,
  Input,
} from "./StyledShortCard";

export interface Props {
  cardData: {
    titleText: string;
    id: number;
    smallText: string;
    type: string;
    positionsAvailable: any; // fix this type
    isPlatform: boolean;
    commitmentHours: number;
    href: string;
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
          <TypeContainer>
            <Type>Type</Type>
            <TypeContent>{cardData.type}</TypeContent>
            <TypeContent>
              {cardData.isPlatform ? "Platform" : "Independent"}
            </TypeContent>
          </TypeContainer>
          <PositionContainer>
            <Position>Positions Available</Position>
            {cardData.positionsAvailable.map((e) => (
              <PositionContent key={e.id}>{e.stud}</PositionContent>
            ))}
          </PositionContainer>
          <CommitmentContainer>
            <Commitment>Time Commitment</Commitment>
            <CommitmentContent>{cardData.commitmentHours} hrs</CommitmentContent>
            <Link href={cardData.href}>
              <Input>See More</Input>
            </Link>
          </CommitmentContainer>
        </CardBottom>
      </Container>
    </>
  );
}
