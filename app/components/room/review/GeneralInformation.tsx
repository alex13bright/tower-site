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
  createNameWithIcon,
} from '~/components/room/header/headerStyles'
import styled from 'styled-components'
import { useLoaderData } from '@remix-run/react'
import { widthAtLeast } from '~/styles/styles'
import { LoaderData } from '~/routes/rakeback-deals/$roomPageSlug'

const NameWithIcon = createNameWithIcon('icons')

const Main = styled(Table)`
  padding-top: 30px;
  padding-bottom: 30px;
  grid-area: general-information;

  @media screen and ${widthAtLeast.md} {
    padding-right: ${sidePaddingSize.md};
  }

  @media screen and ${widthAtLeast.lg} {
    padding-right: ${sidePaddingSize.lg};
  }
`
const IsCountryAccepted = styled.tr`
  padding-top: 30px;
`

const Accepted = styled.td`
  color: #29cdb5;
`
const NotAccepted = styled.td`
  color: #ee3c4b;
`

type Props = {
  className?: string
}

export const GeneralInformation = ({ className }: Props): ReactElement => {
  const data = useLoaderData<LoaderData>()
  const extraData = {
    foundedIn: '2007',
    RNGCertificate: 'bmmTestlabs',
    trafficAtPeakHours: '100000',
    trackers: false,
    minMaxDeposit: '10–10000$',
    accountCurrencies: ['usd'],
    games: ['mtt', 'fast', 'spins', 'nlh', 'plo', 'aof', 'cash', '6+', 'plo5'],
  }
  Object.assign(data.room, extraData)
  const {
    foundedIn,
    network,
    licenseCountry,
    RNGCertificate,
    trafficAtPeakHours,
    trackers,
    minMaxDeposit,
    accountCurrencies,
    games,
  } = data.room
  return (
    <Main className={className}>
      <Caption>Characteristics</Caption>
      <Content>
        <Row>
          <NameWithIcon kind="foundedIn">Founded in</NameWithIcon>
          <Value>{foundedIn}</Value>
        </Row>

        <Row>
          <NameWithIcon kind="foundedIn">Founded in</NameWithIcon>
          <Value>
            <HeaderValuesSpoiler height={20}>
              <IconList list={games} folder="" />
            </HeaderValuesSpoiler>
          </Value>
        </Row>
        <Row>
          <Name>Devices</Name>
          <Value>
            <IconList list={devices} urlFn={(name) => `/images/devices/${name}.svg`} />
          </Value>
        </Row>
        <IsCountryAccepted>
          {isCountryAccepted ? (
            <Accepted>Woo-hoo! Players from {country} are accepted!</Accepted>
          ) : (
            <NotAccepted>Players from {country} are not accepted</NotAccepted>
          )}
        </IsCountryAccepted>
      </Content>
    </Main>
  )
}
