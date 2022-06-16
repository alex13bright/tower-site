import { I18n, useLocalized } from '~/core/utils'
import { ReactElement } from 'react'
import { Table, Title, Content, Row, Name, Value } from '~/components/room/table'
import styled from 'styled-components'
import { accent, secondaryDark } from '~/styles/styles'

type Trans = {
  title: string
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
    reliability: 'Reliability',
    bonusesPromotions: 'Bonuses and promotions',
    gameSelection: 'Game selection',
    casualPlayers: 'Casual players',
    softwareConvenience: 'Convenience of the_software',
    depositsWithdrawals: 'Deposits and withdrawals',
  },
  ru: {
    title: '',
    reliability: 'Reliability',
    bonusesPromotions: 'Bonuses and promotions',
    gameSelection: 'Game selection',
    casualPlayers: 'Casual players',
    softwareConvenience: 'Convenience of the software',
    depositsWithdrawals: 'Deposits and withdrawals',
  },
  es: {
    title: '',
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
  return (
    <ReTable className={className}>
      <Title>{localized.title}</Title>
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
  )
}
