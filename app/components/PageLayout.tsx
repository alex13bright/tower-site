import { ReactNode, ReactElement } from 'react'

import styled from 'styled-components'
import { PageHeader } from '~/components/PageHeader'
import { PageFooter } from '~/components/PageFooter'
import { PageTopButton } from '~/components/PageTopButton'
import { PageWrapper } from '~/components/PageWrapper'
import {
  StickyContext,
  StickyWrapper,
  StickyMarkerWrapper,
  StickyFooterWrapper,
} from '~/components/Sticky'
import { FakeContent } from '~/components/styled/FakeContent'

export const Page = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`
type Props = { children: ReactNode }
export const PageLayout = ({ children }: Props): ReactElement => {
  return (
    <StickyContext>
      <Page>
        <PageHeader />
        <PageWrapper as="main">
          <FakeContent>
            <StickyMarkerWrapper>
              <FakeContent height="100px">MAIN ACTION PANEL</FakeContent>
            </StickyMarkerWrapper>
          </FakeContent>
          <FakeContent height="2000px">{children}</FakeContent>
          <StickyWrapper>STICKY ACTION PANEL</StickyWrapper>
        </PageWrapper>
        <StickyFooterWrapper>
          <PageFooter />
        </StickyFooterWrapper>
        <PageTopButton />
      </Page>
    </StickyContext>
  )
}
