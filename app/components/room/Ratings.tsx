import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Mixer = styled.div`
  display: grid;
  grid-template-areas: 'content';
`
const Stars = styled.div<{ number: number; illuminated: boolean }>`
  grid-area: content;
  background-image: url(/images/ratings-star.svg);
  background-repeat: repeat-x;
  width: ${({ number }) => number * 24}px;
  background-position: 0 ${({ illuminated }) => (illuminated ? 0 : '100%')};
  height: 16px;
`
const Number = styled.span`
  font-feature-settings: 'tnum' on, 'lnum' on;
`
const Text = styled.span`
  color: rgb(254, 184, 60);
  font-size: 24px;
  font-weight: 700;
`
const Unit = styled.span`
  color: rgba(254, 184, 60, 0.5);
`
export const Ratings = ({ ratings, className }: { ratings: number; className?: string }) => (
  <Main className={className}>
    <Mixer>
      <Stars number={5} illuminated={false} />
      <Stars number={ratings} illuminated={true} />
    </Mixer>
    <Number>
      <Text>{ratings}</Text>
      <Unit>/5</Unit>
    </Number>
  </Main>
)
