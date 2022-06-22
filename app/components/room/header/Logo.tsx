import styled from 'styled-components'
import { ReactElement } from 'react'
import { widthAtLeast } from '~/styles/styles'
import { useLoaderData } from '@remix-run/react'
import { LoaderData } from '~/routes/rakeback-deals/$roomId'

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
  const data: LoaderData = useLoaderData()
  const { title, logo } = data.room
  return <Image className={className} alt={`${title}-logo`} src={logo} />
}
