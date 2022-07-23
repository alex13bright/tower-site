import { ReactElement, useState } from 'react'
import {
  Table,
  Caption,
  Content,
  Row,
  Value,
  sidePaddingSize,
  createNameWithIcon,
} from '~/components/room/header/headerStyles'
import styled from 'styled-components'
import {
  accent,
  border,
  cancelSideMargins,
  expandOnParentSides,
  secondaryDark,
  sidePaddings,
  widthAtLeast,
} from '~/styles/styles'
import { HowDoWeRate } from '~/components/room/header/HowDoWeRate'
import { useLoaderData } from '@remix-run/react'
import { darken } from '~/core/utils'
import { contentSidePaddingSizePx } from '~/components/page/pageStyles'
import { LoaderData } from '~/routes/rakeback-deals/$roomPageSlug'

const NameWithIcon = createNameWithIcon('ratings')

const RattingValue = styled(Value)`
  display: flex;
  align-items: baseline;
  color: ${accent};
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  height: 20px;
  &::after {
    content: '/5';
    color: ${secondaryDark};
    font-size: 12px;
    letter-spacing: 1px;
  }
`

const StyledCaption = styled(Caption)`
  display: flex;
  justify-content: space-between;
`

const StyledContent = styled(Content)`
  @media screen and ${widthAtLeast.xm} {
    grid-template-columns: 1fr 1fr;
    column-gap: calc(2 * ${sidePaddingSize.md});
  }
  @media screen and ${widthAtLeast.lg} {
    grid-template-columns: 1fr;
  }
`

const Title = styled.div``

const Info = styled.button`
  border-bottom: 1px solid ${darken(accent, 1)};
  font-size: 14px;
  color: ${darken(accent, 0.3)};
`

const Main = styled(Table)`
  grid-area: detailed;
  ${expandOnParentSides(contentSidePaddingSizePx)};
  padding-top: 30px;
  padding-bottom: 30px;
  background: #2c2f3c;
  border-radius: 10px;
  @media screen and ${widthAtLeast.md} {
    ${expandOnParentSides(sidePaddingSize.md)};
    padding-top: 30px;
  }
  @media screen and ${widthAtLeast.lg} {
    ${cancelSideMargins};
    ${sidePaddings(sidePaddingSize.lg)};
    margin-top: 0;
    border-top: 1px solid ${border};
  }
`

type Props = {
  className?: string
}

export const DetailedRatings = ({ className }: Props): ReactElement => {
  const data = useLoaderData<LoaderData>()
  const {
    reliability,
    bonusesPromotions,
    gameSelection,
    casualPlayers,
    softwareConvenience,
    depositsWithdrawals,
  } = data.room.ratings
  const [isVisible, setIsVisible] = useState<boolean>(false)
  return (
    <>
      <HowDoWeRate isVisible={isVisible} setIsVisible={setIsVisible} />
      <Main className={className}>
        <StyledCaption>
          <Title>Our ratings</Title>
          <Info onClick={() => setIsVisible(true)}>How do we rate?</Info>
        </StyledCaption>
        <StyledContent>
          <Row>
            <NameWithIcon kind="reliability">Reliability</NameWithIcon>
            <RattingValue>{reliability}</RattingValue>
          </Row>
          <Row>
            <NameWithIcon kind="bonusesPromotions">Bonuses and promotions</NameWithIcon>
            <RattingValue>{bonusesPromotions}</RattingValue>
          </Row>
          <Row>
            <NameWithIcon kind="gameSelection">Game selection</NameWithIcon>
            <RattingValue>{gameSelection}</RattingValue>
          </Row>
          <Row>
            <NameWithIcon kind="casualPlayers">Casual players</NameWithIcon>
            <RattingValue>{casualPlayers}</RattingValue>
          </Row>
          <Row>
            <NameWithIcon kind="softwareConvenience">Convenience of the_software</NameWithIcon>
            <RattingValue>{softwareConvenience}</RattingValue>
          </Row>
          <Row>
            <NameWithIcon kind="depositsWithdrawals">Deposits and withdrawals</NameWithIcon>
            <RattingValue>{depositsWithdrawals}</RattingValue>
          </Row>
        </StyledContent>
      </Main>
    </>
  )
}
