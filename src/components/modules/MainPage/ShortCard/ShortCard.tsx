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
  Section
} from "./StyledShortCard";


 export interface Props {
  cardData: {
    titleText: string;
    id:number;
    smallText:string;
    type:string;
    href:string;
    positionsAvailable: [{
      id: number;
      positonType:string;
     }];
    isPlatform: boolean;
    commitmentHours:number;
 }
}
 
 export default function ShortCard ({cardData}:Props) {
        return (
           <>
             <Container 
              key={cardData.id}>
             <CardHeader>
             <Title>{cardData.titleText}</Title>
             <Description>{cardData.smallText}</Description>
             </CardHeader>
             <CardBottom>
             <TypeContainer>
             <Type>Type</Type>
             <TypeContent>{cardData.type}</TypeContent>
             <TypeContent>{cardData.isPlatform? "Platform":"Independent"}
             </TypeContent>
             </TypeContainer>
             <Section></Section>
             <PositionContainer>
             <Position>Position Available</Position>
              {cardData.positionsAvailable.map((e)=>(
               <PositionContent key={e.id}>{e.positonType}</PositionContent>
             )
               )}
             </PositionContainer>
             <Section></Section>
             <CommitmentContainer>
             <Commitment>Time Commitment</Commitment>
             <CommitmentContent>{cardData.commitmentHours}</CommitmentContent>
             <Link href={cardData.href}>
               <Input>See More</Input>
              </Link>
             </CommitmentContainer>
             </CardBottom>
            </Container>
           </>
        )      
                
}

