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
import { LoaderData } from '~/routes/rakeback-deals/$roomPageSlug'

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

const Accepted = styled.span`
  color: red;
`
const NotAccepted = styled.span`
  color: #29cdb5;
`

type Props = {
  className?: string
}

export const Characteristics = ({ className }: Props): ReactElement => {
  const data = useLoaderData<LoaderData>()
  const { country, room } = data
  const { roomType, licenseCountry, payments, devices, isCountryAccepted } = room
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
          <Value>{licenseCountry}</Value>
        </Row>
        <Row>
          <Name>Payments</Name>
          <Value>
            <HeaderValuesSpoiler height={20}>
              <IconList list={payments} urlFn={(name) => `/images/payments/${name}-white.svg`} />
            </HeaderValuesSpoiler>
          </Value>
        </Row>
        <Row>
          <Name>Devices</Name>
          <Value>
            <IconList list={devices} urlFn={(name) => `/images/devices/${name}.svg`} />
          </Value>
        </Row>
        <div>
          {isCountryAccepted ? (
            <Accepted>Woo-hoo! Players from {country} are accepted!</Accepted>
          ) : (
            <NotAccepted>Players from {country} are not accepted</NotAccepted>
          )}
        </div>
      </Content>
    </Main>
  )
}
