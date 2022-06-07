import { ReactNode, ReactElement } from 'react'
import { breakpoints } from '~/styles/main'
import styled, { css } from 'styled-components'
import { PageHeader } from '~/components/PageHeader'
import { PageFooter } from '~/components/PageFooter'

export const Outer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const innerCss = css`
  width: 100%;
  min-width: ${breakpoints.mobile};
  max-width: ${breakpoints.desktop};
`
export const Page = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`

export const Header = styled(PageHeader)`
  ${innerCss}
`
export const Footer = styled(PageFooter)`
  ${innerCss}
`
export const Content = styled.div`
  ${innerCss}
`

type Props = { children: ReactNode }
export const PageLayout: (props: Props) => ReactElement = ({ children }: Props) => (
  <Page>
    <Outer>
      <Header />
    </Outer>
    <Outer>
      <Content>{children}</Content>
    </Outer>
    <Outer>
      <Footer />
    </Outer>
  </Page>
)
