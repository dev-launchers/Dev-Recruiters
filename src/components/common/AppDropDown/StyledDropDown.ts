import styled from "styled-components"

interface DropdownProps {
  isOpen: boolean
}

export const Wrapper = styled.div`
    position: relative;
    font-family: ${({ theme }) => theme.fonts.headline}, sans-serif;
    width: auto;
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
    border-radius: 2.9rem;
    padding-left: 1.5rem;
    padding-right: 1rem;
    padding-bottom: 4px;
    padding-top: 4px;
    justify-content: space-between;
    align-items: center;
    max-width: 12rem;
    width: 100%;
    font-size: 1.125rem;
    line-height: 1.75rem;
    border-radius: 2.8rem;
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border:none;
    cursor: pointer;
  `

export const Title = styled.p`
  padding: .25rem .5rem;
  margin:0;
  font-size: 1.25rem;
  `

export const ContentContainer = styled.div<DropdownProps>`
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    z-index: 5;
    padding: .37rem;
    margin-top: .75rem ;
    background-color: rgb(91 96 104);
    min-width: 18rem;
    color: white;
    width: 100%;
    border-radius: .75rem;
    overflow: hidden;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    max-height: 40vh;
    overflow-y: scroll;
    overflow-x: hidden;
    height: auto;
  `