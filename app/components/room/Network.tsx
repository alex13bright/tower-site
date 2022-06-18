import styled from 'styled-components'
import { border, secondaryDark, widthAtLeast } from '~/styles/styles'
import { ReactElement } from 'react'
import { useLoaderData } from '@remix-run/react'
import { LoaderData } from '~/routes/rakeback-deals/$roomId'

const Main = styled.a`
  cursor: pointer;
  border: 1px solid ${border};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 0;
  padding: 8px 10px;
  display: flex;
  gap: 8px;
  align-items: center;

  align-self: start;
  justify-self: center;
  grid-area: network;

  @media ${widthAtLeast.md} {
    place-self: start;
    margin-left: 24px;
  }
`

const Image = styled.img``

const Title = styled.span`
  color: ${secondaryDark};
  font-size: 14px;
`

type Props = {
  className?: string
}

export const Network = ({ className }: Props): ReactElement => {
  const data: LoaderData = useLoaderData()
  const { name, title, logo } = data.room.network
  return (
    <Main className={className} href={`/network/${name}`}>
      <Image alt={`${title.toLowerCase()}-logo`} src={logo} width="20px" height="20px" />
      <Title>{title}</Title>
    </Main>
  )
}
