import { Layout,ProjectContainer } from "./StyledMain";
import LongCard from "../src/component/LongCard";
import CARDDATA from "../src/CardData";
import {connect} from 'react-redux';
import React from "react";
import {withRouter} from "react-router-dom";


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          cardData: CARDDATA
        }   
    }

    render(){
        return(
          <div
          style={{
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "3rem",
        }}
      >
        <div
            style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>Join Us!</h1>
          </div>
          <Layout>
          {this.state.cardData.map((data,i)=>( 
          <ProjectContainer key={i}>
            <LongCard 
            style={{ margin: 0, width: "100%", height: "100%" }}
            cardDatas={data} 
            />
           </ProjectContainer>))   
             }
          </Layout>
         </div>   
            );         
            }
}

const mapStateToProps = state => {
  return {
    cardDatas: state.cardData,
  }
 }

const mapDispatchToProps = dispatch => ({
   
    
     
});


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));