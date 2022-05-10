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
    const [isExpanded, setIsExpanded] = useState(false);
  return(
      <>
            <Container>
            <HeaderCard>
            <TextBold>Description</TextBold>
        
            </HeaderCard>
            <FooterCard>
                {isExpanded ? longCard.details.map(data => <li>{data.detail}</li>) : <li>{longCard.details[0].detail}</li>}
            </FooterCard>
            <ButtonSection>
            <Input onClick={()=> setIsExpanded(!isExpanded)}><a>{isExpanded ? "Collapse" : "Read Full"} Description</a></Input>
            </ButtonSection>
            </Container>
      </>
  )
}