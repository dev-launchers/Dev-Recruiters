import React from "react";
import {
  Container,
  Content,
  ImageHolder,
  DataHolder,
  Image,
  Description,
  FooterContent,
  ButtonSty,
  TextBold,
  SectionDiv,
  HeadLine
} from "./StyledShortCard";
import CardTitle from "../../../common/Card/CardTitle";

/**
 * Props:
 *  - title:
 *  - description:
 *  - imageSrc:
 *  - size:
 *  - href:
 *  - onClick:
 *  - attachments:
 *  - textAlignment: changes text-alignment if passed otherwise it defaults to left text-alignment
 *  - imageHolderBackgroundColor: changes bgColor if passed otherwise it defaults to black bgColor
 *  - cardFlexDirection: changes flex-direction if existed otherwise delete flex-direction
 */
 const ShortCard =(props)=> {
        const {cardDatas} = props;
        return (
          <Container
          style={props.style}
          size={props.size}
          key={props.i}
          >
          <Content
           size={props.size}
           >
              <ImageHolder
                size={props.size}
               >
               <HeadLine>{cardDatas.titleText}</HeadLine>
               <Description>{cardDatas.smallText}</Description>
              </ImageHolder> 
              
              <DataHolder size={props.size}>
              <CardTitle
                 data={cardDatas}
                 isLinkingInside={props.isLinkingInside}
                />
                <FooterContent>
                 <SectionDiv>
                 <ul>
                <TextBold>{cardDatas.type}</TextBold> 
                 {cardDatas.study.map((e)=>{
                     <li key={e.id}></li>
                     return (
                     <div>{e.cont}</div> 
                     )  
                  })}
                  </ul>
                  </SectionDiv>

                  <SectionDiv>
                <TextBold>{cardDatas.position}</TextBold>
                <ul
                  style={{
                  margin:"0 10px 10px 0",
                  padding:"0 10px 10px 0",
                  }}
                >
                 {cardDatas.study.map((e)=>{
                     <li key={e.id}></li>
                     return (
                     <div>{e.stud}</div> 
                     )  
                  })}
                  </ul>
                  </SectionDiv>
                  <SectionDiv>
                <TextBold>{cardDatas.time}</TextBold>
                     <div>{cardDatas.hour}</div> 
                 <ButtonSty>See More</ButtonSty>
                  </SectionDiv>
                  </FooterContent>
                  </DataHolder>
                  </Content>
              </Container>             
        ) 
          
                
}
export default ShortCard;
