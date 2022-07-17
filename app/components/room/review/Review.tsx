import { ReactElement } from 'react'
import { useLoaderData } from '@remix-run/react'
import { LoaderData } from '~/routes/rakeback-deals/$roomPageSlug'
import { DynamicContent } from '~/dynamic-content/DynamicContent'
// import styled from 'styled-components'

// const Main = styled.div`
//   display: grid;
// `

type Props = {
  className?: string
}
export const Review = ({ className }: Props): ReactElement => {
  const data = useLoaderData<LoaderData>()
  const { content, rawContent } = data.room.activePage
  return <DynamicContent content={content} rawContent={rawContent} className={className} />
  // return <Main className={className} dangerouslySetInnerHTML={{ __html: content }} />
}
