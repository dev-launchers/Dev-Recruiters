import React from "react";
import {
  Container,
  Content,
  Image,
  Description,
  ButtonSty,
  TextBold,
  SectionDiv1,
  SectionDiv2,
  SectionDiv3,
  SectionDiv4,
  HeadLine
} from "./StyledLongCard";
import { Layout,ProjectContainer } from "../MainCom/StyledMainCom";
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
 class LongCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
        return (
         <Layout  length = "900px" lengthMax = "900px">
          <Container
          style={this.props.style}
          size={this.props.size}
          key={this.props.i}
          >
          <Content
           size={this.props.size}
           >
              <SectionDiv1> 
                <HeadLine>{this.props.cardDatas.titleText}</HeadLine>
               <Description>{this.props.cardDatas.smallText}</Description>
               </SectionDiv1>
                 <SectionDiv2>
                <TextBold>{this.props.cardDatas.type}</TextBold> 
                 <ul>
                 {this.props.cardDatas.content.map((e)=>{
                     <li key={e.id}></li>
                     return (
                     <div>{e.cont}</div> 
                     )  
                  })}
                  </ul>
                  </SectionDiv2>
                  <SectionDiv3>
                <TextBold>{this.props.cardDatas.position}</TextBold>
                <ul>
                 {this.props.cardDatas.study.map((e)=>{
                     <li key={e.id}></li>
                     return (
                     <div>{e.stud}</div> 
                     )  
                  })}
                  </ul>
                  </SectionDiv3>
                  <SectionDiv4>
                <TextBold>{this.props.cardDatas.time}</TextBold>
                     <div>{this.props.cardDatas.hour}</div> 
                 <ButtonSty>See More</ButtonSty>
                  </SectionDiv4>
                  </Content>
              </Container>   
              </Layout>      
        )    
                } 
}
export default LongCard;
