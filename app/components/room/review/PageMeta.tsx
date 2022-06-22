import { ReactElement } from 'react'
import styled from 'styled-components'
import { proximaNovaSb, secondary, widthAtLeast } from '~/styles/styles'
import { LoaderData } from '~/routes/rakeback-deals/$roomId'
import { useLoaderData } from '@remix-run/react'

const Title = styled.div`
    color: ${secondary};
    font-size: 12px;
    opacity: 0.5;
  }
`
const Value = styled.div``

const Span = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: start;

  @media screen and ${widthAtLeast.lg} {
    flex-direction: row;
  }
`

const PageMetaItem = styled.span<{ kind: string }>`
  display: flex;
  column-gap: 8px;

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
        <Span>
          <Title>Author</Title>
          <Value>{pageMeta.author}</Value>
        </Span>
      </PageMetaItem>
      <PageMetaItem kind="created">
        <Span>
          <Title>Created</Title>
          <Value>{pageMeta.created}</Value>
        </Span>
      </PageMetaItem>
      <PageMetaItem kind="updated">
        <Span>
          <Title>Updated</Title>
          <Value>{pageMeta.updated}</Value>
        </Span>
      </PageMetaItem>
    </Main>
  )
}
