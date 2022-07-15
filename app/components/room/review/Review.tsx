import { ReactElement } from 'react'
import styled from 'styled-components'
import { useLoaderData } from '@remix-run/react'
import { LoaderData } from '~/routes/rakeback-deals/$roomPageSlug'

const Main = styled.div`
  display: grid;
`

type Props = {
  className?: string
}
export const Review = ({ className }: Props): ReactElement => {
  const data = useLoaderData<LoaderData>()
  const { pages, activePage } = data.room
  const page = pages[activePage]
  const { content } = page
  return <Main className={className} dangerouslySetInnerHTML={{ __html: content }} />
}
