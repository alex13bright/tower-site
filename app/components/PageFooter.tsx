import { ReactElement } from 'react'
import styled from 'styled-components'
import { FakeContent } from './styled/FakeContent'
import { PageWrapper } from './PageWrapper'
import { background, text } from '~/styles/main'

const FooterPageWrapper = styled(PageWrapper).attrs({ forwardedAs: 'footer' })`
  color: ${text.colors.main};
  background-image: linear-gradient(
    ${background.colors.main.start} 47.41%,
    ${background.colors.main.end}
  );
`
const Box = styled.div`
  border: 3px yellow solid;
`
export const PageFooter: () => ReactElement = () => (
  <FooterPageWrapper>
    <Box>
      <FakeContent height={100}>Footer</FakeContent>
    </Box>
  </FooterPageWrapper>
)
