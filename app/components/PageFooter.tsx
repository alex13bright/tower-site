import { ReactElement } from 'react'
import styled from 'styled-components'
import { FakeContent } from './styled/FakeContent'
import { PageWrapper } from './PageWrapper'
import { pageMainBlock } from '~/styles/styles'

const FooterPageWrapper = styled(PageWrapper).attrs({ forwardedAs: 'footer' })`
  ${pageMainBlock};
`

export const PageFooter = (): ReactElement => {
  return (
    <FooterPageWrapper>
      <FakeContent height="100px">Footer</FakeContent>
    </FooterPageWrapper>
  )
}
