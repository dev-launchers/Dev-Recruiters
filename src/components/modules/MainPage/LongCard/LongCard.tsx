import React,{useState} from 'react';
import {
Container,
FooterCard,
HeaderCard,
TextBold,
Input,
ButtonSection,
} from '../LongCard/StyledLongCard'

export interface Props {
    longCard: {
        description: string;
        details: [{
            id:number;
            detail: string;
        }]
    }
   
}

export default function LongCard ({longCard}:Props){
    const [readMore, setReadMore] = useState(false);
  return(
      <>
            <Container>
            <HeaderCard>
            <TextBold>{longCard.description}</TextBold>
            </HeaderCard>
            <ul>
            {longCard.details.map(data =>(
            <FooterCard key={data.id}>
            <li>{readMore? data.detail: `${data.detail.substring(0,90)}...`}</li>
            </FooterCard>
            ))}
            </ul>
            <ButtonSection>
            <Input onClick={()=> setReadMore(!readMore)}><a>Collaborate Description</a></Input>
            </ButtonSection>
            </Container>
      </>
  )
}