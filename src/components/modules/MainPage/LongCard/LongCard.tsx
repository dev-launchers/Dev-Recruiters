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
            {longCard.details.map(data =>(
            <FooterCard key={data.id}>
            <li>{readMore? data.detail: `${data.detail.substring(0,100)}...`}</li>
            </FooterCard>
            ))}
            <ButtonSection>
            <Input onClick={()=> setReadMore(!readMore)}><a>Read Full Description</a></Input>
            </ButtonSection>
            </Container>

     
      </>
  )
}