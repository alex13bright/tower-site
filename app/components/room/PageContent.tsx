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
import { GeneralInformation } from '~/components/room/review/GeneralInformation'
import { Support } from '~/components/room/review/Support'
import { News } from '~/components/room/review/News'
import { pageContentColumnsGap } from '~/components/common/styles'

const InformationSpan = styled.div`
  display: contents;

  @media screen and ${widthAtLeast.md} {
    grid-area: information;
    display: grid;
    align-items: start;
    grid-template-areas: 'general support';
    grid-template-columns: repeat(2, 1fr);
    gap: ${pageContentColumnsGap};
  }

  @media screen and ${widthAtLeast.lg} {
    display: contents;
  }
`

const Content = styled.div`
  display: grid;
  grid-area: content;
`

const contentTopPaddingPx = contentTopPadding + 'px'
const Main = styled.article`
  position: relative;
  display: grid;
  grid-template-areas:
    'toc'
    'content'
    'general'
    'support'
    'news';
  align-items: start;
  row-gap: ${contentTopPaddingPx};

  @media screen and ${widthAtLeast.md} {
    grid-template-areas:
      'toc'
      'content'
      'information'
      'news';
  }

  @media screen and ${widthAtLeast.xm} {
    row-gap: 0;
    padding-top: ${contentTopPaddingPx};
    grid-template-areas:
      'toc content'
      'information information'
      'news news';
    grid-template-columns: 200px 1fr;
    column-gap: 24px;
  }

  @media screen and ${widthAtLeast.lg} {
    padding-top: ${contentTopPaddingPx};
    grid-template-areas:
      'toc content screenshots'
      'toc content general'
      'toc content support'
      'toc content news';
    grid-template-columns: 200px 1fr 320px;
  }
`

type Props = {
  className?: string
}

export const PageContent = ({ className }: Props): ReactElement => {
  const data = useLoaderData<LoaderData>()
  const { content, rawContent } = data.room.activePage

  return (
    <Main className={className}>
      <Toc />
      <Content>
        <HeadingLevel1 />
        <PageMeta />
        <DynamicContent content={content} rawContent={rawContent} className={className} />
      </Content>
      <Screenshots />
      <InformationSpan>
        <GeneralInformation />
        <Support />
      </InformationSpan>
      <News />
    </Main>
  )
}
