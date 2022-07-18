import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import styled from 'styled-components'
import { Toc } from '~/components/room/review/Toc'
import { HeaderLevel1 } from '~/components/room/review/HeaderLevel1'
import { PageMeta } from '~/components/room/review/PageMeta'
import { contentTopPadding, widthAtLeast } from '~/styles/styles'
import { useLoaderData } from '@remix-run/react'
import { LoaderData } from '~/routes/rakeback-deals/$roomPageSlug'
import { DynamicContent } from '~/dynamic-content/DynamicContent'
import { FakeContent } from '~/components/styled/FakeContent'

const Content = styled.article`
  position: relative;
  display: grid;
  row-gap: ${contentTopPadding};

  @media screen and ${widthAtLeast.xm} {
    row-gap: 0;
    padding-top: ${contentTopPadding};
    grid-template-areas: 'toc content';
    grid-template-columns: 200px 1fr;
    column-gap: 24px;
  }

  @media screen and ${widthAtLeast.lg} {
    padding-top: ${contentTopPadding};
    grid-template-areas: 'toc content .';
    grid-template-columns: 200px 1fr 320px;
  }
`

const ContentWrapper = styled.div`
  display: grid;

  @media screen and ${widthAtLeast.xm} {
    grid-area: content;
  }
`

type Props = {
  className?: string
}

export type Scrolls = Record<string, { scroll: () => void }>

type Handler = (id: string, isPast: boolean) => void
type TocContextType = {
  scrollsWithSetter: { scrolls: Scrolls; setScrolls: Dispatch<SetStateAction<Scrolls>> }
  visibility: {
    index: number
    handler: Handler
  }
}

const TocContext = createContext<TocContextType | null>(null)

export const useTocContext = () => {
  const context = useContext(TocContext)
  if (context === null) throw new Error('TocWithRefContext not found')
  return context
}

export const PageContent = ({ className }: Props): ReactElement => {
  const data = useLoaderData<LoaderData>()
  const { content, rawContent, toc } = data.room.activePage
  const [scrolls, setScrolls] = useState<Scrolls>({})
  const [index, setIndex] = useState(-1)
  const handler = useCallback<Handler>(
    (id, isPast) => {
      const idIndex = toc.reduce(
        (idIndex: number | null, { id: tocId }, i) => (id === tocId ? i : idIndex),
        null
      )
      if (idIndex === null) throw new Error('id of h2 is not in the toc')
      if (!isPast && idIndex <= index) {
        setIndex(idIndex - 1)
      } else if (isPast && idIndex > index) {
        setIndex(idIndex)
      }
    },
    [index, toc]
  )
  const memoized = useMemo(() => {
    return {
      scrollsWithSetter: { scrolls, setScrolls },
      visibility: { index, handler },
    }
  }, [handler, index, scrolls])
  return (
    <Content className={className}>
      <TocContext.Provider value={memoized}>
        <Toc />
        <ContentWrapper>
          <HeaderLevel1 />
          <PageMeta />
          <FakeContent height="1000px">F1</FakeContent>
          <DynamicContent content={content} rawContent={rawContent} className={className} />
          <FakeContent height="1000px">F2</FakeContent>
        </ContentWrapper>
      </TocContext.Provider>
    </Content>
  )
}
