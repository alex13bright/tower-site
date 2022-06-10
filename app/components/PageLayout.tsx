import { ReactNode, ReactElement } from 'react'

import styled from 'styled-components'
import { PageHeader } from '~/components/PageHeader'
import { PageFooter } from '~/components/PageFooter'
import { FakeContent } from '~/components/styled/FakeContent'
import { PageTopButton } from '~/components/PageTopButton'
import { PageWrapper } from '~/components/PageWrapper'

export const Page = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`
type Props = { children: ReactNode }
export const PageLayout = ({ children }: Props): ReactElement => {
  return (
    <Page>
      <PageHeader />
      <PageWrapper as="main">
        <FakeContent height={2000}>{children}</FakeContent>
      </PageWrapper>
      <PageFooter />
      <PageTopButton />
    </Page>
  )
}
