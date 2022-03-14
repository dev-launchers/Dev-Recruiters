import styled from "styled-components"

interface DropdownProps {
  isOpen: boolean
}

export const Wrapper = styled.div`
    position: relative;
    font-family: ${({ theme }) => theme.fonts.headline}, sans-serif;
    width: 100%;
    max-width: 24rem;
  `

export const Icon = styled.svg`
    fill: none;
    stroke: 'black';
    stroke-width: 2px;
    stroke-linecap: 'round';
    stroke-linejoin: 'round';
  `

export const Toggle = styled.button`
    display: inline-flex;
    background: #F1F4F5;
    color: #000000;
    border-radius: 45px;
    padding-left: 24px;
    padding-right: 16px;
    padding-bottom: 4px;
    padding-top: 4px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 1.125rem;
    line-height: 1.75rem;
    border-radius: 45px;
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `

export const Title = styled.p`
  padding: 4px 8px;
  margin:0;
  font-size: 1.25rem;
  `

export const ListContainer = styled.div<DropdownProps>`
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    z-index: 5;
    margin-top: .75rem ;
    padding: 6px;
    background-color: rgb(91 96 104);
    color: white;
    width: 100%;
    border-radius: .75rem;
    overflow: hidden;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    max-height: 40vh;
    overflow-y: scroll;
    overflow-x: hidden;
  `

export const List = styled.ul`
    padding: 0.5rem;
    display: flex;
    margin: 0;
    width: auto;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    row-gap: 0.1rem;
  `

export const ListItem = styled.li<{ checked: boolean }>`
    padding:  8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 1.12rem;
    background-color: ${(props) =>
    props.checked ? 'rgba(196, 196, 196, 0.2)' : "inherit"};
    border-radius: 4px;
  `