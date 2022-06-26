import { ReactElement, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { contentSidePaddingSize } from '~/components/page/pageStyles'

const tdCss = css`
  padding: 12px 16px;
`

export const Table = styled.table`
  width: 100%;
`
export const TBody = styled.tbody`
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
  background: linear-gradient(0deg, #fafafa, #fafafa),
    linear-gradient(180deg, #fff -1.39%, #f1efef 107.71%);
  border: 1px solid #e9e9e9;
  color: #222;
`

const Main = styled.div`
  margin-left: -${contentSidePaddingSize.xs};
  margin-right: -${contentSidePaddingSize.xs};
  overflow-x: scroll;
  overflow-y: hidden;
  height: 50px;
  background-color: coral;
`

type Props = {
  children?: ReactNode
  className?: string
}

const Test = styled.div`
  width: 2000px;
  display: flex;
  justify-content: space-between;

  &::before {
    content: '1';
  }
  &::after {
    content: '2';
  }
`

export const ExpandableTable = ({ children, className }: Props): ReactElement => {
  return (
    <Main>
      <Test>1</Test>
    </Main>
  )
}

/*
<Table className={className}>
        <TBody>
          <TR>
            <TH>Rank</TH>
            <TH>Rewards</TH>
            <TH>Average rakeback</TH>
            <TH>FP required</TH>
          </TR>
          <TR>
            <TD>Platinum Fish</TD>
            <TD>$1 for 500 FP</TD>
            <TD>20%</TD>
            <TD>not required</TD>
          </TR>
          <TR>
            <TD>Platinum Octopus</TD>
            <TD>$1 for 285 FP</TD>
            <TD>35%</TD>
            <TD>750К</TD>
          </TR>
          <TR>
            <TD>Platinum Whale</TD>
            <TD>$1 for 200 FP</TD>
            <TD>50%</TD>
            <TD>1,5M</TD>
          </TR>
          <TR>
            <TD>Platinum Shark</TD>
            <TD>$1 for 182 FP</TD>
            <TD>55%</TD>
            <TD>3M</TD>
          </TR>
          <TR>
            <TD>GGPlatinum</TD>
            <TD>$1 for 167 FP</TD>
            <TD>60%</TD>
            <TD>5M</TD>
          </TR>
        </TBody>
      </Table>
*/
