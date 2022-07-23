import { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'
import { fakeUse } from '~/core/utils'

const Main = styled.div``

export type FaqItemType = {
  question: ReactNode
  answer: ReactNode
}
export type FaqListType = FaqItemType[]

type Props = {
  data: FaqListType
  className?: string
}

export const FAQ = ({ data, className }: Props): ReactElement => {
  fakeUse(data)
  return <Main className={className}>faq</Main>
}
