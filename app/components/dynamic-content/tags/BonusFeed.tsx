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
import { contentSidePaddingSize } from '~/components/page/pageStyles'
import { P } from '~/components/dynamic-content/tags/tags'
import { sidePaddingSize } from '~/components/room/header/headerStyles'
import { useToggle } from '~/custom-hooks/useToggle'
import { LoaderData } from '~/routes/rakeback-deals/$roomPageSlug'
import { useLoaderData } from '@remix-run/react'
import { UnorderedList } from '~/components/dynamic-content/tags/UnorderedList'

const Logo = styled.img`
  width: 52px !important;
  aspect-ratio: 1 / 1 !important;
`
const HeaderInfoTitle = styled.span`
  color: ${secondaryAction}!important;
  border-color: ${secondaryAction}!important;
  border: 1px solid ${secondaryAction}!important;
  border-radius: 100px !important;
  font-size: 11px !important;
  font-weight: 600 !important;
  letter-spacing: 0.2px !important;
  padding: 4px 8px 3px !important;
  text-align: center !important;
  text-transform: uppercase !important;
`
const HeaderInfoValue = styled.span`
  font-size: 20px !important;
  font-weight: 600 !important;
`

const HeaderInfo = styled.span`
  display: grid !important;
  align-items: center !important;
`
const Header = styled.span`
  display: flex !important;
  justify-content: start !important;
  column-gap: 20px !important;

  @media screen and ${widthAtLeast.md} {
    grid-area: header !important;
  }
`

const Title = styled.span`
  color: #777 !important;
  font-size: 12px !important;
  line-height: 16px !important;
  letter-spacing: 0.3px !important;
  text-transform: uppercase !important;
`
const Value = styled.span`
  color: #243238 !important;
  flex: 0 0 33.3% !important;
  font-size: 16px !important;
  line-height: 22px !important;
`
const Item = styled.li`
  font-family: ${proximaNovaSb}!important;
  display: grid !important;
  row-gap: 4px !important;
  border-left: 1px solid #e9e9e9 !important;
  ${sidePaddings('10px')}!important;
`
const List = styled.ul`
  display: grid !important;
  grid-template-columns: repeat(3, auto) !important;

  & li:first-child {
    border-left: none !important;
    padding-left: 0 !important;
  }

  @media screen and ${widthAtLeast.md} {
    grid-area: list !important;
  }
`

const StyledTooltip = styled(Tooltip)`
  display: grid !important;
`

const BonusCodeTitle = styled.span`
  color: ${secondaryDark}!important;
  text-transform: uppercase !important;
  font-family: ${proximaNovaSb}!important;
  font-size: 10px !important;
  line-height: 1em !important;
  text-align: center !important;
`

const BonusCodeValue = styled.span`
  font-weight: 700 !important;
  text-align: center !important;
`

const BonusCode = styled.span`
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-around !important;
  row-gap: 2px !important;
  cursor: pointer !important;
  position: relative !important;
  background: #fafafa !important;
  border: 1px dashed hsla(0, 0%, 46.7%, 0.5) !important;
  padding: 4px 20px !important;

  &:hover {
    border: 1px dashed ${accent}!important;
  }

  &:hover:before {
    content: '' !important;
    display: block !important;
    position: absolute !important;
    width: 18px !important;
    height: 12px !important;
    top: -12px !important;
    left: 50% !important;
    background: url('/assets/scissors.svg') no-repeat !important;
  }
`

const StyledSignUpButton = styled(SignUpButton)`
  padding: 10px !important;
  font-size: 16px !important;
`

const Action = styled.span`
  display: grid !important;
  grid-template-rows: repeat(2, 1fr) !important;
  gap: 10px !important;

  @media screen and ${widthAtLeast.sm} {
    grid-template-columns: repeat(2, 1fr) !important;
    grid-template-rows: auto !important;
  }

  @media screen and ${widthAtLeast.md} {
    grid-area: action !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: end !important;
  }
`

const DetailsToggleTitle = styled.span`
  font-size: 12px !important;
  line-height: 16px !important;
  align-items: center !important;
  background: #fafafa !important;
  border-bottom: 1px dashed #aaa !important;

  &:hover {
    border: none !important;
  }
`

const DetailsToggleButton = styled.button<{ isPressed: boolean }>`
  display: flex !important;
  column-gap: 4px !important;
  user-select: none !important;

  &::before {
    content: '' !important;
    width: 16px !important;
    height: 16px !important;
    background: url('/assets/more-down.svg') no-repeat center !important;
    ${({ isPressed }) => (isPressed ? `transform: rotateX(180deg)` : '')}!important;
  }
`

const DetailsContent = styled.span<{ isHidden: boolean }>`
  display: ${({ isHidden }) => (isHidden ? 'none' : 'block')}!important;
  margin-top: 20px !important;

  & > p,
  ul,
  li {
    font-size: 15px !important;
    line-height: 18px !important;
  }
`

const Details = styled.span`
  ${expandOnParentSides(contentSidePaddingSize.xs)}!important;

  color: #777 !important;
  padding-top: 8px !important;
  padding-bottom: 8px !important;
  display: flex !important;
  flex-direction: column !important;
  background: #fafafa !important;
  border: 1px solid #e9e9e9 !important;

  @media screen and ${widthAtLeast.md} {
    grid-area: details !important;
    ${cancelSideMargins}!important;
    ${sidePaddings(sidePaddingSize.md)}!important;
  }
  @media screen and ${widthAtLeast.lg} {
    ${sidePaddings(sidePaddingSize.lg)}!important;
  }
`

const Main = styled.span`
  display: grid !important;
  row-gap: 16px !important;
  margin-bottom: 30px !important;

  @media screen and ${widthAtLeast.md} {
    grid-template-rows: auto auto auto !important;
    grid-template-areas:
      'header action'
      'list action'
      'details details' !important;
    grid-template-columns: 1fr 180px !important;
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
