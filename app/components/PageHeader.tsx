import { ReactElement } from 'react'
import styled from 'styled-components'
import { OuterBox, InnerBox } from './page'

const HeaderOuterBox = styled(OuterBox).attrs({
  as: 'header',
})`
  height: 100px;
  color: #ccc;
  background-color: #2b2e3b;
  text-align: center;
`
const HeaderInnerBox = styled(InnerBox)`
  border: 3px yellow solid;
`
export const PageHeader: () => ReactElement = () => (
  <HeaderOuterBox>
    <HeaderInnerBox>Header</HeaderInnerBox>
  </HeaderOuterBox>
)
