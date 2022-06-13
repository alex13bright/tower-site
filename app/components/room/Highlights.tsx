import styled from 'styled-components'
const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  row-gap: 4px;
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
  gap: 4px;
  height: 100%;
`
const Name = styled.span`
  display: block;
  font-size: 14px;
  line-height: 14px;
`
const Value = styled.span`
  color: ${({ color }) => color};
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  height: 100%;
`
type Props = {
  bonus: string
  rakeback: string
  className?: string
}
export const Highlights = ({ bonus, rakeback, className }: Props) => (
  <Main className={className}>
    <HighlightOut color="#eb5757">
      <HighlightIn>
        <Name>Бонус</Name>
        <Value color="#eb5757">
          {bonus} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias atque
          aut harum mollitia numquam, perferendis qui sit. Accusantium, aliquam aliquid blanditiis
          commodi cum debitis dicta distinctio dolorem ducimus eaque eveniet illo impedit ipsam,
          iste iure iusto libero molestias, non nostrum pariatur perspiciatis quidem quis ratione
          repudiandae sunt totam unde.
        </Value>
      </HighlightIn>
    </HighlightOut>
    <HighlightOut color="#008be2">
      <HighlightIn>
        <Name>Рейкбек</Name>
        <Value color="#008be2">{rakeback}</Value>
      </HighlightIn>
    </HighlightOut>
  </Main>
)
