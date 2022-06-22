import { ReactElement } from 'react'
import styled from 'styled-components'
import { PageMeta } from '~/components/room/review/PageMeta'
import { Level1Header } from '~/components/room/review/Level1Header'

const Main = styled.div``

type Props = {
  className?: string
}
export const Review = ({ className }: Props): ReactElement => {
  return (
    <Main className={className}>
      <Level1Header>GG Poker review</Level1Header>
      <PageMeta />
    </Main>
  )
}
