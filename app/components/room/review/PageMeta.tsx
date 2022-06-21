import { ReactElement } from 'react'
import styled from 'styled-components'
import { proximaNovaSb, secondary, widthAtLeast } from '~/styles/styles'
import { LoaderData } from '~/routes/rakeback-deals/$roomId'
import { useLoaderData } from '@remix-run/react'

const Title = styled.div``
const Value = styled.div``

const Span = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and ${widthAtLeast.lg} {
    flex-direction: row;
  }
`

const PageMetaItem = styled.span<{ kind: string }>`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 8px;
  place-items: center;

  color: ${secondary};
  font-family: ${proximaNovaSb};
  letter-spacing: -0.2px;
  font-size: 12px;
  opacity: 0.8;
  white-space: nowrap;

  &::before {
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
      <PageMetaItem kind="author">
        <Span>
          <Title>Author</Title>
          <Value>{pageMeta.author}</Value>
        </Span>
      </PageMetaItem>
      <PageMetaItem kind="created">
        <Span>
          Created
          {pageMeta.created}
        </Span>
      </PageMetaItem>
      <PageMetaItem kind="updated">
        <Span>Updated {pageMeta.updated}</Span>
      </PageMetaItem>
    </Main>
  )
}
