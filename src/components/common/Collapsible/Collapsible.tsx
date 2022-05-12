import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  title: string;
  children: React.ReactElement;
}

export default function Collapsible({ title, children }: Props) {
  const [collapsed, setCollapsed] = useState(true);
  const ref = useRef<HTMLDivElement>();
  const [elemHeight, setElemHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setElemHeight(ref.current.scrollHeight);
    }
  }, []);

  return (
    <Container>
      <Button
        collapsed={collapsed}
        onClick={() => setCollapsed((prev) => !prev)}
      >
        <span>{title}</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </Button>
      <Content ref={ref} collapsed={collapsed} elemHeight={elemHeight}>
        {children}
      </Content>
    </Container>
  );
}

interface ElementProps {
  collapsed: boolean;
}

const Container = styled.div`
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
`;
const Button = styled.button<ElementProps>`
  background-color: ${({ theme }) => theme.colors.CoolGrey};
  color: ${({ theme }) => theme.colors.Black};

  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;

  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  ${({ collapsed }) =>
    !collapsed &&
    css`
      background-color: #ccc;

      &:hover {
        background-color: #ccc;
      }
    `};
  & svg {
    height: 40px;
    width: 40px;
    transition: transform 300ms ease-in;
    ${({ collapsed }) =>
      !collapsed &&
      css`
        transform: rotate(180deg);
      `};
  }

  & span {
    font-family: ${({ theme }) => theme.fonts.normal};
    font-style: normal;
    font-weight: 600;
    font-size: 21.3333px;
    line-height: 20px;
  }
`;
const Content = styled.div<{ collapsed: boolean; elemHeight: number }>`
  height: ${({ collapsed, elemHeight }) =>
    collapsed ? '0' : `${elemHeight}px`};
  padding: ${({ collapsed }) => (collapsed ? '0 18px' : '10px 18px')};
  color: ${({ theme }) => theme.colors.Black};
  overflow: hidden;
  background-color: #f1f1f1;
  transform-origin: top;
  transition: all 300ms 100ms ease-out;
`;
