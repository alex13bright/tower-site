import styled from 'styled-components'
import { Header } from '~/components/room/header/Header'
import { BreadCrumbs } from '~/components/ui/BreadCrumbs'
import { ReactElement } from 'react'
import { Toc } from '~/components/room/review/Toc'
import { Review } from '~/components/room/review/Review'
import { contentSidePadding } from '~/components/page/pageStyles'
import { widthAtLeast } from '~/styles/styles'

const Layout = styled.section`
  ${contentSidePadding};
`

const Content = styled.article`
  position: relative;

  @media screen and ${widthAtLeast.lg} {
    display: grid;
    grid-template-areas: 'toc . .';

    grid-column-gap: 24px;
    -moz-column-gap: 24px;
    column-gap: 24px;
    grid-template-columns: [left-part] minmax(184px, 2fr) [central-part] minmax(704px, 7fr) [right-part] minmax(
        288px,
        3fr
      );
  }
`

export const Room = (): ReactElement => {
  return (
    <Layout>
      <BreadCrumbs />
      <Header />
      <Content>
        <Toc />
        <Review />
      </Content>
    </Layout>
  )
}
