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
import { copyToClip } from '~/core/browserUtilities'
import { Tooltip } from '~/components/ui/Tooltip'
import { SignUpButton } from '~/components/common/actionButton'
import { contentSidePaddingSizePx } from '~/components/page/pageStyles'
import { P } from '~/dynamic-content/components/content'
import { sidePaddingSize } from '~/components/room/header/headerStyles'
import { useToggle } from '~/custom-hooks/useToggle'
import { LoaderData } from '~/routes/rakeback-deals/$roomPageSlug'
import { useLoaderData } from '@remix-run/react'
import { UnorderedList } from '~/dynamic-content/components/UnorderedList'

const Logo = styled.img`
  width: 52px;
  aspect-ratio: 1 / 1;
`
const HeaderInfoTitle = styled.span`
  color: ${secondaryAction}!important;
  border-color: ${secondaryAction}!important;
  border: 1px solid ${secondaryAction}!important;
  border-radius: 100px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.2px;
  padding: 4px 8px 3px;
  text-align: center;
  text-transform: uppercase;
`
const HeaderInfoValue = styled.span`
  font-size: 20px;
  font-weight: 600;
`

const HeaderInfo = styled.span`
  display: grid;
  align-items: center;
`
const Header = styled.span`
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
  font-family: ${proximaNovaSb}!important;
  display: grid;
  row-gap: 4px;
  border-left: 1px solid #e9e9e9;
  ${sidePaddings('10px')}!important;
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

const BonusCodeTitle = styled.span`
  color: ${secondaryDark}!important;
  text-transform: uppercase;
  font-family: ${proximaNovaSb}!important;
  font-size: 10px;
  line-height: 1em;
  text-align: center;
`

const BonusCodeValue = styled.span`
  font-weight: 700;
  text-align: center;
`

const BonusCode = styled.span`
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
    background: url('/images/main/scissors.svg') no-repeat;
  }
`

const StyledSignUpButton = styled(SignUpButton)`
  padding: 10px;
  font-size: 16px;
`

const Action = styled.span`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;

  @media screen and ${widthAtLeast.sm} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }

  @media screen and ${widthAtLeast.md} {
    grid-area: action;
    display: flex;
    flex-direction: column;
    justify-content: end;
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
    background: url('/images/main/more-down.svg') no-repeat center;
    ${({ isPressed }) => (isPressed ? `transform: rotateX(180deg)` : '')};
  }
`

const DetailsContent = styled.span<{ isHidden: boolean }>`
  display: ${({ isHidden }) => (isHidden ? 'none' : 'block')}!important;
  margin-top: 20px;

  & > p,
  ul,
  li {
    font-size: 15px;
    line-height: 18px;
  }
`

const Details = styled.span`
  ${expandOnParentSides(contentSidePaddingSizePx)}!important;

  color: #777;
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
  background: #fafafa;
  border: 1px solid #e9e9e9;

  @media screen and ${widthAtLeast.md} {
    grid-area: details;
    ${cancelSideMargins}!important;
    ${sidePaddings(sidePaddingSize.md)}!important;
  }
  @media screen and ${widthAtLeast.lg} {
    ${sidePaddings(sidePaddingSize.lg)}!important;
  }
`

const Main = styled.span`
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
  className?: string
}

export const BonusFeed = ({ className }: Props): ReactElement => {
  const data = useLoaderData<LoaderData>()
  const { bonusCode, bonus: bonusObj, squareLogo } = data.room
  const { bonus, maxBonus, rakeback, deposit } = bonusObj
  const { url, alt } = squareLogo
  const { isToggled: isFolded, toggle } = useToggle(true)
  return (
    <Main className={className}>
      <Header>
        <Logo src={url} alt={alt} />
        <HeaderInfo>
          <HeaderInfoTitle>Welcome bonus</HeaderInfoTitle>
          <HeaderInfoValue>{bonus}</HeaderInfoValue>
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
        <StyledSignUpButton href="#" />
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
          <UnorderedList>
            <li>
              100% matched bonus up to $600: paid in $5 chunks for every $20 net rake (please check
              PVI rake), 90 days wagering time!important;
            </li>
            <li>Up to $100 in cash and free tickets: all rewards will expire after 30 days</li>
            <P>Highlights:</P>
            <UnorderedList>
              <li>The minimum deposit is $20</li>
              <li>
                All raked games contribute to the Match Bonus. Spin & Gold Insurance and All-in
                Insurance do not contribute
              </li>
              <li>
                The Match Bonus is excellent for deposits from $100. If you plan to deposit less,
                choose the free tickets offer.
              </li>
            </UnorderedList>
          </UnorderedList>
        </DetailsContent>
      </Details>
    </Main>
  )
}
