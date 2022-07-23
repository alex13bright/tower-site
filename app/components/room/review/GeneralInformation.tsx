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
import { background, basicPseudoIcon, primaryDark, secondary, widthAtLeast } from '~/styles/styles'
import { LoaderData } from '~/routes/rakeback-deals/$roomPageSlug'

const Caption = styled.caption`
  background: #2e3141;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border: 1px solid #2e3141;

  height: 64px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${primaryDark};
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.2px;

  &::after {
    ${basicPseudoIcon};
  }
`

const StyledContent = styled(Content)`
  border: 1px solid #e9e9e9;
  background: #fafafa;
  padding: 20px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  &:hover {
    background: ${background};
  }
`
const NameWithIcon = createNameWithIcon('general')

const StyledNameWithIcon = styled(NameWithIcon)`
  color: ${secondary};
  font-size: 16px;
  font-weight: 400;
`

const Main = styled(Table)`
  @media screen and ${widthAtLeast.md} {
    grid-area: general;
  }

  @media screen and ${widthAtLeast.lg} {
    row-gap: 0;
    display: grid;
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
      <Caption $width="40px" $height="40px" url="/decorations/general-information.svg">
        General information
      </Caption>
      <StyledContent>
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
      </StyledContent>
    </Main>
  )
}
