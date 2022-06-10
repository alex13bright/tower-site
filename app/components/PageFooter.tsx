import { ReactElement } from 'react'
import styled from 'styled-components'
import { FakeContent } from './styled/FakeContent'
import { PageWrapper } from './PageWrapper'
import { pageMainBlock } from '~/styles/styles'

const FooterPageWrapper = styled(PageWrapper).attrs({ forwardedAs: 'footer' })`
  ${pageMainBlock};
`
const Box = styled.div`
  border: 3px yellow solid;
`
export const PageFooter = (): ReactElement => (
  <FooterPageWrapper>
    <Box>
      <FakeContent height={100}>Footer</FakeContent>
    </Box>
  </FooterPageWrapper>
)
