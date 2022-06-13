import styled from 'styled-components'
import { secondaryDark } from '~/styles/styles'

const Main = styled.div`
  border: 1px solid #343848;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 0;
  padding: 8px 10px;
  display: flex;
  gap: 8px;
  align-items: center;
`
const Image = styled.img``
const Title = styled.span`
  color: ${secondaryDark};
  font-size: 10px;
`
export const Network = () => (
  <Main>
    <Image alt="gg-network" src="/fake/ico-gg-network.svg" width="20px" height="20px" />
    <Title>GG Network</Title>
  </Main>
)
