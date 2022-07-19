import styled from 'styled-components'
import { proximaNovaSb, secondaryDark, sidePaddings, widthAtLeast } from '~/styles/styles'
import { ReactElement } from 'react'
import { headerTitle, sidePaddingSize } from '~/components/room/header/headerStyles'
import { useLoaderData } from '@remix-run/react'
import { calcRating } from '~/core/utils'
import { LoaderData } from '~/routes/rakeback-deals/$roomPageSlug'

const StarsBar = styled.div<{
  rating: number
  isBright: boolean
}>`
  grid-area: content;
  background-image: url(/images/main/ratings-star.svg);
  background-repeat: repeat-x;
  width: ${({ rating }) => Math.round(rating) * 24}px;
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

const Values = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Title = styled.div`
  display: none;

  @media screen and ${widthAtLeast.sm} {
    padding-top: 3px;
    display: block;
    ${headerTitle};
    color: #e5e5e5;
    font-weight: normal;
    font-family: ${proximaNovaSb};
  }
`

const Main = styled.div`
  grid-area: ratings;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 60px;

  @media screen and ${widthAtLeast.sm} {
    ${sidePaddings(sidePaddingSize.md)};
    justify-content: space-between;
    align-self: center;
  }
  @media screen and ${widthAtLeast.md} {
    flex-direction: column;
    gap: 3px;
  }
  @media screen and ${widthAtLeast.lg} {
    ${sidePaddings(sidePaddingSize.lg)};
    flex-direction: row;
  }
`

type Props = {
  className?: string
}

export const Ratings = ({ className }: Props): ReactElement => {
  const data = useLoaderData<LoaderData>()
  const { ratings } = data.room
  const rating = calcRating(ratings)
  const isBright = rating > 2.5
  return (
    <Main className={className}>
      <Title>Editor's rating</Title>
      <Values>
        <Stars>
          <StarsBar rating={5} isBright={false} />
          <StarsBar rating={rating} isBright={true} />
        </Stars>
        <Number>
          <NumberValue isBright={isBright}>{rating.toFixed(1)}</NumberValue>
          <NumberUnit isBright={isBright}>/5</NumberUnit>
        </Number>
      </Values>
    </Main>
  )
}
