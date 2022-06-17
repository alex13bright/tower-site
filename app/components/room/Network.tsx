import styled from 'styled-components'
import { secondaryDark } from '~/styles/styles'
import { ReactElement } from 'react'
import { headerBlock } from '~/components/room/styles'

const Main = styled.a`
  cursor: pointer;
  border: 1px solid #343848;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 0;
  padding: 8px 10px;
  display: flex;
  gap: 8px;
  align-items: center;

  align-self: start;
  justify-self: center;
  ${headerBlock};
`

const Image = styled.img``

const Title = styled.span`
  color: ${secondaryDark};
  font-size: 14px;
`

type Props = {
  className?: string
  name: string
  title: string
  logo: string
}

export const Network = ({ className, name, title, logo }: Props): ReactElement => {
  return (
    <Main className={className} href={`/network/${name}`}>
      <Image alt={`${title.toLowerCase()}-logo`} src={logo} width="20px" height="20px" />
      <Title>{title}</Title>
    </Main>
  )
}
