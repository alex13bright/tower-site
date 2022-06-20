import styled from 'styled-components'
import { headerBlock } from '~/components/room/header/headerStyles'
import { accent, border, primaryAction, widthAtLeast } from '~/styles/styles'
import { useLoaderData } from '@remix-run/react'
import { LoaderData } from '~/routes/rakeback-deals/$roomId'

const Main = styled.div`
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

const Content = styled.table`
  display: contents;
`

const Outer = styled.tbody<{ $color: string }>`
  min-height: 60px;
  filter: drop-shadow(-4px 0 0 ${({ $color }) => $color});
`

const Inner = styled.tr`
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

const Name = styled.td``

const Value = styled.td<{ $color: string }>`
  color: ${({ $color }) => $color};
  height: 100%;
`

type Props = {
  className?: string
}

export const Highlights = ({ className }: Props) => {
  const data: LoaderData = useLoaderData()
  const { bonus, rakeback } = data.room
  return (
    <Main className={className}>
      <Content>
        <Outer $color={primaryAction}>
          <Inner>
            <Name>Bonus</Name>
            <Value $color={primaryAction}>{bonus}</Value>
          </Inner>
        </Outer>
        <Outer $color={accent}>
          <Inner>
            <Name>Rakeback</Name>
            <Value $color={accent}>{rakeback}</Value>
          </Inner>
        </Outer>
      </Content>
    </Main>
  )
}
