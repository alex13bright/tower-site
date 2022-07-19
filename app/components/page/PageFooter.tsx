import { ReactElement } from 'react'
import styled from 'styled-components'
import { FakeContent } from '../styled/FakeContent'
import { PageWrapper } from './PageWrapper'
import { headerFooterColor } from '~/components/page/pageStyles'

const FooterPageWrapper = styled(PageWrapper).attrs({ forwardedAs: 'footer' })`
  ${headerFooterColor};
`

export const PageFooter = (): ReactElement => {
  return (
    <FooterPageWrapper>
      <FakeContent height="100px">Footer</FakeContent>
    </FooterPageWrapper>
  )
}
