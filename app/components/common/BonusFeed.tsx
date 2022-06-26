import { ReactElement } from 'react'
import styled from 'styled-components'
import {
  accent,
  cancelSideMargins,
  expandOnParentSides,
  proximaNovaSb,
  secondaryAction,
  secondaryDark,
  sidePaddings,
  widthAtLeast,
} from '~/styles/styles'
import { base64InlineSvg, copyToClip } from '~/core/browserUtilities'
import { Tooltip } from '~/components/ui/Tooltip'
import { SignUpButton } from '~/components/common/actionButton'
import { contentSidePaddingSize } from '~/components/page/pageStyles'
import { LI, P, UL } from '~/components/common/common'
import { sidePaddingSize } from '~/components/room/header/headerStyles'
import { useToggle } from '~/custom-hooks/useToggle'

const Logo = styled.img`
  width: 52px;
  aspect-ratio: 1 / 1;
`
const HeaderInfoTitle = styled.div`
  color: ${secondaryAction};
  border-color: ${secondaryAction};
  border: 1px solid ${secondaryAction};
  border-radius: 100px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.2px;
  padding: 4px 8px 3px;
  text-align: center;
  text-transform: uppercase;
`
const HeaderInfoValue = styled.div`
  font-size: 20px;
  font-weight: 600;
`

const HeaderInfo = styled.div`
  display: grid;
  align-items: center;
`
const Header = styled.div`
  display: flex;
  justify-content: start;
  column-gap: 20px;

  @media screen and ${widthAtLeast.md} {
    grid-area: header;
  }
`

const Title = styled.span`
  color: #777;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
`
const Value = styled.span`
  color: #243238;
  flex: 0 0 33.3%;
  font-size: 16px;
  line-height: 22px;
`
const Item = styled.li`
  font-family: ${proximaNovaSb};
  display: grid;
  row-gap: 4px;
  border-left: 1px solid #e9e9e9;
  ${sidePaddings('10px')};
`
const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, auto);

  & li:first-child {
    border-left: none;
    padding-left: 0;
  }

  @media screen and ${widthAtLeast.md} {
    grid-area: list;
  }
`

const StyledTooltip = styled(Tooltip)`
  display: grid;
`

const BonusCodeTitle = styled.div`
  color: ${secondaryDark};
  text-transform: uppercase;
  font-family: ${proximaNovaSb};
  font-size: 10px;
  line-height: 1em;
  text-align: center;
`

const BonusCodeValue = styled.div`
  font-weight: 700;
  text-align: center;
`

const BonusCode = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  row-gap: 2px;
  cursor: pointer;
  position: relative;
  background: #fafafa;
  border: 1px dashed hsla(0, 0%, 46.7%, 0.5);
  padding: 4px 20px;

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

const Action = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;

  @media screen and ${widthAtLeast.sm} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }

  @media screen and ${widthAtLeast.md} {
    grid-area: action;
    grid-template-columns: 1fr;
  }
`

const DetailsToggleTitle = styled.span`
  font-size: 12px;
  line-height: 16px;
  align-items: center;
  background: #fafafa;
  border-bottom: 1px dashed #aaa;

  &:hover {
    border: none;
  }
`

const DetailsToggleButton = styled.button<{ isPressed: boolean }>`
  display: flex;
  column-gap: 4px;
  user-select: none;

  &::before {
    content: '';
    width: 16px;
    height: 16px;
    background: url('/images/rest/more-down.svg') no-repeat center;
    ${({ isPressed }) => (isPressed ? `transform: rotateX(180deg)` : '')};
  }
`

const DetailsContent = styled.div<{ isHidden: boolean }>`
  display: ${({ isHidden }) => (isHidden ? 'none' : 'block')};
  margin-top: 20px;

  & > p,
  ul,
  li {
    font-size: 15px;
    line-height: 18px;
  }
`

const Details = styled.div`
  ${expandOnParentSides(contentSidePaddingSize.xs)};

  color: #777;
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
  background: #fafafa;
  border: 1px solid #e9e9e9;

  @media screen and ${widthAtLeast.md} {
    grid-area: details;
    ${cancelSideMargins};
    ${sidePaddings(sidePaddingSize.md)};
  }
  @media screen and ${widthAtLeast.lg} {
    ${sidePaddings(sidePaddingSize.lg)};
  }
`

const Main = styled.div`
  display: grid;
  row-gap: 16px;
  margin-bottom: 30px;

  @media screen and ${widthAtLeast.md} {
    grid-template-rows: auto auto auto;
    grid-template-areas:
      'header action'
      'list action'
      'details details';
    grid-template-columns: 1fr 180px;
  }
`

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
  const { isToggled: isFolded, toggle } = useToggle()
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
        <StyledTooltip message="Copied to the clipboard">
          <BonusCode onClick={() => copyToClip(bonusCode)}>
            <BonusCodeTitle>Bonus-code</BonusCodeTitle>
            <BonusCodeValue>{bonusCode}</BonusCodeValue>
          </BonusCode>
        </StyledTooltip>
        <SignUpButton href="#" />
      </Action>
      <Details>
        <DetailsToggleButton onClick={toggle} isPressed={isFolded}>
          <DetailsToggleTitle>Details</DetailsToggleTitle>
        </DetailsToggleButton>
        <DetailsContent isHidden={isFolded}>
          <P>
            GGPoker divides its welcome package into two promotions: a first deposit bonus and the
            Honeymoon for Newcomers. You will be able to choose one of two welcome bonuses for your
            first deposit at GGPoker:
          </P>
          <UL>
            <LI>
              100% matched bonus up to $600: paid in $5 chunks for every $20 net rake (please check
              PVI rake), 90 days wagering time;
            </LI>
            <LI>Up to $100 in cash and free tickets: all rewards will expire after 30 days</LI>
            <P>Highlights:</P>
            <UL>
              <LI>The minimum deposit is $20</LI>
              <LI>
                All raked games contribute to the Match Bonus. Spin & Gold Insurance and All-in
                Insurance do not contribute
              </LI>
              <LI>
                The Match Bonus is excellent for deposits from $100. If you plan to deposit less,
                choose the free tickets offer.
              </LI>
            </UL>
          </UL>
        </DetailsContent>
      </Details>
    </Main>
  )
}
