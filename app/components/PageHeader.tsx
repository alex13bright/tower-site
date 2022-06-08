import { ReactElement } from 'react'
import styled from 'styled-components'
import { FakeContent } from './styled/FakeContent'
import { PageWrapper } from './PageWrapper'

const HeaderPageWrapper = styled(PageWrapper).attrs({ forwardedAs: 'header' })`
  color: ${(p) => p.theme.text.colors.main};
  background-image: linear-gradient(
    ${(p) => p.theme.background.colors.main.start} 47.41%,
    ${(p) => p.theme.background.colors.main.end}
  );
`
const Box = styled.div`
  border: 3px yellow solid;
`
export const PageHeader: () => ReactElement = () => (
  <HeaderPageWrapper>
    <Box>
      <FakeContent height={100}>Header</FakeContent>
    </Box>
  </HeaderPageWrapper>
)
