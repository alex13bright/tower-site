import { I18n, useLocalized } from '~/core/utils'
import { ReactElement, useState } from 'react'
import { Table, Title, Content, Row, Name, Value } from '~/components/room/table'
import styled from 'styled-components'
import { accent, primaryDark, proximaNovaSb, secondaryDark } from '~/styles/styles'
import chroma from 'chroma-js'
import { HowDoWeRate } from '~/components/room/HowDoWeRate'

type Trans = {
  title: string
  info: string
  reliability: string
  bonusesPromotions: string
  gameSelection: string
  casualPlayers: string
  softwareConvenience: string
  depositsWithdrawals: string
}

const i18n: I18n<Trans> = {
  en: {
    title: 'Our ratings',
    info: 'How do we rate?',
    reliability: 'Reliability',
    bonusesPromotions: 'Bonuses and promotions',
    gameSelection: 'Game selection',
    casualPlayers: 'Casual players',
    softwareConvenience: 'Convenience of the_software',
    depositsWithdrawals: 'Deposits and withdrawals',
  },
  ru: {
    title: '',
    info: 'How do we rate?',
    reliability: 'Reliability',
    bonusesPromotions: 'Bonuses and promotions',
    gameSelection: 'Game selection',
    casualPlayers: 'Casual players',
    softwareConvenience: 'Convenience of the software',
    depositsWithdrawals: 'Deposits and withdrawals',
  },
  es: {
    title: '',
    info: 'How do we rate?',
    reliability: 'Reliability',
    bonusesPromotions: 'Bonuses and promotions',
    gameSelection: 'Game selection',
    casualPlayers: 'Casual players',
    softwareConvenience: 'Convenience of the software',
    depositsWithdrawals: 'Deposits and withdrawals',
  },
}

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
  padding: 24px 0;
`

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
`
const Info = styled.button`
  border-bottom: 1px solid ${chroma(accent).darken(0.5).hex()};
  font-size: 12px;
  color: ${chroma(accent).darken(0.5).hex()};
`

type Props = {
  data: {
    reliability: number
    bonusesPromotions: number
    gameSelection: number
    casualPlayers: number
    softwareConvenience: number
    depositsWithdrawals: number
  }
  className?: string
}

export const DetailedRatings = ({ data, className }: Props): ReactElement => {
  const localized = useLocalized(i18n)
  const {
    reliability,
    bonusesPromotions,
    gameSelection,
    casualPlayers,
    softwareConvenience,
    depositsWithdrawals,
  } = data
  const [isVisible, setIsVisible] = useState<boolean>(true)
  return (
    <>
      <HowDoWeRate isVisible={isVisible} setIsVisible={setIsVisible} />
      <ReTable className={className}>
        <TitleRow>
          <Title>{localized.title}</Title>
          <Info onClick={() => setIsVisible(true)}>{localized.info}</Info>
        </TitleRow>
        <Content>
          <Row>
            <ReName kind="reliability">{localized.reliability}</ReName>
            <ReValue>{reliability}</ReValue>
          </Row>
          <Row>
            <ReName kind="bonusesPromotions">{localized.bonusesPromotions}</ReName>
            <ReValue>{bonusesPromotions}</ReValue>
          </Row>
          <Row>
            <ReName kind="gameSelection">{localized.gameSelection}</ReName>
            <ReValue>{gameSelection}</ReValue>
          </Row>
          <Row>
            <ReName kind="casualPlayers">{localized.casualPlayers}</ReName>
            <ReValue>{casualPlayers}</ReValue>
          </Row>
          <Row>
            <ReName kind="softwareConvenience">{localized.softwareConvenience}</ReName>
            <ReValue>{softwareConvenience}</ReValue>
          </Row>
          <Row>
            <ReName kind="depositsWithdrawals">{localized.depositsWithdrawals}</ReName>
            <ReValue>{depositsWithdrawals}</ReValue>
          </Row>
        </Content>
      </ReTable>
    </>
  )
}
