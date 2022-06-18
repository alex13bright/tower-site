import { ReactElement } from 'react'
import { IconList } from '~/components/IconList'
import { Spoiler } from '~/components/Spoiler'
import { Table, Caption, Content, Row, Name, Value } from '~/components/room/roomStyles'
import styled from 'styled-components'
import { headerBlock } from '~/components/room/roomStyles'
import { useLoaderData } from '@remix-run/react'
import { LoaderData } from '~/routes/rakeback-deals/$roomId'

const Main = styled(Table)`
  padding-top: 30px;
  padding-bottom: 30px;
  ${headerBlock};
  grid-area: features;
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
            <Spoiler height={20}>
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
    </Main>
  )
}
