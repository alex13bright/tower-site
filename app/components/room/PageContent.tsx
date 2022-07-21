import { ReactElement } from 'react'
import styled from 'styled-components'
import { Toc } from '~/components/room/review/Toc'
import { HeadingLevel1 } from '~/components/room/review/HeadingLevel1'
import { PageMeta } from '~/components/room/review/PageMeta'
import { contentTopPadding, widthAtLeast } from '~/styles/styles'
import { useLoaderData } from '@remix-run/react'
import { LoaderData } from '~/routes/rakeback-deals/$roomPageSlug'
import { DynamicContent } from '~/dynamic-content/DynamicContent'
import { Screenshots } from '~/components/room/review/Screenshots'

const contentTopPaddingPx = contentTopPadding + 'px'
const Content = styled.article`
  position: relative;
  display: grid;
  row-gap: ${contentTopPaddingPx};

  @media screen and ${widthAtLeast.xm} {
    row-gap: 0;
    padding-top: ${contentTopPaddingPx};
    grid-template-areas: 'toc content';
    grid-template-columns: 200px 1fr;
    column-gap: 24px;
  }

  @media screen and ${widthAtLeast.lg} {
    padding-top: ${contentTopPaddingPx};
    grid-template-areas: 'toc content screenshots';
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

export const PageContent = ({ className }: Props): ReactElement => {
  const data = useLoaderData<LoaderData>()
  const { content, rawContent } = data.room.activePage

  return (
    <Content className={className}>
      <Toc />
      <ContentWrapper>
        <HeadingLevel1 />
        <PageMeta />
        <DynamicContent content={content} rawContent={rawContent} className={className} />
      </ContentWrapper>
      <Screenshots />
    </Content>
  )
}
