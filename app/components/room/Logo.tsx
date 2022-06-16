import styled from 'styled-components'
import { ReactElement } from 'react'

const Image = styled.img`
  grid-area: logo;
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
