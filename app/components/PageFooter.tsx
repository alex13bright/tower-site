import { ReactElement } from 'react'
import styled from 'styled-components'
import { InnerBox, OuterBox } from '~/components/page'

const FooterOuterBox = styled(OuterBox).attrs({
  as: 'header',
})`
  height: 100px;
  color: #ccc;
  background-color: #2b2e3b;
  text-align: center;
`

export const PageFooter: () => ReactElement = () => (
  <FooterOuterBox>
    <InnerBox>Footer</InnerBox>
  </FooterOuterBox>
)
