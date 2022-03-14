import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  background: rgba(211, 212, 214, 0.9);
  border-radius: 40px;
`

export const TitleSection = styled.div`
  padding-left: 3.5rem;
  padding-right: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
 // grid-template-columns: repeat(3, minmax(0, 1fr));
`

export const GridSection = styled.div<{ bgColor: string; alignItems?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  padding: 2rem 1.25rem;
  padding-right: 1.25rem;
  padding-top: 1.25rem;
  height: 100%;
  background: ${(props) => props.bgColor};
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
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
`
export const Subtitle = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
`
export const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
`

export const Button = styled.button`
  padding: 10px 8px;
  background: rgba(84, 87, 91, 0.2);
  border-radius: 20px;
  margin-top: 1rem;
`