import { ReactElement } from 'react'
import styled from 'styled-components'
import { proximaNovaSb, secondary } from '~/styles/styles'
import { LoaderData } from '~/routes/rakeback-deals/$roomId'
import { useLoaderData } from '@remix-run/react'

const PageMetaItem = styled.div<{ kind: string }>`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 8px;

  color: ${secondary};
  font-family: ${proximaNovaSb};
  letter-spacing: -0.2px;
  opacity: 0.8;
  white-space: nowrap;

  &::before {
    background-image: url('/images/page-meta/${({ kind }) => kind}');
    opacity: 0.5;
    width: 12px;
    height: 12px;
  }
`

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 30px;
`

type Props = {
  className?: string
}
export const PageMeta = ({ className }: Props): ReactElement => {
  const data: LoaderData = useLoaderData()
  const { pageMeta } = data.room
  return (
    <Main className={className}>
      <PageMetaItem kind="author">{pageMeta.author}</PageMetaItem>
      <PageMetaItem kind="created">{pageMeta.created}</PageMetaItem>
      <PageMetaItem kind="updated">{pageMeta.updated}</PageMetaItem>
    </Main>
  )
}
