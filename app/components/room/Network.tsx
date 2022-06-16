import styled from 'styled-components'
import { secondaryDark } from '~/styles/styles'
import { ReactElement } from 'react'

const Main = styled.div`
  border: 1px solid #343848;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 0;
  padding: 8px 10px;
  display: flex;
  gap: 8px;
  align-items: center;
  grid-area: network;
`

const Image = styled.img``

const Title = styled.span`
  color: ${secondaryDark};
  font-size: 14px;
`

type Props = {
  className?: string
  title: string
  logo: string
}

export const Network = ({ className, title, logo }: Props): ReactElement => {
  return (
    <Main className={className}>
      <Image alt={`${title.toLowerCase()}-logo`} src={logo} width="20px" height="20px" />
      <Title>{title}</Title>
    </Main>
  )
}
