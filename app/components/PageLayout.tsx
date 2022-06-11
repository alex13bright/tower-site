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

const Box = styled.div`
  place-items: center;
  color: yellowgreen;
  background-color: black;
  border: 3px solid yellowgreen;
`

export const PageLayout = ({ children }: Props): ReactElement => {
  return (
    <StickyContext>
      <Page>
        <PageHeader />
        <PageWrapper as="main">
          <FakeContent>
            <StickyMarker isVisibleKey="isMarkerVisible">
              <FakeContent height="100px">
                <Box>MAIN ACTION PANEL</Box>
              </FakeContent>
            </StickyMarker>
          </FakeContent>
          <FakeContent height="2000px">{children}</FakeContent>
          <Sticky>STICKY ACTION PANEL</Sticky>
        </PageWrapper>
        <StickyMarker isVisibleKey="isFooterVisible">
          <PageFooter />
        </StickyMarker>
        <PageTopButton />
      </Page>
    </StickyContext>
  )
}
