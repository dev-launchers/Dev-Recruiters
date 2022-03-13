import styled from "styled-components"

interface DropdownProps {
    isOpen: boolean
}

export const Wrapper = styled.div`
    position: relative;
    background-color: #ffffff;
    color: #000000;
    border-radius: 1.5rem;
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
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-bottom: 0.5rem;
    padding-top: 0.75rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 1.125rem;
    line-height: 1.75rem;
  `

export const ListContainer = styled.div<DropdownProps>`
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    z-index: 5;
    margin: 1rem 0;
    padding: 1rem 1.25rem;
    background-color: rgb(91 96 104);
    color: white;
    width: 100%;
    border-radius: 1.5rem;
    overflow: hidden;
  `

export const List = styled.ul`
    display: flex;
    padding: 1.25rem;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
  `

export const ListItem = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `