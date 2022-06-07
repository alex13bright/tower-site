import { ReactElement } from 'react'
import styled from 'styled-components'
import { FakeContent, InnerBox, OuterBox } from '~/components/page'
import { background, text } from '~/styles/main'

const FooterOuterBox = styled(OuterBox).attrs({
  as: 'footer',
})`
  color: ${text.colors.main};
  background-image: linear-gradient(
    ${background.colors.main.start} 47.41%,
    ${background.colors.main.end}
  );
`
const FooterInnerBox = styled(InnerBox)`
  border: 3px yellow solid;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PageFooter: () => ReactElement = () => (
  <FooterOuterBox>
    <FooterInnerBox>
      <FakeContent height={100}>Footer</FakeContent>
    </FooterInnerBox>
  </FooterOuterBox>
)
