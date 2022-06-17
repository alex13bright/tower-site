import styled from 'styled-components'
import { border, secondaryDark, widthAtLeast } from '~/styles/styles'
import { ReactElement } from 'react'
import { headerBlock, headerTitle } from '~/components/room/styles'

const StarsBar = styled.div<{
  ratings: number
  isBright: boolean
}>`
  grid-area: content;
  background-image: url(/images/ratings-star.svg);
  background-repeat: repeat-x;
  width: ${({ ratings }) => Math.round(ratings) * 24}px;
  background-position-y: ${({ isBright }) => (isBright ? 0 : '100%')};
  height: 16px;
`

const Stars = styled.div`
  display: grid;
  grid-template-areas: 'content';
`

const NumberValue = styled.span<{ isBright: boolean }>`
  color: ${({ isBright }) => (isBright ? 'rgb(254, 184, 60)' : secondaryDark)};
  font-size: 24px;
  font-weight: 700;
`

const NumberUnit = styled.span<{ isBright: boolean }>`
  color: ${({ isBright }) => (isBright ? 'rgba(254, 184, 60, 0.5)' : secondaryDark)};
`

const Number = styled.span`
  font-feature-settings: 'tnum' on, 'lnum' on;
`

const Title = styled.div`
  display: none;
  @media ${widthAtLeast.sm} {
    padding-top: 3px;
    display: block;
    ${headerTitle};
  } ;
`
const Values = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 58px;

  ${headerBlock};
  grid-area: ratings;

  @media ${widthAtLeast.sm} {
    justify-content: space-between;
    padding-bottom: 30px;
    border-bottom: 1px solid ${border};
  }
`

type Props = { ratings: number; className?: string }

export const Ratings = ({ ratings, className }: Props): ReactElement => {
  const isBright = ratings > 2.5
  return (
    <Main className={className}>
      <Title>Editor's rating</Title>
      <Values>
        <Stars>
          <StarsBar ratings={5} isBright={false} />
          <StarsBar ratings={ratings} isBright={true} />
        </Stars>
        <Number>
          <NumberValue isBright={isBright}>{ratings.toFixed(1)}</NumberValue>
          <NumberUnit isBright={isBright}>/5</NumberUnit>
        </Number>
      </Values>
    </Main>
  )
}
