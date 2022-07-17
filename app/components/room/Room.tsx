import styled from 'styled-components'
import { Header } from '~/components/room/header/Header'
import { BreadCrumbs } from '~/components/ui/BreadCrumbs'
import { ReactElement } from 'react'
import { contentSidePadding } from '~/components/page/pageStyles'
import { PageContent } from '~/components/room/PageContent'

const Main = styled.section`
  display: grid;
  ${contentSidePadding};
`

export const Room = (): ReactElement => {
  return (
    <Main>
      <BreadCrumbs />
      <Header />
      <PageContent />
    </Main>
  )
}
