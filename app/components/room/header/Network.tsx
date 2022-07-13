import styled from 'styled-components'
import { border, secondaryDark, widthAtLeast } from '~/styles/styles'
import { ReactElement } from 'react'
import { useLoaderData } from '@remix-run/react'
import { cmsPublic } from '~/core/utils'
import { LoaderData } from '~/routes/rakeback-deals/$roomPageSlug'

const Image = styled.img``

const Title = styled.span`
  color: ${secondaryDark};
  font-size: 14px;
`

const Main = styled.a`
  grid-area: network;
  justify-self: center;
  align-self: start;
  cursor: pointer;
  border: 1px solid ${border};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 0;
  padding: 8px 10px;
  display: flex;
  gap: 8px;

  @media screen and ${widthAtLeast.md} {
    justify-self: start;
  }
`

type Props = {
  className?: string
}

export const Network = ({ className }: Props): ReactElement => {
  const data = useLoaderData<LoaderData>()
  const { url, title, logo } = data.room.network
  return (
    <Main className={className} href={url}>
      <Image src={logo.url} alt={logo.alt} title={logo.alt} width="20px" height="20px" />
      <Title>{title}</Title>
    </Main>
  )
}
