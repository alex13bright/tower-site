import { I18n, useLocalized } from '~/core/utils'
import { ReactElement } from 'react'
import { Device, Payment } from '~/core/types'
import { IconList } from '~/components/IconList'
import { Spoiler } from '~/components/Spoiler'
import { Table, Title, Content, Row, Name, Value } from '~/components/room/table'

type Trans = {
  title: string
  roomType: string
  license: string
  payments: string
  devices: string
  country: string
}

const i18n: I18n<Trans> = {
  en: {
    title: 'Characteristics',
    roomType: 'RoomType',
    license: 'License',
    payments: 'Payments',
    devices: 'Devices',
    country: 'Country',
  },
  ru: {
    title: '',
    roomType: '',
    license: '',
    payments: '',
    devices: '',
    country: '',
  },
  es: {
    title: '',
    roomType: '',
    license: '',
    payments: '',
    devices: '',
    country: '',
  },
}

type Props = {
  roomType: string
  license: string
  payments: Payment[]
  devices: Device[]
  country: string
}

export const Features = ({
  roomType,
  license,
  payments,
  devices,
  country,
}: Props): ReactElement => {
  const localized = useLocalized(i18n)
  return (
    <Table>
      <Title>{localized.title}</Title>
      <Content>
        <Row>
          <Name>{localized.roomType}</Name>
          <Value>{roomType}</Value>
        </Row>
        <Row>
          <Name>{localized.license}</Name>
          <Value>{license}</Value>
        </Row>
        <Row>
          <Name>{localized.payments}</Name>
          <Value>
            <Spoiler height={80}>
              <IconList urlFn={(i) => `/images/payments/${i}-white.svg`}>{payments}</IconList>
            </Spoiler>
          </Value>
        </Row>
        <Row>
          <Name>{localized.devices}</Name>
          <Value>
            <IconList urlFn={(i) => `/images/devices/${i}.svg`}>{devices}</IconList>
          </Value>
        </Row>
        <Row>
          <Name>{localized.country}</Name>
          <Value>{country}</Value>
        </Row>
      </Content>
    </Table>
  )
}
