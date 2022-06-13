import styled from 'styled-components'
const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  gap: 10px;
`
const HighlightOut = styled.div<{ color: string }>`
  min-height: 60px;
  filter: drop-shadow(-4px 0 0 ${({ color }) => color});
`
const HighlightIn = styled.div`
  background: #343848;
  clip-path: polygon(calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%, 0 0);
  padding: 9px 28px 9px 40px;
  display: flex;
  flex-direction: column;
`
const Name = styled.span``
const Value = styled.span``
export const Highlights = ({ bonus, rakeback }: { bonus: string; rakeback: string }) => (
  <Main>
    <HighlightOut color="#eb5757">
      <HighlightIn>
        <Name>Бонус</Name>
        <Value>{bonus}</Value>
      </HighlightIn>
    </HighlightOut>
    <HighlightOut color="#008be2">
      <HighlightIn>
        <Name>Рейкбек</Name>
        <Value>{rakeback}</Value>
      </HighlightIn>
    </HighlightOut>
  </Main>
)
