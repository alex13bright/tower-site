import { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'
import { PageMeta } from '~/components/common/pageMetas'

const Main = styled.div``

type Props = {
  className?: string
}
export const Review = ({ className }: Props): ReactElement => {
  return (
    <Main className={className}>
      <PageMeta />
    </Main>
  )
}
