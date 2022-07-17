import styled from 'styled-components'
import { Header } from '~/components/room/header/Header'
import { BreadCrumbs } from '~/components/ui/BreadCrumbs'
import { ReactElement } from 'react'
import { Toc } from '~/components/room/review/Toc'
import { Review } from '~/components/room/review/Review'
import { contentSidePadding } from '~/components/page/pageStyles'
import { widthAtLeast } from '~/styles/styles'
import { PageMeta } from '~/components/room/review/PageMeta'
import { HeaderLevel1 } from '~/components/room/review/HeaderLevel1'

const Layout = styled.section`
  display: grid;
  ${contentSidePadding};
`

const Content = styled.article`
  display: grid;
  position: relative;

  @media screen and ${widthAtLeast.lg} {
    display: grid;
    grid-template-areas: 'toc . .';

    column-gap: 24px;
    grid-template-columns: [left-part] 200px [central-part] 1fr [right-part] 320px;
  }
`

const ContentWrapper = styled.div`
  display: grid;
`

export const Room = (): ReactElement => {
  return (
    <Layout>
      <BreadCrumbs />
      <Header />
      <Content>
        <Toc />
        <ContentWrapper>
          <HeaderLevel1 />
          <PageMeta />
          <Review />
        </ContentWrapper>
      </Content>
    </Layout>
  )
}
