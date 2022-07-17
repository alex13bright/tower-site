import {
  createContext,
  Dispatch,
  ReactElement,
  RefObject,
  SetStateAction,
  useCallback,
  useContext,
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
import { fakeUse } from '~/core/utils'

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

export type TocItemWihRef = {
  ref: RefObject<HTMLHeadingElement>
}
export type TocWihRef = Record<string, TocItemWihRef>

type Handler = (id: string, isVisible: boolean) => void
type TocContextType = {
  refs: { tocWithRef: TocWihRef; setTocWithRef: Dispatch<SetStateAction<TocWihRef>> }
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
  const { content, rawContent } = data.room.activePage
  const [tocWithRef, setTocWithRef] = useState<TocWihRef>({})
  const [index, setVisibility] = useState(0)
  const handler = useCallback<Handler>((id, isVisible) => {
    console.log(id, isVisible)
    fakeUse(setVisibility)
  }, [])
  return (
    <Content className={className}>
      <TocContext.Provider
        value={{ refs: { tocWithRef, setTocWithRef }, visibility: { index, handler } }}
      >
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
