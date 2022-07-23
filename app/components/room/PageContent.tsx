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
import { FakeContent } from '~/components/styled/FakeContent'
import { GeneralInformation } from '~/components/room/review/GeneralInformation'
import { Support } from '~/components/room/review/Support'

const contentTopPaddingPx = contentTopPadding + 'px'
const Content = styled.article`
  position: relative;
  display: grid;
  align-items: start;
  row-gap: ${contentTopPaddingPx};

  @media screen and ${widthAtLeast.md} {
    grid-template-areas:
      'toc toc'
      'content content'
      'general support';
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and ${widthAtLeast.xm} {
    row-gap: 0;
    padding-top: ${contentTopPaddingPx};
    grid-template-areas:
      'toc content content content'
      'general general support support';
    grid-template-columns: 200px repeat(2, 1fr) 200px;
    column-gap: 24px;
  }

  @media screen and ${widthAtLeast.lg} {
    padding-top: ${contentTopPaddingPx};
    grid-template-areas:
      'toc content screenshots'
      'toc content general';
    grid-template-columns: 200px 1fr 320px;
  }
`

const ContentWrapper = styled.div`
  display: grid;

  @media screen and ${widthAtLeast.md} {
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
        <FakeContent height="500px">FC</FakeContent>
      </ContentWrapper>
      <Screenshots />
      <GeneralInformation />
      <Support />
    </Content>
  )
}
