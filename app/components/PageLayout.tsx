import { ReactNode, ReactElement } from 'react'

import styled from 'styled-components'
import { PageHeader } from '~/components/PageHeader'
import { PageFooter } from '~/components/PageFooter'
import { PageTopButton } from '~/components/PageTopButton'
import { PageWrapper } from '~/components/PageWrapper'
import { StickyContext, Sticky, StickyMarker } from '~/components/Sticky'
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
          {children}
          <Sticky>
            <FakeContent>STICKY ACTION PANEL</FakeContent>
          </Sticky>
        </PageWrapper>
        <StickyMarker isVisibleKey="isFooterVisible">
          <PageFooter />
        </StickyMarker>
        <PageTopButton />
      </Page>
    </StickyContext>
  )
}
