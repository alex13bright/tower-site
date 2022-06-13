import styled from 'styled-components'
import { secondaryDark } from '~/styles/styles'

const Main = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Mixer = styled.div`
  display: grid;
  grid-template-areas: 'content';
`
const Stars = styled.div<{ number: number; highlighted: boolean }>`
  grid-area: content;
  background-image: url(/images/ratings-star.svg);
  background-repeat: repeat-x;
  width: ${({ number }) => number * 24}px;
  background-position: 0 ${({ highlighted }) => (highlighted ? 0 : '100%')};
  height: 16px;
`
const Number = styled.span`
  font-feature-settings: 'tnum' on, 'lnum' on;
`
const MainText = styled.span<{ highlighted: boolean }>`
  color: ${({ highlighted }) => (highlighted ? 'rgb(254, 184, 60)' : secondaryDark)};
  font-size: 24px;
  font-weight: 700;
`
const Text = ({ ratings, highlighted }: { ratings: number; highlighted: boolean }) => {
  return <MainText highlighted={highlighted}>{ratings.toFixed(1)}</MainText>
}
const Unit = styled.span<{ highlighted: boolean }>`
  color: ${({ highlighted }) => (highlighted ? 'rgba(254, 184, 60, 0.5)' : secondaryDark)};
`
export const Ratings = ({ ratings, className }: { ratings: number; className?: string }) => {
  const highlighted = ratings > 2.5
  return (
    <Main className={className}>
      <Mixer>
        <Stars number={5} highlighted={false} />
        <Stars number={Math.round(ratings)} highlighted={true} />
      </Mixer>
      <Number>
        <Text ratings={ratings} highlighted={highlighted} />
        <Unit highlighted={highlighted}>/5</Unit>
      </Number>
    </Main>
  )
}
