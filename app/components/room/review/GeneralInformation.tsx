import { ReactElement } from 'react'
import { IconList } from '~/components/ui/IconList'
import {
  Table,
  Content,
  Row,
  Value,
  createNameWithIcon,
} from '~/components/room/header/headerStyles'
import styled from 'styled-components'
import { useLoaderData } from '@remix-run/react'
import { primaryDark, secondary, widthAtLeast } from '~/styles/styles'
import { LoaderData } from '~/routes/rakeback-deals/$roomPageSlug'

export const Caption = styled.caption`
  background: #2e3141;
  border: 1px solid #2e3141;
  color: ${primaryDark};
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.2px;
  padding: 20px 24px;

  &::after {
    content: '';
  }
`

const NameWithIcon = createNameWithIcon('general')

const StyledNameWithIcon = styled(NameWithIcon)`
  color: ${secondary};
  font-size: 16px;
`
const Main = styled(Table)`
  display: none;

  @media screen and ${widthAtLeast.lg} {
    display: grid;
    grid-area: general-information;
  }
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
  } = { ...data.room, ...extraData }
  return (
    <Main className={className}>
      <Caption>Characteristics</Caption>
      <Content>
        <Row>
          <StyledNameWithIcon kind="founded-in">Founded in</StyledNameWithIcon>
          <Value>{foundedIn}</Value>
        </Row>
        <Row>
          <StyledNameWithIcon kind="games">Games</StyledNameWithIcon>
          <Value>
            <IconList list={games} folder="games/white" listGap="4px" />
          </Value>
        </Row>
      </Content>
    </Main>
  )
}
