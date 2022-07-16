import { ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { contentSidePaddingSize } from '~/components/page/pageStyles'
import { cancelSideMargins, proximaNovaSb, sidePaddings, widthAtLeast } from '~/styles/styles'
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

export const TD = styled.td`
  ${tdCss};
  white-space: nowrap;
  font-size: 15px;
  line-height: 16px;
  color: #222;
  background: linear-gradient(0deg, #fafafa, #fafafa),
    linear-gradient(180deg, #fff -1.39%, #f1efef 107.71%);
  border: 1px solid #e9e9e9;

  display: grid;
  place-items: center start;
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

  display: grid;
  place-items: center;
`

export const TR = styled.tr`
  display: contents;
`

export const TBody = styled.tbody<{ columns: number }>`
  overflow-x: auto;
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, auto);

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

export const StyledTable = styled.table`
  display: grid;
  row-gap: 10px;
`

const Main = styled.div`
  display: grid;
  margin-bottom: 20px;
  row-gap: 16px;
  margin-left: -${contentSidePaddingSize.xs};
  margin-right: -${contentSidePaddingSize.xs};

  @media screen and ${widthAtLeast.md} {
    ${cancelSideMargins};
    ${sidePaddings('0')};
  }
`

type TableData = {
  table: string[][]
  caption: string | null
}
const parseChildren = (children: ReactElement[]): TableData => {
  // caution: parse only first tbody
  const [tbody] = children.filter(({ type }) => type === 'tbody')
  const table = tbody.props.children
    .filter(({ type }: { type: string }) => type === 'tr')
    .map((tr: ReactElement) => {
      const tds = tr.props.children.filter(({ type }: { type: string }) => type === 'td')
      return tds.map((td: ReactElement) => {
        return td?.props?.children
      })
    })

  const caption = null
  return { caption, table }
}

type Props = {
  className?: string
  children: any
}

export const Table = ({ children }: Props): ReactElement => {
  const tableData = parseChildren(children)
  const { caption, table } = tableData

  const rowsAmount = 2
  const { isToggled: showLess, toggle } = useToggle(true)

  const [headerRow, ...rows] = table
  const bodyRows = showLess ? rows.slice(0, rowsAmount) : rows
  return (
    <Main>
      <StyledTable>
        {caption !== null ? <Caption>{caption}</Caption> : null}
        <TBody columns={headerRow.length}>
          <TR>
            {headerRow.map((title, i) => (
              <TH key={i}>{title}</TH>
            ))}
          </TR>
          {bodyRows.map((row, i) => (
            <TR key={i}>
              {row.map((value, i) => (
                <TD key={i}>{value}</TD>
              ))}
            </TR>
          ))}
        </TBody>
      </StyledTable>
      {rowsAmount < rows.length ? (
        <FoldButton onClick={toggle}>{showLess ? 'Show more' : 'Show less'}</FoldButton>
      ) : null}
    </Main>
  )
}
Table.displayName = 'Table'
