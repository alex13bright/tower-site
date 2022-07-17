import { MutableRefObject, ReactElement, useRef, useState } from 'react'
import styled from 'styled-components'
import { Toc } from '~/components/room/review/Toc'
import { HeaderLevel1 } from '~/components/room/review/HeaderLevel1'
import { PageMeta } from '~/components/room/review/PageMeta'
import { contentTopPadding, widthAtLeast } from '~/styles/styles'
import { useLoaderData } from '@remix-run/react'
import { LoaderData } from '~/routes/rakeback-deals/$roomPageSlug'
import { DynamicContent } from '~/dynamic-content/DynamicContent'
import { TocItemType, TocType } from '~/core/types'

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
export type TocItemWihRef = TocItemType & {
  ref?: MutableRefObject<HTMLHeadingElement>
}
export type TocWihRef = TocItemWihRef[]

export const PageContent = ({ className }: Props): ReactElement => {
  const data = useLoaderData<LoaderData>()
  useRef()
  const { content, rawContent, toc } = data.room.activePage
  const [tocWihRef, setTocWihRef] = useState<TocWihRef>(toc)
  return (
    <Content className={className}>
      <Toc toc={tocWihRef} />
      <ContentWrapper>
        <HeaderLevel1 />
        <PageMeta />
        <DynamicContent content={content} rawContent={rawContent} className={className} />
      </ContentWrapper>
    </Content>
  )
}
