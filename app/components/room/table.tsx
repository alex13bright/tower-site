import styled from 'styled-components'
import { proximaNovaSb } from '~/styles/styles'
import { headerBlock, headerTitle } from '~/components/room/styles'

export const Name = styled.td`
  grid-area: name;
  color: #e5e5e5;
  display: flex;
`
export const Value = styled.td`
  grid-area: value;
  font-family: ${proximaNovaSb};
`

export const Row = styled.tr`
  display: grid;
  align-items: start;
  column-gap: 10px;
  grid-template-areas: 'name line value';
  grid-template-columns: auto minmax(40px, 1fr) auto;
  &::after {
    grid-area: line;
    background-image: linear-gradient(90deg, #555 40%, hsla(0, 0%, 100%, 0) 0);
    background-position-y: 12px;
    background-repeat: repeat-x;
    background-size: 3px 1px;
    height: 100%;
    content: '';
  }
`

export const Content = styled.tbody`
  display: grid;
  row-gap: 16px;
  align-items: center;
`

export const Caption = styled.caption`
  display: block;
  text-align: start;
  ${headerTitle};
`

export const Table = styled.table`
  display: grid;
  row-gap: 16px;

  ${headerBlock};
`
