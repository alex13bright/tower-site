import { ReactNode, ReactElement } from 'react'
import styled from 'styled-components'
import { PageHeader } from '~/components/PageHeader'
import { PageFooter } from '~/components/PageFooter'
import { OuterBox, InnerBox } from '~/components/page'

export const Page = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`

type Props = { children: ReactNode }
export const PageLayout: (props: Props) => ReactElement = ({ children }: Props) => {
  return (
    <Page>
      <PageHeader />
      <OuterBox>
        <InnerBox>{children}</InnerBox>
      </OuterBox>
      <PageFooter />
    </Page>
  )
}
