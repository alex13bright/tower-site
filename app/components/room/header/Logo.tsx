import styled from 'styled-components'
import { ReactElement } from 'react'
import { headerBlock } from '~/components/room/header/headerStyles'
import { widthAtLeast } from '~/styles/styles'
import { useLoaderData } from '@remix-run/react'
import { LoaderData } from '~/routes/rakeback-deals/$roomId'

const Image = styled.img`
  place-self: center;
  margin: 15px 0;
  ${headerBlock};
  grid-area: logo;
  height: 60px;
  width: auto;

  @media ${widthAtLeast.md} {
    height: 60px;
    margin: 10px;
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