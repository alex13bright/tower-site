import styled from 'styled-components'
import { Header } from '~/components/room/header/Header'
import { BreadCrumbs } from '~/components/ui/BreadCrumbs'
import { widthAtLeast } from '~/styles/styles'
import { ReactElement } from 'react'
import { Toc } from '~/components/room/review/Toc'
import { PageMeta } from '~/components/common/pageMetas'

const Layout = styled.section`
  @media screen and ${widthAtLeast.md} {
    padding: 24px;
  }
`

const Content = styled.article`
  position: relative;
`

export const Room = (): ReactElement => {
  return (
    <Layout>
      <BreadCrumbs />
      <Header />
      <Content>
        <Toc />
        <PageMeta />
      </Content>
    </Layout>
  )
}
