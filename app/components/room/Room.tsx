import styled from 'styled-components'
import { Header } from '~/components/room/header/Header'
import { BreadCrumbs } from '~/components/ui/BreadCrumbs'
import { ReactElement } from 'react'
import { Toc } from '~/components/room/review/Toc'
import { Review } from '~/components/room/review/Review'

const Layout = styled.section`
  padding: 20px;
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
        <Review />
      </Content>
    </Layout>
  )
}
