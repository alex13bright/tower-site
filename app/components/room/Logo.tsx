import styled from 'styled-components'
import { ReactElement } from 'react'
import { headerBlock } from '~/components/room/styles'

const Image = styled.img`
  place-self: center;
  margin: 30px 0;
  ${headerBlock};
  grid-area: logo;
  height: 60px;
  width: auto;
`
type Props = {
  className?: string
  title: string
  logo: string
}

export const Logo = ({ className, title, logo }: Props): ReactElement => {
  return <Image className={className} alt={`${title}-logo`} src={logo} />
}
