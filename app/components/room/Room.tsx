import styled from 'styled-components'
import { Header } from '~/components/room/header/Header'
import { BreadCrumbs } from '~/components/ui/BreadCrumbs'
import { ReactElement } from 'react'
import { Toc } from '~/components/room/review/Toc'
import { Review } from '~/components/room/review/Review'
import { contentSidePadding } from '~/components/page/pageStyles'
import { contentTopPadding, widthAtLeast } from '~/styles/styles'
import { PageMeta } from '~/components/room/review/PageMeta'
import { HeaderLevel1 } from '~/components/room/review/HeaderLevel1'

const Layout = styled.section`
  display: grid;
  ${contentSidePadding};
`

const Content = styled.article`
  position: relative;
  display: grid;
  row-gap: ${contentTopPadding};

  @media screen and ${widthAtLeast.xm} {
    row-gap: 0;
    padding-top: ${contentTopPadding};
    grid-template-areas: 'toc content';
    grid-template-columns: 200px 1fr;
    column-gap: 24px;
  }

  @media screen and ${widthAtLeast.lg} {
    padding-top: ${contentTopPadding};
    grid-template-areas: 'toc content .';
    grid-template-columns: 200px 1fr 320px;
  }
`

const ContentWrapper = styled.div`
  display: grid;

  @media screen and ${widthAtLeast.xm} {
    grid-area: content;
  }
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
