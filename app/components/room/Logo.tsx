import styled from 'styled-components'
import { ReactElement } from 'react'

const Image = styled.img`
  grid-area: logo;
`
type Props = { className?: string }
export const Logo = ({ className }: Props): ReactElement => {
  return (
    <Image
      className={className}
      alt="ggpoker-logo"
      src="/fake/ggpoker-logo.svg"
      width="210px"
      height="60px"
    />
  )
}
