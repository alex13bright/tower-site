import styled from 'styled-components'
import { FakeContent } from '~/components/styled/FakeContent'
import { Header } from '~/components/room/Header'
import { BreadCrumbs } from '~/components/BreadCrumbs'

const Layout = styled.section``
export const Room = () => {
  return (
    <Layout>
      <BreadCrumbs />
      <Header />
      <FakeContent height="1500px">Room review</FakeContent>
    </Layout>
  )
}
