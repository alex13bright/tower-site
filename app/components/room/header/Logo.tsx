import styled from 'styled-components'
import { ReactElement } from 'react'
import { widthAtLeast } from '~/styles/styles'
import { useLoaderData } from '@remix-run/react'
import { cmsPublic } from '~/core/utils'

const Image = styled.img`
  grid-area: logo;
  place-self: center;
  margin: 15px 0;
  height: 60px;

  @media screen and ${widthAtLeast.md} {
    justify-self: start;
  }
`

type Props = {
  className?: string
}

export const Logo = ({ className }: Props): ReactElement => {
  const data = useLoaderData()
  const { url, alt } = data.room.logo
  return <Image className={className} src={url} alt={alt} title={alt} />
}
