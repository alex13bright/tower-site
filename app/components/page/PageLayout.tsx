import { ReactNode, ReactElement } from 'react'

import styled from 'styled-components'
import { PageHeader } from '~/components/page/PageHeader'
import { PageFooter } from '~/components/page/PageFooter'
import { PageTopButton } from '~/components/page/PageTopButton'
import { PageWrapper } from '~/components/page/PageWrapper'
import { StickyContext, StickyActions, StickyMarker } from '~/components/page/StickyActions'
import { FakeContent } from '~/components/styled/FakeContent'

export const Page = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto 1fr auto;
`
type Props = { children: ReactNode }

export const PageLayout = ({ children }: Props): ReactElement => {
  return (
    <StickyContext>
      <Page>
        <PageHeader />
        <PageWrapper forwardAs="main">
          {children}
          <StickyActions>
            <FakeContent>STICKY ACTION PANEL</FakeContent>
          </StickyActions>
        </PageWrapper>
        <StickyMarker isVisibleKey="isFooterVisible">
          <PageFooter />
        </StickyMarker>
        <PageTopButton />
      </Page>
    </StickyContext>
  )
}
