import { ReactElement } from 'react'
import styled from 'styled-components'
import { headerBlock } from '~/components/room/styles'

const Main = styled.div`
  ${headerBlock};
`

export function NavButtons(): ReactElement {
  return <Main>NavButtons</Main>
}
