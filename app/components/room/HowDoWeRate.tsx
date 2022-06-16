import { Dispatch, ReactElement, SetStateAction } from 'react'
import { ModalWindow } from '~/components/ModalWindow'
import styled from 'styled-components'

const Caption = styled.h1`
  text-align: center;
`
const List = styled.ul``
const Item = styled.li``
const Header = styled.h2``
const Body = styled.p``
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
          <Item>
            <Header>Reliability</Header>
            <Body>
              In this block, we check the operator's license and its reputation (yes, not all
              licenses are equally 'useful'), the random number generator (RNG) certificate (or lack
              of), the identity verification procedure (KYC), year of brand foundation, public
              information about the owners and player reviews from our website and specialized
              forums.
            </Body>
          </Item>
          <Item>
            <Header>Reliability</Header>
            <Body>
              In this block, we check the operator's license and its reputation (yes, not all
              licenses are equally 'useful'), the random number generator (RNG) certificate (or lack
              of), the identity verification procedure (KYC), year of brand foundation, public
              information about the owners and player reviews from our website and specialized
              forums.
            </Body>
          </Item>
          <Item>
            <Header>Reliability</Header>
            <Body>
              In this block, we check the operator's license and its reputation (yes, not all
              licenses are equally 'useful'), the random number generator (RNG) certificate (or lack
              of), the identity verification procedure (KYC), year of brand foundation, public
              information about the owners and player reviews from our website and specialized
              forums.
            </Body>
          </Item>
        </List>
      </Layout>
    </ModalWindow>
  )
}
