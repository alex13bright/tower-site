import { ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { contentSidePaddingSizePx } from '~/components/page/pageStyles'
import {
  cancelSideMargins,
  proximaNovaSb,
  pseudoIcon,
  sidePaddings,
  widthAtLeast,
} from '~/styles/styles'
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

const cellCss = css`
  padding: 12px 16px;
`

const Cell = styled.td`
  ${cellCss};
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

const StyledPayment = styled.span<{
  $width: string
  $height: string
  svg: string
  gap: string
}>`
  ${pseudoIcon}
`
type PaymentCellProps = { payment: ReactElement }
const PaymentCell = ({ payment }: PaymentCellProps) => {
  return (
    <Cell>
      <StyledPayment
        $width="20px"
        $height="20px"
        gap="10px"
        svg={`/images/payments/${payment.props.children}-color.svg`}
      >
        {payment}
      </StyledPayment>
    </Cell>
  )
}

export const TH = styled.th`
  ${cellCss};
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
  margin-left: -${contentSidePaddingSizePx};
  margin-right: -${contentSidePaddingSizePx};

  @media screen and ${widthAtLeast.md} {
    ${cancelSideMargins};
    ${sidePaddings('0')};
  }
`

type TableData = {
  table: ReactElement[][]
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
  'data-rows'?: string
  'data-icon'?: string
}

export const Table = ({ children, className, ...props }: Props): ReactElement => {
  const dataRows = props['data-rows'] ? parseInt(props['data-rows']) : Infinity
  const dataIcon = props['data-icon'] ? props['data-icon'] : null
  const tableData = parseChildren(children)
  const { caption, table } = tableData

  const { isToggled: showLess, toggle } = useToggle(true)

  const [headerRow, ...rows] = table
  const bodyRows = showLess ? rows.slice(0, dataRows) : rows
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
              {row.map((value, i) =>
                dataIcon === 'payment' && i === 0 ? (
                  <PaymentCell key={i} payment={value} />
                ) : (
                  <Cell key={i}>{value}</Cell>
                )
              )}
            </TR>
          ))}
        </TBody>
      </StyledTable>
      {dataRows < rows.length ? (
        <FoldButton onClick={toggle}>{showLess ? 'Show more' : 'Show less'}</FoldButton>
      ) : null}
    </Main>
  )
}
Table.displayName = 'Table'
