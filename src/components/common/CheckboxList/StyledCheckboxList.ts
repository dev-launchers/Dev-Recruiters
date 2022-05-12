import styled from "styled-components"

export const List = styled.ul`
    padding: 0.5rem;
    display: flex;
    margin: 0;
    width: auto;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    
  `

export const ListItem = styled.li<{ checked: boolean }>`
    padding:  .5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.12rem;
    background-color: ${(props) =>
    props.checked ? 'rgba(196, 196, 196, 0.2)' : "inherit"};
    border-radius: .25rem;
    margin-bottom: 1rem;
  `