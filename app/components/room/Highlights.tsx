import styled from 'styled-components'
import { headerBlock } from '~/components/room/styles'

const Main = styled.table`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  row-gap: 8px;

  ${headerBlock};
`

const Tbody = styled.tbody`
  display: contents;
`

const HighlightOut = styled.tr<{ $color: string }>`
  min-height: 60px;
  filter: drop-shadow(-4px 0 0 ${({ $color }) => $color});
`
const HighlightIn = styled.td`
  background: #343848;
  clip-path: polygon(calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%, 0 0);
  padding: 9px 28px 9px 40px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
`

const Name = styled.span``

const Value = styled.span<{ $color: string }>`
  color: ${({ $color }) => $color};
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

export const Highlights = ({ bonus, rakeback, className }: Props) => {
  return (
    <Main className={className}>
      <Tbody>
        <HighlightOut $color="#eb5757">
          <HighlightIn>
            <Name>Bonus</Name>
            <Value $color="#eb5757">{bonus}</Value>
          </HighlightIn>
        </HighlightOut>
        <HighlightOut $color="#008be2">
          <HighlightIn>
            <Name>Rakeback</Name>
            <Value $color="#008be2">{rakeback}</Value>
          </HighlightIn>
        </HighlightOut>
      </Tbody>
    </Main>
  )
}
