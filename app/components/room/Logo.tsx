import styled from 'styled-components'
import { ReactElement } from 'react'
import { headerBlock } from '~/components/room/roomStyles'
import { widthAtLeast } from '~/styles/styles'

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
  title: string
  logo: string
}

export const Logo = ({ className, title, logo }: Props): ReactElement => {
  return <Image className={className} alt={`${title}-logo`} src={logo} />
}
