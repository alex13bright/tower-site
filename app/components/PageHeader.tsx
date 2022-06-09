import { ReactElement } from 'react'
import styled from 'styled-components'
import { FakeContent } from './styled/FakeContent'
import { PageWrapper } from './PageWrapper'
import { pageMainBlock } from '~/styles/commonStyles'

const HeaderPageWrapper = styled(PageWrapper).attrs({ forwardedAs: 'header' })`
  ${pageMainBlock}
`
const Box = styled.div`
  border: 3px yellow solid;
`
export const PageHeader = (): ReactElement => (
  <HeaderPageWrapper>
    <Box>
      <FakeContent height={100}>Header</FakeContent>
    </Box>
  </HeaderPageWrapper>
)
