import styled from 'styled-components'
import { Header } from '~/components/room/header/Header'
import { BreadCrumbs } from '~/components/ui/BreadCrumbs'
import { widthAtLeast } from '~/styles/styles'
import { ReactElement } from 'react'
import { Toc } from '~/components/room/review/Toc'
import { FakeContent } from '~/components/styled/FakeContent'

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
        <FakeContent height="1000px">Room</FakeContent>
      </Content>
    </Layout>
  )
}
