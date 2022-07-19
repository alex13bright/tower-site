import { ReactElement } from 'react'
import styled from 'styled-components'
import { FakeContent } from '../styled/FakeContent'
import { PageWrapper } from './PageWrapper'
import { headerFooterColor } from '~/components/page/pageStyles'

const HeaderPageWrapper = styled(PageWrapper).attrs({ forwardedAs: 'header' })`
  ${headerFooterColor};
`

export const PageHeader = (): ReactElement => (
  <HeaderPageWrapper>
    <FakeContent height="100px">Header</FakeContent>
  </HeaderPageWrapper>
)
