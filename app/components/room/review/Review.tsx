import { ReactElement } from 'react'
import styled from 'styled-components'
import { useLoaderData } from '@remix-run/react'

const Main = styled.div``

type Props = {
  className?: string
}
export const Review = ({ className }: Props): ReactElement => {
  const data = useLoaderData()
  const { pageType, room } = data
  const [{ pages }] = room.translations
  const [page] = pages.filter((p: any) => {
    return p.type.name === pageType
  })
  const { content } = page
  return <Main className={className} dangerouslySetInnerHTML={{ __html: content }} />
}
