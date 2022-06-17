import { ReactElement } from 'react'
import { Device, Payment } from '~/core/types'
import { IconList } from '~/components/IconList'
import { Spoiler } from '~/components/Spoiler'
import { Table, Caption, Content, Row, Name, Value } from '~/components/room/table'

type Props = {
  data: {
    roomType: string
    license: string
    payments: Payment[]
    devices: Device[]
    country: string
  }
  className?: string
}

export const Features = ({ data, className }: Props): ReactElement => {
  const { roomType, license, payments, devices, country } = data
  return (
    <Table className={className}>
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
            <Spoiler height={80}>
              <IconList urlFn={(i) => `/images/payments/${i}-white.svg`}>{payments}</IconList>
            </Spoiler>
          </Value>
        </Row>
        <Row>
          <Name>Devices</Name>
          <Value>
            <IconList urlFn={(i) => `/images/devices/${i}.svg`}>{devices}</IconList>
          </Value>
        </Row>
        <Row>
          <Name>Country</Name>
          <Value>{country}</Value>
        </Row>
      </Content>
    </Table>
  )
}
