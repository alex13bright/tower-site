import styled, { css } from 'styled-components'
import { MouseEventHandler, ReactElement } from 'react'

const crossLine = css<{ lineLength: number; depth: number; color: string }>`
  grid-area: mixer;
  content: '';
  width: ${({ lineLength }) => lineLength}px;
  height: ${({ depth }) => depth}px;
  background: ${({ color }) => color};
`
const Main = styled.button<{
  length: number
  depth: number
  lineLength: number
  offset: number
  color: string
}>`
  cursor: pointer;
  display: grid;
  grid-template-areas: 'mixer';
  align-items: center;
  width: ${({ length }) => length}px;
  height: ${({ length }) => length}px;
  &::before {
    ${crossLine};
    transform: translateX(${({ offset }) => -offset}px) rotate(-45deg);
  }
  &::after {
    ${crossLine};
    transform: translateX(${({ offset }) => -offset}px) rotate(+45deg);
  }
`

type Props = {
  length: number
  depth: number
  color: string
  className?: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

export function Cross({ length, depth, className, onClick, color }: Props): ReactElement {
  const lineLength = length / Math.sin(Math.PI / 4)
  const offset = (lineLength - length) / 2
  return (
    <Main
      onClick={onClick}
      className={className}
      color={color}
      length={length}
      depth={depth}
      lineLength={lineLength}
      offset={offset}
    />
  )
}
