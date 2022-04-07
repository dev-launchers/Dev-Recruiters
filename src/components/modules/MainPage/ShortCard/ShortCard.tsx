import {useRouter} from 'next/router';
import Link from "next/link";
import {
  ProjectContainer,
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
  Input
} from "./StyledShortCard";


 export interface Props {
  cardDatas: any;
  carData: any;
  id:number;
  e:any;
  href:string;
  cont:string;
  stud:string;
  time:string;
  hour:string;
}
 
 export default function ShortCard ({cardDatas}:Props) {
     const router = useRouter();
        return (
           <>
            <ProjectContainer>
           {cardDatas.map((cardData => (
             <Container 
              key={cardData.id}>
             <CardHeader>
             <Title>{cardData.titleText}</Title>
             <Description>{cardData. smallText}</Description>
             </CardHeader>
             <CardBottom>
              <TypeContainer>
             <Type>{cardData.type}</Type>
             {cardData.content.map(e => (
               <TypeContent key={e.id}>{e.cont}</TypeContent>
             )
             )}
             </TypeContainer>
             <PositionContainer>
             <Position>{cardData.position}</Position>
             {cardData.study.map(e=>(
               <PositionContent key={e.id}>{e.stud}</PositionContent>
             ))}
             
             </PositionContainer>
             <CommitmentContainer>
             <Commitment>{cardData.time}</Commitment>
             <CommitmentContent>{cardData.hour}</CommitmentContent>
             <Link href={cardData.href}><Input>See More</Input></Link>
             </CommitmentContainer>
             </CardBottom>
            </Container>
           ) ))}
           </ProjectContainer>
           </>
        )      
                
}

