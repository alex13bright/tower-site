import styled from 'styled-components'
import { Header } from '~/components/room/header/Header'
import { BreadCrumbs } from '~/components/ui/BreadCrumbs'
import { ReactElement } from 'react'
import { Toc } from '~/components/room/review/Toc'
import { Review } from '~/components/room/review/Review'
import { contentSidePadding } from '~/components/page/pageStyles'
import { widthAtLeast } from '~/styles/styles'
import { FakeContent } from '~/components/styled/FakeContent'
import { PageMeta } from '~/components/room/review/PageMeta'

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
    grid-template-columns: [left-part] minmax(184px, 2fr) [central-part] minmax(704px, 7fr) [right-part] minmax(
        288px,
        3fr
      );
  }

  @media screen and ${widthAtLeast.xl} {
    column-gap: 56px;
    grid-template-columns: [left-part] auto [central-part] 742px [right-part] 326px;
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
        <ContentWrapper id="content">
          {/*<ReviewTitle1>GG Poker review</ReviewTitle1>*/}
          {/*<PageMeta />*/}
          <Review />
        </ContentWrapper>
      </Content>
      <FakeContent height="1000px">FC</FakeContent>
    </Layout>
  )
}
