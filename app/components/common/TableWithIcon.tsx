import styled from 'styled-components'
import { TD } from '~/components/common/ExpandableTable'

const IconDT = styled(TD)<{ svg: string; $width: string; $height: string }>`
  display: flex;
  gap: 10px;

  &::before {
    content: '';
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    background: url(${({ svg }) => svg}) no-repeat 50%;
  }
`

const DepositsAndWithdrawals = [
  ['Payments', 'Rewards', 'Average rakeback', 'FP required'],
  ['Visa', '$1 for 500 FP', '20%', 'not required'],
  ['Neteller', '$1 for 285 FP', '35%', '750К'],
  ['Skrill', '$1 for 200 FP', '50%', '1,5M'],
  ['Bitcoin', '$1 for 182 FP', '55%', '3M'],
]

const addIcons = (data: string[][]) =>
  data.map(([first, ...row]: any) => [
    <IconDT $width="12px" $height="12px" svg={`URL('/image/')`} key={first}>
      {first}
    </IconDT>,
    ...row,
  ])
