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
import { components } from '~/cms/schema'
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

type Props = {
  className?: string
}

export const Characteristics = ({ className }: Props): ReactElement => {
  const data = useLoaderData<LoaderData>()
  const { roomType, licenseCountry, payments, devices, isCountryAccepted } = data.room
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
        <Row>
          <Name>isCountryAccepted</Name>
          <Value>{isCountryAccepted}</Value>
        </Row>
      </Content>
    </Main>
  )
}
