import { ReactElement } from 'react'
import { IconList } from '~/components/ui/IconList'
import { HeaderValuesSpoiler } from '~/components/room/header/HeaderValuesSpoiler'
import {
  Table,
  Caption,
  Content,
  Row,
  Name,
  Value,
  sidePaddingSize,
} from '~/components/room/header/headerStyles'
import styled from 'styled-components'
import { useLoaderData } from '@remix-run/react'
import { LoaderData } from '~/routes/rakeback-deals/$roomId'
import { widthAtLeast } from '~/styles/styles'

const Main = styled(Table)`
  padding-top: 30px;
  padding-bottom: 30px;
  grid-area: features;

  @media screen and ${widthAtLeast.md} {
    padding-right: ${sidePaddingSize.md};
  }

  @media screen and ${widthAtLeast.lg} {
    padding-right: ${sidePaddingSize.lg};
  }
`

type Props = {
  className?: string
}

export const Features = ({ className }: Props): ReactElement => {
  const data: LoaderData = useLoaderData()
  const { roomType, license, payments, devices, country } = data.room
  return (
    <Main className={className}>
      <Caption>Characteristics</Caption>
      <Content>
        <Row>
          <Name>Room type</Name>
          <Value>{roomType}</Value>
        </Row>
        <Row>
          <Name>License</Name>
          <Value>{license}</Value>
        </Row>
        <Row>
          <Name>Payments</Name>
          <Value>
            <HeaderValuesSpoiler height={20}>
              <IconList list={payments} urlFn={(i) => `/images/payments/${i}-white.svg`} />
            </HeaderValuesSpoiler>
          </Value>
        </Row>
        <Row>
          <Name>Devices</Name>
          <Value>
            <IconList list={devices} urlFn={(i) => `/images/devices/${i}.svg`} />
          </Value>
        </Row>
        <Row>
          <Name>Country</Name>
          <Value>{country}</Value>
        </Row>
      </Content>
    </Main>
  )
}
