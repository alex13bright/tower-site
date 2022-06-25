import { ReactElement } from 'react'
import styled from 'styled-components'
import { proximaNovaSb, secondary } from '~/styles/styles'
import { LoaderData } from '~/routes/rakeback-deals/$roomId'
import { useLoaderData } from '@remix-run/react'

const Title = styled.div`
    grid-area: title;
    color: ${secondary};
    font-size: 12px;
    opacity: 0.5;
  }
`
const Value = styled.div`
  grid-area: value;
`

const PageMetaItem = styled.span<{ kind: string }>`
  display: grid;
  grid-template-areas: 'icon title' 'value value';
  grid-template-columns: 12px auto;
  grid-template-rows: 17px auto;
  gap: 4px;
  place-items: center start;

  color: ${secondary};
  font-family: ${proximaNovaSb};
  letter-spacing: -0.2px;
  font-size: 12px;
  opacity: 0.8;

  &::before {
    grid-area: icon;
    content: '';
    width: 12px;
    height: 12px;
    background-image: url('/images/page-meta/${({ kind }) => kind}.svg');
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.5;
  }
`

const Main = styled.div`
  display: flex;
  column-gap: 16px;
  margin-bottom: 32px;
`

type Props = {
  className?: string
}
export const PageMeta = ({ className }: Props): ReactElement => {
  const data: LoaderData = useLoaderData()
  const { pageMeta } = data.room
  return (
    <Main className={className}>
      <PageMetaItem kind="author">
        <Title>Author</Title>
        <Value>{pageMeta.author} sdf sdf sdfdsfs dfd ssdf sdf </Value>
      </PageMetaItem>
      <PageMetaItem kind="created">
        <Title>Created</Title>
        <Value>{pageMeta.created}</Value>
      </PageMetaItem>
      <PageMetaItem kind="updated">
        <Title>Updated</Title>
        <Value>{pageMeta.updated}</Value>
      </PageMetaItem>
    </Main>
  )
}
