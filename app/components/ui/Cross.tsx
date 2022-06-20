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
  size: number
  depth: number
  lineLength: number
  offset: number
  color: string
}>`
  cursor: pointer;
  display: grid;
  grid-template-areas: 'mixer';
  align-items: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
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
  size: number
  depth: number
  color: string
  className?: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

export function Cross({ size, depth, className, onClick, color }: Props): ReactElement {
  const lineLength = size / Math.sin(Math.PI / 4)
  const offset = (lineLength - size) / 2
  return (
    <Main
      onClick={onClick}
      className={className}
      color={color}
      size={size}
      depth={depth}
      lineLength={lineLength}
      offset={offset}
    />
  )
}
