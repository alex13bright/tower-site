import styled from 'styled-components'
import { FakeContent } from '~/components/styled/FakeContent'
import { Header } from '~/components/room/Header'
import { BreadCrumbs } from '~/components/BreadCrumbs'
import { widthAtLeast } from '~/styles/styles'

const Layout = styled.section`
  @media ${widthAtLeast.md} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

export const Room = () => {
  return (
    <Layout>
      <BreadCrumbs />
      <Header />
      <FakeContent height="1500px">Room review</FakeContent>
    </Layout>
  )
}
