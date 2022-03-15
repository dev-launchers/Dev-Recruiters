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
class ShortCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
        return (
          <Container
          style={this.props.style}
          size={this.props.size}
          key={this.props.i}
          >
          <Content
           size={this.props.size}
           >
              <ImageHolder
              size={this.props.size}
               >
               <HeadLine>{this.props.cardDatas.titleText}</HeadLine>
               <Description>{this.props.cardDatas.smallText}</Description>
              </ImageHolder> 
              
              <DataHolder size={this.props.size}>
              <CardTitle
                 data={this.props.cardDatas}
                 isLinkingInside={this.props.isLinkingInside}
                />
                <FooterContent>
                 <SectionDiv>
                 <ul>
                <TextBold>{this.props.cardDatas.type}</TextBold> 
                 {this.props.cardDatas.content.map((e)=>{
                     <li key={e.id}></li>
                     return (
                     <div>{e.cont}</div> 
                     )  
                  })}
                  </ul>
                  </SectionDiv>

                  <SectionDiv>
                <TextBold>{this.props.cardDatas.position}</TextBold>
                <ul
                  style={{
                  margin:"0 10px 10px 0",
                  padding:"0 10px 10px 0",
                  }}
                >
                 {this.props.cardDatas.study.map((e)=>{
                     <li key={e.id}></li>
                     return (
                     <div>{e.stud}</div> 
                     )  
                  })}
                  </ul>
                  </SectionDiv>
                  <SectionDiv>
                <TextBold>{this.props.cardDatas.time}</TextBold>
                     <div>{this.props.cardDatas.hour}</div> 
                 <ButtonSty>See More</ButtonSty>
                  </SectionDiv>
                  </FooterContent>
                  </DataHolder>
                  </Content>
              </Container>         
        )     
}}
export default ShortCard;
