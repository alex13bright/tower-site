import styled from 'styled-components'
import { headerBlock } from '~/components/room/roomStyles'
import { accent, border, primaryAction, widthAtLeast } from '~/styles/styles'

const Main = styled.table`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  row-gap: 8px;
  padding-top: 30px;
  padding-bottom: 30px;

  ${headerBlock};
  grid-area: highlights;

  @media ${widthAtLeast.md} {
    grid-template-columns: repeat(2, 1fr);
    padding-top: 0;
    padding-bottom: 0;
  }
`

const Tbody = styled.tbody`
  display: contents;
`

const HighlightOut = styled.tr<{ $color: string }>`
  min-height: 60px;
  filter: drop-shadow(-4px 0 0 ${({ $color }) => $color});
`
const HighlightIn = styled.td`
  background: ${border};
  clip-path: polygon(calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%, 0 0);
  padding: 9px 28px 9px 40px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  font-weight: bold;
  font-size: 18px;
`

const Name = styled.span``

const Value = styled.span<{ $color: string }>`
  color: ${({ $color }) => $color};
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
        <HighlightOut $color={primaryAction}>
          <HighlightIn>
            <Name>Bonus</Name>
            <Value $color={primaryAction}>{bonus}</Value>
          </HighlightIn>
        </HighlightOut>
        <HighlightOut $color={accent}>
          <HighlightIn>
            <Name>Rakeback</Name>
            <Value $color={accent}>{rakeback}</Value>
          </HighlightIn>
        </HighlightOut>
      </Tbody>
    </Main>
  )
}
