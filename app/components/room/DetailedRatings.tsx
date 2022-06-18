import { ReactElement, useState } from 'react'
import { Table, Caption, Content, Row, Name, Value } from '~/components/room/roomStyles'
import styled from 'styled-components'
import {
  accent,
  border,
  primaryDark,
  proximaNovaSb,
  secondaryDark,
  widthAtLeast,
} from '~/styles/styles'
import chroma from 'chroma-js'
import { HowDoWeRate } from '~/components/room/HowDoWeRate'
import { headerBlock } from '~/components/room/roomStyles'
import { LoaderData } from '~/routes/rakeback-deals/$roomId'
import { useLoaderData } from '@remix-run/react'

const ReName = styled(Name)<{ kind: string }>`
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

const ReValue = styled(Value)`
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

const ReTable = styled(Table)`
  background: #2c2f3c;
  border-radius: 10px;
  padding-top: 30px;
  padding-bottom: 30px;

  ${headerBlock};
  grid-area: detailed;
  @media ${widthAtLeast.md} {
    margin-top: 30px;
  }
  @media ${widthAtLeast.md} {
    margin-top: 0;
    border-top: 1px solid ${border};
  }
`

const ReCaption = styled(Caption)`
  display: flex;
  justify-content: space-between;
`

const ReContent = styled(Content)`
  @media ${widthAtLeast.md} {
    grid-template-columns: 1fr 1fr;
    column-gap: 60px;
  }
  @media ${widthAtLeast.lg} {
    grid-template-columns: 1fr;
  }
`

const Title = styled.div``

const Info = styled.button`
  border-bottom: 1px solid ${chroma(accent).darken(0.5).hex()};
  font-size: 12px;
  color: ${chroma(accent).darken(0.5).hex()};
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
      <ReTable className={className}>
        <ReCaption>
          <Title>Our ratings</Title>
          <Info onClick={() => setIsVisible(true)}>How do we rate?</Info>
        </ReCaption>
        <ReContent>
          <Row>
            <ReName kind="reliability">Reliability</ReName>
            <ReValue>{reliability}</ReValue>
          </Row>
          <Row>
            <ReName kind="bonusesPromotions">Bonuses and promotions</ReName>
            <ReValue>{bonusesPromotions}</ReValue>
          </Row>
          <Row>
            <ReName kind="gameSelection">Game selection</ReName>
            <ReValue>{gameSelection}</ReValue>
          </Row>
          <Row>
            <ReName kind="casualPlayers">Casual players</ReName>
            <ReValue>{casualPlayers}</ReValue>
          </Row>
          <Row>
            <ReName kind="softwareConvenience">Convenience of the_software</ReName>
            <ReValue>{softwareConvenience}</ReValue>
          </Row>
          <Row>
            <ReName kind="depositsWithdrawals">Deposits and withdrawals</ReName>
            <ReValue>{depositsWithdrawals}</ReValue>
          </Row>
        </ReContent>
      </ReTable>
    </>
  )
}
