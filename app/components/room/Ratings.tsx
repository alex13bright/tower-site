import styled from 'styled-components'
import { secondaryDark, widthAtLeast } from '~/styles/styles'
import { useLocale } from '~/components/Locale'
import { ReactElement } from 'react'

const i18n = {
  title: {
    en: `Editor's rating`,
    ru: 'Наш рейтинг',
    es: 'Calificación del editor',
  },
  rakeback: {
    en: 'Rakeback',
    ru: 'Рейкбек',
    es: 'Rakeback',
  },
}

const StarsBar = styled.div<{ number: number; highlighted: boolean }>`
  grid-area: content;
  background-image: url(/images/ratings-star.svg);
  background-repeat: repeat-x;
  width: ${({ number }) => number * 24}px;
  background-position: 0 ${({ highlighted }) => (highlighted ? 0 : '100%')};
  height: 16px;
`

const Stars = styled.div`
  display: grid;
  grid-template-areas: 'content';
`

const NumberValue = styled.span<{ highlighted: boolean }>`
  color: ${({ highlighted }) => (highlighted ? 'rgb(254, 184, 60)' : secondaryDark)};
  font-size: 24px;
  font-weight: 700;
`

const NumberUnit = styled.span<{ highlighted: boolean }>`
  color: ${({ highlighted }) => (highlighted ? 'rgba(254, 184, 60, 0.5)' : secondaryDark)};
`

const Number = styled.span`
  font-feature-settings: 'tnum' on, 'lnum' on;
`

const Title = styled.div`
  display: none;
  @media ${widthAtLeast.sm} {
    display: block;
    //width: min-content;
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
  column-gap: 50px;
  @media ${widthAtLeast.sm} {
    justify-content: space-between;
  }
`

type Props = { ratings: number; className?: string }

export const Ratings = ({ ratings, className }: Props): ReactElement => {
  const locale = useLocale()
  const highlighted = ratings > 2.5
  return (
    <Main className={className}>
      <Title>{i18n.title[locale]}</Title>
      <Values>
        <Stars>
          <StarsBar number={5} highlighted={false} />
          <StarsBar number={Math.round(ratings)} highlighted={true} />
        </Stars>
        <Number>
          <NumberValue highlighted={highlighted}>{ratings.toFixed(1)}</NumberValue>
          <NumberUnit highlighted={highlighted}>/5</NumberUnit>
        </Number>
      </Values>
    </Main>
  )
}
