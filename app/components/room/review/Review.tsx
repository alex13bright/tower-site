import { ReactElement } from 'react'
import { useLoaderData } from '@remix-run/react'
import { LoaderData } from '~/routes/rakeback-deals/$roomPageSlug'
import { DynamicContent } from '~/components/ui/DynamicContent'
// import styled from 'styled-components'

// const Main = styled.div`
//   display: grid;
// `

type Props = {
  className?: string
}
export const Review = ({ className }: Props): ReactElement => {
  const data = useLoaderData<LoaderData>()
  const { pages, activePage } = data.room
  const page = pages[activePage]
  const { content } = page
  return <DynamicContent content={content} className={className} />
  // return <Main className={className} dangerouslySetInnerHTML={{ __html: content }} />
}
