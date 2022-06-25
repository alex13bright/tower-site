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
import { Container, useSpoiler } from '~/components/ui/Spoiler'
import { contentSidePaddingSize } from '~/components/page/pageStyles'
import { LI, P, UL } from '~/components/common/commonStyles'
import { sidePaddingSize } from '~/components/room/header/headerStyles'

const Logo = styled.img`
  height: 100%;
  aspect-ratio: 1 / 1;
`
const HeaderInfoTitle = styled.div`
  color: ${secondaryAction};
  border-color: ${secondaryAction};
  border: 1px solid ${secondaryAction};
  border-radius: 100px;
  font-size: 11px;
  line-height: 11px;
  font-weight: 600;
  letter-spacing: 0.2px;
  margin-bottom: 4px;
  padding: 4px 8px 3px;
  text-transform: uppercase;
`
const HeaderInfoValue = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
`

const HeaderInfo = styled.div``
const Header = styled.div``

const Title = styled.span`
  color: #777;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  margin-bottom: 4px;
`
const Value = styled.span`
  color: #243238;
  flex: 0 0 33.3%;
  font-size: 16px;
  line-height: 22px;
`
const Item = styled.li`
  font-family: ${proximaNovaSb};
`
const List = styled.ul``

const BonusCodeTitle = styled.div`
  color: ${secondaryDark};
  text-transform: uppercase;
  font-family: ${proximaNovaSb};
  font-size: 10px;
`

const BonusCodeValue = styled.div`
  font-weight: 700;
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

const DetailsTitleText = styled.span`
  font-size: 12px;
  line-height: 16px;
  height: 16px;
  grid-area: title;
  background: #fafafa;
  border-bottom: 1px dashed #aaa;

  &:hover {
    border: none;
  }
`
const DetailsTitle = styled.span<{ isPressed: boolean }>`
  cursor: pointer;
  display: flex;
  column-gap: 4px;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'icon title' 'content content';
  place-items: center start;

  &::before {
    content: '';
    width: 16px;
    height: 16px;
    background: url('/images/rest/more-down.svg') no-repeat center;
    ${({ isPressed }) => (isPressed ? `transform: rotateX(180deg)` : '')};
  }
`

const StyledContainer = styled(Container)``

const DetailsContent = styled.div`
  margin-top: 20px;
  grid-area: content;

  & > p,
  ul,
  li {
    font-size: 15px;
    line-height: 18px;
  }
`

const Details = styled.div`
  ${expandOnParentSides(contentSidePaddingSize.xs)};
  margin-top: 20px;

  color: #777;
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
  background: #fafafa;
  border: 1px solid #e9e9e9;

  @media screen and ${widthAtLeast.md} {
    ${cancelSideMargins};
    ${sidePaddings(sidePaddingSize.md)};
  }
  @media screen and ${widthAtLeast.lg} {
    ${sidePaddings(sidePaddingSize.lg)};
  }
`

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
  const { containerRef, maxHeight, isButtonPressed, toggle } = useSpoiler(0)
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
        <SignUpButton />
      </Action>
      <Details>
        <DetailsTitle onClick={toggle} isPressed={isButtonPressed}>
          <DetailsTitleText>Details</DetailsTitleText>
        </DetailsTitle>
        <StyledContainer containerRef={containerRef} maxHeight={maxHeight}>
          <DetailsContent>
            <P>
              GGPoker divides its welcome package into two promotions: a first deposit bonus and the
              Honeymoon for Newcomers. You will be able to choose one of two welcome bonuses for
              your first deposit at GGPoker:
            </P>
            <UL>
              <LI>
                100% matched bonus up to $600: paid in $5 chunks for every $20 net rake (please
                check PVI rake), 90 days wagering time;
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
        </StyledContainer>
      </Details>
    </Main>
  )
}
