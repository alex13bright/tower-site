import { ReactElement } from 'react'
import { Row, Value } from '~/components/room/header/headerStyles'
import styled from 'styled-components'
import { useLoaderData } from '@remix-run/react'
import { LoaderData } from '~/routes/rakeback-deals/$roomPageSlug'
import { IconList } from '~/components/ui/IconList'
import {
  Available,
  Caption,
  Main,
  StyledContent,
  StyledNameWithIcon,
} from '~/components/common/styles'

const StyledMain = styled(Main)`
  grid-area: general;
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
    trackers: true,
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
    <StyledMain className={className}>
      <Caption $width="40px" $height="40px" url="/decorations/general-information.svg">
        General information
      </Caption>
      <StyledContent>
        <Row>
          <StyledNameWithIcon kind="founded-in">Founded in</StyledNameWithIcon>
          <Value>{foundedIn}</Value>
        </Row>
        <Row>
          <StyledNameWithIcon kind="network">Network</StyledNameWithIcon>
          <Value>{network.title}</Value>
        </Row>
        <Row>
          <StyledNameWithIcon kind="license-country">License country</StyledNameWithIcon>
          <Value>{licenseCountry}</Value>
        </Row>
        <Row>
          <StyledNameWithIcon kind="rng-certificate">RNG certificate</StyledNameWithIcon>
          <Value>{RNGCertificate}</Value>
        </Row>
        <Row>
          <StyledNameWithIcon kind="traffic-at-peak-hours">trafficAtPeakHours</StyledNameWithIcon>
          <Value>{trafficAtPeakHours}</Value>
        </Row>
        <Row>
          <StyledNameWithIcon kind="trackers">Trackers</StyledNameWithIcon>
          <Value>
            <Available isAvailable={trackers} />
          </Value>
        </Row>
        <Row>
          <StyledNameWithIcon kind="min-max-deposit">Min/Max deposit</StyledNameWithIcon>
          <Value>{minMaxDeposit}</Value>
        </Row>
        <Row>
          <StyledNameWithIcon kind="currencies">Account currencies</StyledNameWithIcon>
          <Value>
            <IconList list={accountCurrencies} folder="currencies" listGap="4px" />
          </Value>
        </Row>
        <Row>
          <StyledNameWithIcon kind="games">Games</StyledNameWithIcon>
          <Value>
            <IconList list={games} folder="games/white" listGap="4px" />
          </Value>
        </Row>
      </StyledContent>
    </StyledMain>
  )
}
