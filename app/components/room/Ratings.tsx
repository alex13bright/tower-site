import styled from 'styled-components'
import { secondaryDark, widthAtLeast } from '~/styles/styles'
import { ReactElement } from 'react'
import { I18n, useLocalized } from '~/core/utils'

type Trans = {
  title: string
}
const i18n: I18n<Trans> = {
  en: {
    title: `Editor's rating`,
  },
  ru: {
    title: 'Наш рейтинг',
  },
  es: {
    title: 'Calificación del editor',
  },
}

const StarsBar = styled.div.attrs({ ratings: 5, isBright: false })<{
  ratings: number
  isBright: boolean
}>`
  grid-area: content;
  background-image: url(/images/ratings-star.svg);
  background-repeat: repeat-x;
  width: ${({ ratings }) => Math.round(ratings) * 24}px;
  background-position: 0 ${({ isBright }) => (isBright ? 0 : '100%')};
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
    display: block;
    color: ${secondaryDark};
    padding-top: 3px;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
  } ;
`
const Values = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Main = styled.div`
  grid-area: ratings;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 58px;
  @media ${widthAtLeast.sm} {
    justify-content: space-between;
  }
`

type Props = { ratings: number; className?: string }

export const Ratings = ({ ratings, className }: Props): ReactElement => {
  const localized = useLocalized(i18n)
  const isBright = ratings > 2.5
  return (
    <Main className={className}>
      <Title>{localized.title}</Title>
      <Values>
        <Stars>
          <StarsBar />
          <StarsBar ratings={ratings} isBright />
        </Stars>
        <Number>
          <NumberValue isBright={isBright}>{ratings.toFixed(1)}</NumberValue>
          <NumberUnit isBright={isBright}>/5</NumberUnit>
        </Number>
      </Values>
    </Main>
  )
}
