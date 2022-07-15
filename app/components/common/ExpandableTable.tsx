import { ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { contentSidePaddingSize } from '~/components/page/pageStyles'
import { cancelSideMargins, proximaNovaSb, sidePaddings, widthAtLeast } from '~/styles/styles'
import { useToggle } from '~/custom-hooks/useToggle'
import * as fs from 'fs'

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

export const TR = styled.tr`
  display: contents;
`

export const TBody = styled.tbody<{ columns: number }>`
  overflow-x: auto;
  display: grid;
  grid-template-columns: repeat(4, auto);

  & :nth-child(odd) td {
    background: linear-gradient(0deg, #f4f4f4, #f4f4f4),
      linear-gradient(180deg, #fff -1.39%, #f1efef 107.71%);
  }
`

export const Caption = styled.caption`
  caption-side: bottom;
  color: #999;
  font-size: 14px;
  text-align: center;
  order: 1;
`

export const Table = styled.table`
  display: grid;
  row-gap: 10px;
`

const Main = styled.div`
  display: grid;
  row-gap: 16px;
  margin-left: -${contentSidePaddingSize.xs};
  margin-right: -${contentSidePaddingSize.xs};

  @media screen and ${widthAtLeast.md} {
    ${cancelSideMargins};
    ${sidePaddings('0')};
  }
`

const fakeCaption = 'Platinum levels of Fish Buffet'
const fakeData = [
  ['Rank', 'Rewards', 'Average rakeback', 'FP required'],
  ['Platinum Fish', '$1 for 500 FP', '20%', 'not required'],
  ['Platinum Octopus', '$1 for 285 FP', '35%', '750К'],
  ['Platinum Whale', '$1 for 200 FP', '50%', '1,5M'],
  ['Platinum Shark', '$1 for 182 FP', '55%', '3M'],
  ['GGPlatinum', '$1 for 167 FP', '60%', '5M'],
]

type Props = {
  className?: string
  children: any
}

export const ExpandableTable = ({ children }: Props): ReactElement => {
  console.log(children)
  return (
    <table>
      <tbody>
        <tr>
          <td>cell</td>
        </tr>
      </tbody>
    </table>
  )
  // const root = JSDOM.fragment(`<div id=${cmdId} style="display: grid">${rawContent}</div>`)
  // const { isToggled: showLess, toggle } = useToggle(true)

  // const [headerRow, ...rows] = data
  // const bodyRows = rows.slice(0, showLess ? lessNumber : Infinity)
  // return (
  //   <Main>
  //     <Table>
  //       <Caption>{caption}</Caption>
  //       <TBody columns={headerRow.length}>
  //         <TR>
  //           {headerRow.map((title) => (
  //             <TH key={title}>{title}</TH>
  //           ))}
  //         </TR>
  //         {bodyRows.map((row, i) => (
  //           <TR key={i}>
  //             {row.map((value, i) => (
  //               <TD key={i}>{value}</TD>
  //             ))}
  //           </TR>
  //         ))}
  //       </TBody>
  //     </Table>
  //     <FoldButton onClick={toggle}>{showLess ? 'Show more' : 'Show less'}</FoldButton>
  //   </Main>
  // )
}
