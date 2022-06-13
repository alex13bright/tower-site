import styled from 'styled-components'
import { secondaryDark } from '~/styles/styles'

const NetworkBox = styled.div`
  border: 1px solid #343848;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 0;
  padding: 8px 10px;
  display: flex;
  gap: 8px;
  align-items: center;
`
const NetworkImage = styled.img``
const NetworkTitle = styled.span`
  color: ${secondaryDark};
  font-size: 10px;
`
export const Network = () => (
  <NetworkBox>
    <NetworkImage alt="gg-network" src="/fake/ico-gg-network.svg" width="20px" height="20px" />
    <NetworkTitle>GG Network</NetworkTitle>
  </NetworkBox>
)
