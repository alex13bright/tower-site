import { ReactElement } from 'react'
import { H1 } from '~/dynamic-content/components/components'
import { useLoaderData } from '@remix-run/react'
import { LoaderData } from '~/routes/rakeback-deals/$roomPageSlug'

type Props = {
  className?: string
}

export const HeaderLevel1 = ({ className }: Props): ReactElement => {
  const data = useLoaderData<LoaderData>()
  const { pages, activePage } = data.room
  const { h1 } = pages[activePage]
  return <H1 className={className}>{h1}</H1>
}
