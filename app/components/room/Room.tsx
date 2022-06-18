import styled from 'styled-components'
import { Header } from '~/components/room/Header'
import { BreadCrumbs } from '~/components/BreadCrumbs'
import { widthAtLeast } from '~/styles/styles'
import { ReactElement } from 'react'
import { Toc } from '~/components/room/Toc'

const Layout = styled.section`
  @media ${widthAtLeast.md} {
    padding: 24px;
  }
`

const Content = styled.article``

export const Room = (): ReactElement => {
  return (
    <Layout>
      <BreadCrumbs />
      <Header />
      <Content>
        <Toc />
      </Content>
    </Layout>
  )
}
