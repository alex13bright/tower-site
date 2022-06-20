import { Dispatch, ReactElement, SetStateAction } from 'react'
import { ModalWindow } from '~/components/root/ModalWindow'
import styled from 'styled-components'

const Caption = styled.h1`
  text-align: center;
`

const List = styled.ul`
  display: grid;
  row-gap: 16px;
`

const Item = styled.li<{ kind: string }>`
  display: grid;
  row-gap: 12px;
  grid-template-columns: 36px 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'icon header'
    '. body';

  &::before {
    grid-area: icon;
    content: '';
    width: 20px;
    height: 20px;
    background-image: url('/images/ratings/${({ kind }) => kind}.svg');
    background-repeat: no-repeat;
  }
`

const Header = styled.h2`
  grid-area: header;
`

const Body = styled.p`
  grid-area: body;
  text-align: justify;
`

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`

type Props = {
  isVisible: boolean
  setIsVisible: Dispatch<SetStateAction<boolean>>
}

export function HowDoWeRate({ isVisible, setIsVisible }: Props): ReactElement {
  return (
    <ModalWindow isVisible={isVisible} setIsVisible={setIsVisible}>
      <Layout>
        <Caption>How do we rate?</Caption>
        <List>
          <Item kind="reliability">
            <Header>Reliability</Header>
            <Body>
              In this block, we check the operator's license and its reputation (yes, not all
              licenses are equally 'useful'), the random number generator (RNG) certificate (or lack
              of), the identity verification procedure (KYC), year of brand foundation, public
              information about the owners and player reviews from our website and specialized
              forums.
            </Body>
          </Item>
          <Item kind="reliability">
            <Header>Bonuses and promotions</Header>
            <Body>
              Promotions are vital for attracting and retaining customers. And for players — an
              additional benefit like rakeback and bonuses. Here we consider the rake structure, the
              deposit bonus and wagering terms, and net rakeback value. We also assess the
              regularity and scope of the promotions.
            </Body>
          </Item>
          <Item kind="reliability">
            <Header>Game selection</Header>
            <Body>
              For any player is crucial that the room features regular action at his favorite game
              and at suitable stakes. In this assessment, we consider the total cash traffic of the
              site, the number of poker disciplines in the lobby, stakes, and the quantity and
              variety of regular MTT tournaments. A plus for the room will be offering games like
              Omaha, Spins, fast-fold poker, short deck (6+) heads-up (HU).
            </Body>
          </Item>
          <Item kind="reliability">
            <Header>Game selection</Header>
            <Body>
              For any player is crucial that the room features regular action at his favorite game
              and at suitable stakes. In this assessment, we consider the total cash traffic of the
              site, the number of poker disciplines in the lobby, stakes, and the quantity and
              variety of regular MTT tournaments. A plus for the room will be offering games like
              Omaha, Spins, fast-fold poker, short deck (6+) heads-up (HU).
            </Body>
          </Item>
          <Item kind="reliability">
            <Header>Casual players</Header>
            <Body>
              Poker would not be poker if it were not for the competitive element and the influence
              of skill in the result. We highlight the weakness of the field in a separate rating
              based on the results of our team (we always test the poker sites ourselves before
              adding them to our portfolio) and the win rates of our players. Also, we consider the
              ecology rules, the attitude towards PRO players, poker software, HUD, poker trackers,
              mining, and bumhunt.
            </Body>
          </Item>
          <Item kind="reliability">
            <Header>Convenience of the software</Header>
            <Body>
              While a professional player may quickly adapt to inconvenient software, then for
              beginners and casual players, the usability of the client is almost the main decisive
              factor. In this section, we test and evaluate the PC and mobile client of the rooms,
              its stability, and the cross-platform compatibility.
            </Body>
          </Item>
          <Item kind="reliability">
            <Header>Deposits and withdrawals</Header>
            <Body>
              It's easy to understand why the ability to quickly and conveniently deposit or
              withdraw any amount by simply clicking a few buttons is so essential. The best online
              poker rooms create the most comfortable cashier for their customers. A player who can
              process money transactions in a matter of hours remains satisfied with the service and
              loyal to the operator. We lock at the number of supported e-wallets, the speed and
              limits for withdrawing money, commissions on cashouts, and the availability of an
              agent's cashier.
            </Body>
          </Item>
        </List>
      </Layout>
    </ModalWindow>
  )
}
