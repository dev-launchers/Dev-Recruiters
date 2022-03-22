import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  height: 100%;
  background: rgba(211, 212, 214, 0.9);
  border-radius: 2.5rem;
`

export const TitleSection = styled.div`
  flex: 1 0 30%;
  padding-left: 3.5rem;
  padding-right: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & p{
    padding: 5px 0;
    margin: 0;
  }
 
`

export const TypeSection = styled.div`
  flex: 1 0 10%;
  padding-left: 3.5rem;
  padding-right: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(123, 123, 123, 0.4);
  padding: 2rem 1.25rem;
  & p{
    padding: 0;
    margin: 0;
  }
 
`

export const PositionsSection = styled.div`
  flex: 1 0 30%;
  padding: 2rem 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(192, 192, 192, 1);
  

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
  flex: 1 0 10%;
  padding: 2rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  padding: .625rem .5rem;
  background: rgba(84, 87, 91, 0.2);
  border-radius: 1.25rem;
  margin-top: .5rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
`