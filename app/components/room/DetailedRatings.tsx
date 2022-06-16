import { I18n, useLocalized } from '~/core/utils'
import { ReactElement } from 'react'
import { Table, Title, Content, Row, Name, Value } from '~/components/room/table'
import styled from 'styled-components'

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
    title: '',
    reliability: 'Reliability',
    bonusesPromotions: 'Bonuses and promotions',
    gameSelection: 'Game selection',
    casualPlayers: 'Casual players',
    softwareConvenience: 'Convenience of the software',
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

const ReName = styled(Name)`
  &::before {
  }
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
    <Table className={className}>
      <Title>{localized.title}</Title>
      <Content>
        <Row>
          <ReName>{localized.reliability}</ReName>
          <Value>{reliability}</Value>
        </Row>
        <Row>
          <ReName>{localized.bonusesPromotions}</ReName>
          <Value>{bonusesPromotions}</Value>
        </Row>
        <Row>
          <ReName>{localized.gameSelection}</ReName>
          <Value>{gameSelection}</Value>
        </Row>
        <Row>
          <ReName>{localized.casualPlayers}</ReName>
          <Value>{casualPlayers}</Value>
        </Row>
        <Row>
          <ReName>{localized.softwareConvenience}</ReName>
          <Value>{softwareConvenience}</Value>
        </Row>
        <Row>
          <ReName>{localized.depositsWithdrawals}</ReName>
          <Value>{depositsWithdrawals}</Value>
        </Row>
      </Content>
    </Table>
  )
}
