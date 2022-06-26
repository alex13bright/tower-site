import { ReactElement, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { contentSidePaddingSize } from '~/components/page/pageStyles'
import { cancelSideMargins, proximaNovaSb, sidePaddings, widthAtLeast } from '~/styles/styles'
import { sidePaddingSize } from '~/components/room/header/headerStyles'
import { useToggle } from '~/custom-hooks/useToggle'

const FoldButton = styled.button`
  border: 1px solid rgba(0, 139, 226, 0.5);
  border-radius: 4px;
  color: #008be2;
  cursor: pointer;
  font-family: ${proximaNovaSb};
  font-size: 14px;
  line-height: 20px;
  padding: 8px 16px;
  justify-self: center;
`

const tdCss = css`
  padding: 12px 16px;
`

export const Table = styled.table`
  display: grid;
  row-gap: 10px;
`

export const Caption = styled.caption`
  caption-side: bottom;
  color: #999;
  font-size: 14px;
  text-align: center;
  order: 1;
`

export const TBody = styled.tbody`
  overflow-x: auto;

  & :nth-child(odd) td {
    background: linear-gradient(0deg, #f4f4f4, #f4f4f4),
      linear-gradient(180deg, #fff -1.39%, #f1efef 107.71%);
  }
`

export const TR = styled.tr``

export const TH = styled.th`
  ${tdCss};
  background: #e9e9e9;
  border: 1px solid #dfdede;
  color: #777;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`

export const TD = styled.td`
  ${tdCss};
  white-space: nowrap;
  font-size: 15px;
  line-height: 16px;
  color: #222;
  background: linear-gradient(0deg, #fafafa, #fafafa),
    linear-gradient(180deg, #fff -1.39%, #f1efef 107.71%);
  border: 1px solid #e9e9e9;
`

const Main = styled.div`
  display: grid;
  justify-content: center;
  row-gap: 16px;
  margin-left: -${contentSidePaddingSize.xs};
  margin-right: -${contentSidePaddingSize.xs};

  @media screen and ${widthAtLeast.md} {
    ${cancelSideMargins};
    ${sidePaddings(sidePaddingSize.md)};
  }

  @media screen and ${widthAtLeast.lg} {
    ${sidePaddings(sidePaddingSize.lg)};
  }
`

type Props = {
  children?: ReactNode
  className?: string
  lessNumber: number
}

export const ExpandableTable = ({
  children,
  className,
  lessNumber = Infinity,
}: Props): ReactElement => {
  const { isToggled: showMore, toggle } = useToggle(false)

  const data = [
    ['Rank', 'Rewards', 'Average rakeback', 'FP required'],
    ['Platinum Fish', '$1 for 500 FP', '20%', 'not required'],
    ['Platinum Octopus', '$1 for 285 FP', '35%', '750К'],
    ['Platinum Whale', '$1 for 200 FP', '50%', '1,5M'],
    ['Platinum Shark', '$1 for 182 FP', '55%', '3M'],
    ['GGPlatinum', '$1 for 167 FP', '60%', '5M'],
  ]
  const showNumber = showMore ? Infinity : lessNumber + 1
  return (
    <Main>
      <Table className={className}>
        <Caption>Platinum levels of Fish Buffet</Caption>
        <TBody>
          <TR>
            {data[0].map((title) => (
              <TH key={title}>{title}</TH>
            ))}
          </TR>
          {data.slice(1, showNumber).map((row, i) => (
            <TR key={i}>
              {row.map((value, i) => (
                <TD key={i}>{value}</TD>
              ))}
            </TR>
          ))}
        </TBody>
      </Table>
      <FoldButton onClick={toggle}>{showMore ? 'Show more' : 'Show less'}</FoldButton>
    </Main>
  )
}
