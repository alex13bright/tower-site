import { ReactElement, useState } from 'react'
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
import {
  accent,
  border,
  cancelSideMargins,
  expandOnParentSides,
  primaryDark,
  proximaNovaSb,
  secondaryDark,
  sidePaddings,
  widthAtLeast,
} from '~/styles/styles'
import { HowDoWeRate } from '~/components/room/header/HowDoWeRate'
import { LoaderData } from '~/routes/rakeback-deals/$roomId'
import { useLoaderData } from '@remix-run/react'
import { darken } from '~/core/utils'
import { contentSidePaddingSize } from '~/components/page/pageStyles'

const StyledName = styled(Name)<{ kind: string }>`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 20px;
  color: ${primaryDark};
  font-family: ${proximaNovaSb};
  &::before {
    width: 20px;
    height: 20px;
    content: '';
    background-image: url('/images/ratings/${({ kind }) => kind}.svg');
    background-repeat: no-repeat;
  }
`

const StyledValue = styled(Value)`
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
  @media screen and ${widthAtLeast.md} {
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
  ${expandOnParentSides(contentSidePaddingSize.xs)};
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
  const data: LoaderData = useLoaderData()
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
            <StyledName kind="reliability">Reliability</StyledName>
            <StyledValue>{reliability}</StyledValue>
          </Row>
          <Row>
            <StyledName kind="bonusesPromotions">Bonuses and promotions</StyledName>
            <StyledValue>{bonusesPromotions}</StyledValue>
          </Row>
          <Row>
            <StyledName kind="gameSelection">Game selection</StyledName>
            <StyledValue>{gameSelection}</StyledValue>
          </Row>
          <Row>
            <StyledName kind="casualPlayers">Casual players</StyledName>
            <StyledValue>{casualPlayers}</StyledValue>
          </Row>
          <Row>
            <StyledName kind="softwareConvenience">Convenience of the_software</StyledName>
            <StyledValue>{softwareConvenience}</StyledValue>
          </Row>
          <Row>
            <StyledName kind="depositsWithdrawals">Deposits and withdrawals</StyledName>
            <StyledValue>{depositsWithdrawals}</StyledValue>
          </Row>
        </StyledContent>
      </Main>
    </>
  )
}
