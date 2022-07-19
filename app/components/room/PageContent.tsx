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

export type ScrollHandlersMap = Record<string, () => void>

type ScrollIndexHandler = (id: string, isPast: boolean) => void
type TocContextType = {
  scrollHandlersMap: ScrollHandlersMap
  setScrollHandlersMap: Dispatch<SetStateAction<ScrollHandlersMap>>
  scrolledIndex: number
  scrollIndexHandler: ScrollIndexHandler
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
  const [scrollHandlersMap, setScrollHandlersMap] = useState<ScrollHandlersMap>({})
  const [scrolledIndex, setScrolledIndex] = useState(-1)
  const scrollIndexHandler = useCallback<ScrollIndexHandler>(
    (id, isScrolled) => {
      const currentIndex = toc.findIndex(({ id: tocId }) => id === tocId)
      if (currentIndex === -1) throw new Error('id of h2 is not in the toc')
      if (!isScrolled && currentIndex <= scrolledIndex) {
        setScrolledIndex(currentIndex - 1)
      } else if (isScrolled && currentIndex > scrolledIndex) {
        setScrolledIndex(currentIndex)
      }
    },
    [scrolledIndex, toc]
  )
  const memoized = useMemo(
    () => ({
      scrolledIndex,
      scrollIndexHandler,
      scrollHandlersMap,
      setScrollHandlersMap,
    }),
    [scrollIndexHandler, scrolledIndex, scrollHandlersMap]
  )

  return (
    <Content className={className}>
      <TocContext.Provider value={memoized}>
        <Toc />
        <ContentWrapper>
          <HeaderLevel1 />
          <PageMeta />
          <DynamicContent content={content} rawContent={rawContent} className={className} />
        </ContentWrapper>
      </TocContext.Provider>
    </Content>
  )
}
