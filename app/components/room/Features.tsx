import { I18n, useLocalized } from '~/core/utils'
import { ReactElement } from 'react'
import styled from 'styled-components'
import { Device, Payment } from '~/core/types'
import { secondaryDark } from '~/styles/styles'
import { IconList } from '~/components/IconList'
import { Spoiler } from '~/components/Spoiler'

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

const Name = styled.td`
  grid-area: name;
  color: #e5e5e5;
  display: flex;
  font-size: 16px;
  line-height: 20px;
`
const Value = styled.td`
  grid-area: value;
  font-family: 'Proxima Nova Sb';
  font-size: 16px;
  line-height: 20px;
`

const Row = styled.tr`
  display: grid;
  align-items: center;
  column-gap: 10px;
  grid-template-areas: 'name line value';
  grid-template-columns: auto minmax(30px, 1fr) auto;
  &::after {
    grid-area: line;
    background-image: linear-gradient(90deg, #555 40%, hsla(0, 0%, 100%, 0) 0);
    background-position: 50%;
    background-repeat: repeat-x;
    background-size: 3px 1px;
    height: 1px;
    content: '';
    align-self: center;
  }
`

const Table = styled.tbody`
  display: grid;
  row-gap: 16px;
  align-items: center;
`

const Title = styled.caption`
  display: block;
  color: ${secondaryDark};
  text-align: start;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 20px;
  text-transform: uppercase;
`

const Main = styled.table`
  grid-area: features;
  display: grid;
  row-gap: 16px;
`

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
    <Main>
      <Title>{localized.title}</Title>
      <Table>
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
            <Spoiler height="20px">
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
      </Table>
    </Main>
  )
}
