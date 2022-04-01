import React from "react";
import {
  Container,
  Content,
  ImageHolder,
  DataHolder,
  FooterContent,
  TextBold,
  SectionDiv,
  HeadLine
} from "./StyledLongCard";
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
 const LongCard =(props)=>{
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
         <HeadLine>{cardDatas.description}</HeadLine>
        </ImageHolder> 
        
        <DataHolder size={props.size}>
        <CardTitle
           data={cardDatas}
           isLinkingInside={props.isLinkingInside}
          />
          <FooterContent>
           <SectionDiv>
           <ul>
          <TextBold>
           {cardDatas.details.map((e)=>{
               <li key={e.id}></li>
               return (
               <div> <li>{e.detail} </li></div> 
               )  
            })}
            </TextBold> 
           
            </ul>
            </SectionDiv>
            </FooterContent>
            </DataHolder>
            </Content>
        </Container>             
  ) 
 }             
export default LongCard;
