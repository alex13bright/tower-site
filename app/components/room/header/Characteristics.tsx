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
import { widthAtLeast } from '~/styles/styles'
import { components } from '~/core/schema'

const Main = styled(Table)`
  padding-top: 30px;
  padding-bottom: 30px;
  grid-area: characteristics;

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

export const Characteristics = ({ className }: Props): ReactElement => {
  const data = useLoaderData()
  const { license_country, accepted_countries } = data.room
  const roomType = data.room.type.translations[0].title
  const isCountryAccepted = accepted_countries.length !== 0
  const payments = data.room.payments.map((p: components['schemas']['ItemsRoomsPayments']) => {
    if (typeof p.payments_id !== 'object') throw new Error()
    return p.payments_id?.name
  })
  const devices = data.room.devices.map((p: components['schemas']['ItemsRoomsDevices']) => {
    if (typeof p.devices_id !== 'object') throw new Error()
    return p.devices_id?.name
  })
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
          <Value>{license_country}</Value>
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
          <Name>isCountryAccepted</Name>
          <Value>{isCountryAccepted}</Value>
        </Row>
      </Content>
    </Main>
  )
}
