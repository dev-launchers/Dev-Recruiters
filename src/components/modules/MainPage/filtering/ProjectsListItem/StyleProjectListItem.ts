import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  height: 100%;
  min-height: 13.125rem;
  background: rgba(211, 212, 214, 0.9);
  border-radius: 2.5rem;
`

export const TitleSection = styled.div`
  position: relative;
  flex: 1 0 40%;
  padding-left: 3.5rem;
  padding-right: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #c2c2c2;
  color:#FFF;
  z-index: 1;
  &::after{
    content:"";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #30363E;
    border-radius: 40px;
    z-index: -1;
  };
  & p{
    padding: 5px 0;
    margin: 0;
  }
 
`

export const TypeSection = styled.div`
  position: relative;
  flex: 1 0 10%;
  padding-left: 3.5rem;
  padding-right: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #cacaca;
  padding: 2rem 1.25rem;
  z-index: 1;
  &::before{
    content:"";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
   
    background: #c2c2c2;
    border-radius:0 40px 40px 0;
    z-index: -1;
  };
  & p{
    padding: 0;
    margin: 0;
  }
 
`

export const PositionsSection = styled.div`
position: relative;
  flex: 1 0 20%;
  padding: 2rem 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #d9d9d9;
  z-index: 1;
  &::before{
    content:"";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
   
    background-color: #cacaca;
    border-radius:0 40px 40px 0;
    z-index: -1;
  };

  & button{
    width: auto;
    margin-left: auto;
    margin-right: auto;
    padding: .375rem 2rem;
    background-color:#9399A0;
    border: none;
    cursor: pointer;
  }
 
`

export const CommitmentSection = styled.div`
  background-color: #d9d9d9;
  flex: 1 0 10%;
  padding: 2rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  & p{
    padding: 0;
    margin: 0;
  }
 
`

export const PositionsList = styled.ul`
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  list-style-type: disc;

  
`
export const PositionsListItem = styled.li`
  display: list-item;
`

export const PositionTitle = styled.span`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 400;
`

export const PositionLevel = styled.span`
  padding-left: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-style: italic;
  font-weight: 300;
`

export const Title = styled.p`
  margin: 0;
  padding: 0;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
`
export const Subtitle = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
`
export const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
 
`

export const Button = styled.button`
font-size: 1.125rem;
  padding: .625rem .5rem;
  background: #59687B;
  color:#FFFFFF;
  border-radius: 20px;
  border-radius: 1.25rem;
  margin-top: .5rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  width: 15.7rem;
`