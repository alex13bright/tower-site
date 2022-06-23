import { ReactElement } from 'react'
import styled from 'styled-components'
import { accent, proximaNovaSb, secondaryDark } from '~/styles/styles'
import { base64InlineSvg, copyToClip } from '~/core/browserUtilities'
import { Tooltip } from '~/components/ui/Tooltip'

const Logo = styled.img`
  height: 100%;
  aspect-ratio: 1 / 1;
`
const HeaderInfoTitle = styled.div``
const HeaderInfoValue = styled.div``
const HeaderInfo = styled.div``
const Header = styled.div``

const Title = styled.div``
const Value = styled.div``
const Item = styled.li``
const List = styled.ul``

const Button = styled.button``

const BonusCodeTitle = styled.div`
  color: ${secondaryDark};
  text-transform: uppercase;
  font-family: ${proximaNovaSb};
  font-size: 10px;
`

const BonusCodeValue = styled.div`
  font-weight: bold;
`

const BonusCode = styled.div`
  cursor: pointer;
  position: relative;
  background: #fafafa;
  border: 1px dashed hsla(0, 0%, 46.7%, 0.5);
  padding: 4px 0;

  &:hover {
    border: 1px dashed ${accent};
  }

  &:hover:before {
    content: '';
    display: block;
    position: absolute;
    width: 18px;
    height: 12px;
    top: -12px;
    left: 50%;
    background: url('/images/rest/scissors.svg') no-repeat;
  }
`

const Action = styled.div``

const DetailsTitle = styled.div`
  display: flex;
  justify-content: start;
  column-gap: 3px;
  background: #fafafa;
  border: solid #e9e9e9;
  border-width: 1px 1px 2px;
  padding: 8px 20px;

  &::before {
    background: url('/images/rest/more.svg') no-repeat center;
  }
`
const DetailsContent = styled.div``
const Details = styled.div``

const Main = styled.div``

type Props = {
  data: {
    bonusCode: string
    roomTitle: string
    squareLogo: string
    bonusTitle: string
    rakeback: string
    deposit: string
    maxBonus: string
  }
  className?: string
}

export const BonusFeed = ({ data, className }: Props): ReactElement => {
  const { bonusCode, roomTitle, squareLogo, bonusTitle, rakeback, deposit, maxBonus } = data

  return (
    <Main className={className}>
      <Header>
        <Logo src={base64InlineSvg(squareLogo)} alt={roomTitle} />
        <HeaderInfo>
          <HeaderInfoTitle>Welcome bonus</HeaderInfoTitle>
          <HeaderInfoValue>{bonusTitle}</HeaderInfoValue>
        </HeaderInfo>
      </Header>
      <List>
        <Item>
          <Title>Rakeback</Title>
          <Value>{rakeback}</Value>
        </Item>
        <Item>
          <Title>Deposit</Title>
          <Value>{deposit}</Value>
        </Item>
        <Item>
          <Title>Max bonus</Title>
          <Value>{maxBonus}</Value>
        </Item>
      </List>
      <Action>
        <Tooltip message="Copied to the clipboard">
          <BonusCode onClick={() => copyToClip(bonusCode)}>
            <BonusCodeTitle>Bonus-code</BonusCodeTitle>
            <BonusCodeValue>{bonusCode}</BonusCodeValue>
          </BonusCode>
        </Tooltip>
        <Button />
      </Action>
    </Main>
  )
}
