import { ReactElement } from 'react'
import styled from 'styled-components'
import { OuterBox, InnerBox, FakeContent } from './page'
import { background, text } from '~/styles/main'

const HeaderOuterBox = styled(OuterBox).attrs({
  as: 'header',
})`
  color: ${text.colors.main};
  background-image: linear-gradient(
    ${background.colors.main.start} 47.41%,
    ${background.colors.main.end}
  );
`
const HeaderInnerBox = styled(InnerBox)`
  border: 3px yellow solid;
`
const FooterFakeContent = styled(FakeContent)``
export const PageHeader: () => ReactElement = () => (
  <HeaderOuterBox>
    <HeaderInnerBox>
      <FooterFakeContent height={100}>Header</FooterFakeContent>
    </HeaderInnerBox>
  </HeaderOuterBox>
)
