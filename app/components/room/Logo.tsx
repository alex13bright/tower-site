import styled from 'styled-components'
import { ReactElement } from 'react'
import { headerBlock } from '~/components/room/styles'

const Image = styled.img`
  place-self: center;
  ${headerBlock};
`
type Props = {
  className?: string
  title: string
  logo: string
}

export const Logo = ({ className, title, logo }: Props): ReactElement => {
  return (
    <Image className={className} alt={`${title}-logo`} src={logo} width="210px" height="60px" />
  )
}
