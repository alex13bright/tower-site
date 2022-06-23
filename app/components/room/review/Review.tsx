import { ReactElement } from 'react'
import styled from 'styled-components'
import { PageMeta } from '~/components/room/review/PageMeta'
import { Paragraph } from '~/components/room/review/Paragraph'
import { ContentLink, H1, H2, List, ListItem } from '~/components/common/commonStyles'
import { BonusFeed } from '~/components/common/BonusFeed'
import { LoaderData } from '~/routes/rakeback-deals/$roomId'
import { useLoaderData } from '@remix-run/react'

const Main = styled.div``

type Props = {
  className?: string
}
export const Review = ({ className }: Props): ReactElement => {
  const data: LoaderData = useLoaderData()
  const { bonusCode, title, squareLogo, bonusTitle, rakeback, deposit, maxBonus } = data.room
  return (
    <Main className={className}>
      <H1>GG Poker review</H1>
      <PageMeta />
      <Paragraph>
        GGPoker is the flagship skin of the world's largest poker network:{' '}
        <ContentLink to="#">GGNetwork</ContentLink>. Under the leadership of Jean-Christophe Antoine
        (read our exclusive interview), the site has become a model to follow in the gaming
        industry, and it will soon become the #1 poker site in the world after winning the GGPoker
        vs PokerStars battle.
      </Paragraph>{' '}
      <Paragraph>
        In this thorough review, we will expose all GG Poker secrets and make your life easy before
        signing up by answering the most frequently asked questions:
      </Paragraph>
      <List>
        <ListItem>Why is GGPoker on the way to the top?</ListItem>
        <ListItem>What makes GG Poker unique?</ListItem>
        <ListItem>Is GGPoker safe?</ListItem>
        <ListItem>How can I deposit and start playing?</ListItem>
      </List>
      <H2>GG Poker bonuses and promotions</H2>
      <BonusFeed
        data={{ bonusCode, roomTitle: title, squareLogo, bonusTitle, rakeback, deposit, maxBonus }}
      />
    </Main>
  )
}
