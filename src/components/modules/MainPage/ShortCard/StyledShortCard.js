import styled, { css } from "styled-components";

export const Container = styled.div`
    margin:0.5%;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4), 0 3px 6px rgba(0, 0, 0, 0.23); 
    background-color:#C4C4C4;
    width: ${({width}) => (width === "large" ? "90%" : "30%")};
    @media (orientation: portrait){
      width: 100%;
      margin-bottom:10%;
    }
    
`;

export const CardHeader = styled.div`
   border-radius: 40px;
   padding: 30px 10px;
   background-color: #59687B;
   text-align: center;
   color: white;
   font-size: ${({cardSize})=> cardSize || "1.2rem"};
   font-size:1.2rem;
`;


export const CardBottom = styled.div`
  display: flex;
  flex:1;
  justify-content: space-between; 
  flex-direction:row;
  background-color: #C4C4C4;
  text-align: center;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  padding: 10px 10px;
  font-size: ${({cardSize})=> cardSize || "1.2rem"};
  font-size:1.2rem;
`;
   
export const Title = styled.div`
   font-size:2rem;
`;

export const Type = styled.div`
    margin: 0 1rem 2rem 1rem;
`;
export const Description = styled.div`
   font-size:1rem;
`;

export const Commitment = styled.div`
     display:flex;
     margin-bottom:1rem;
     width: 30%;
    `;
export const CommitmentContainer = styled.div`
     font-size:1.2rem;
`;
export const CommitmentContent = styled.div`
    font-size:1.2rem;
`;

export const Position = styled.div`
     margin-bottom: 2rem;
`;
export const PositionContainer = styled.div`
    font-size:1.2rem;
`;
export const PositionContent = styled.div`
    font-size:1.2rem;  
`;
export const TypeContainer = styled.div`
    font-size:1.2rem;
`;
export const TypeContent = styled.div`
    font-size:1.2rem;
`;
export const Input = styled.button`
  color:#418CBF;
  margin: 0.5rem 0.5rem 1rem 1rem;
  padding: 1px 1px;
  border-radius: 50px;
  background-color: rgba(123, 123, 123,0.2)
`;

