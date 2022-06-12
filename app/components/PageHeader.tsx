import { ReactElement } from 'react'
import styled from 'styled-components'
import { FakeContent } from './styled/FakeContent'
import { PageWrapper } from './PageWrapper'
import { pageMainBlock } from '~/styles/styles'

const HeaderPageWrapper = styled(PageWrapper).attrs({ forwardedAs: 'header' })`
  ${pageMainBlock};
`
export const PageHeader = (): ReactElement => (
  <HeaderPageWrapper>
    <FakeContent height="100px">Header</FakeContent>
  </HeaderPageWrapper>
)
