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
    cardDatas: any;
    id:number;
    detail: string;
}

export default function LongCard ({cardDatas}:Props){
    const [readMore, setReadMore] = useState(false);
  return(
      <>
            <Container>
            <HeaderCard>
            <TextBold>{cardDatas.description}</TextBold>
            </HeaderCard>
            {cardDatas.details.map(data =>(
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