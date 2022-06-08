import { ReactElement } from 'react'
import styled from 'styled-components'
import { FakeContent } from './styled/FakeContent'
import { PageWrapper } from './PageWrapper'

const FooterPageWrapper = styled(PageWrapper).attrs({ forwardedAs: 'footer' })`
  color: ${(props) => props.theme.text.colors.main};
  background-image: linear-gradient(
    ${(props) => props.theme.background.colors.main.start} 47.41%,
    ${(props) => props.theme.background.colors.main.end}
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
