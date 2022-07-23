import styled from 'styled-components'
import { GraphicValue } from '~/components/common/GraphicValue'
import { ReactElement } from 'react'
import { background, basicPseudoIcon, primaryDark, secondary, widthAtLeast } from '~/styles/styles'
import { Content, createNameWithIcon, Table } from '~/components/room/header/headerStyles'

const StyledGraphicValue = styled(GraphicValue)<{ $color: string }>`
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
`
export const Available = ({ isAvailable }: { isAvailable: boolean }): ReactElement => {
  const [name, color] = isAvailable ? ['yes', 'green'] : ['no', 'red']
  return (
    <StyledGraphicValue folder="general" name={name} width="16px" height="16px" $color={color} />
  )
}

export const Caption = styled.caption`
  background: #2e3141;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border: 1px solid #2e3141;

  height: 64px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${primaryDark};
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.2px;

  &::after {
    ${basicPseudoIcon};
  }
`

export const StyledContent = styled(Content)`
  border: 1px solid #e9e9e9;
  background: #fafafa;
  padding: 20px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  &:hover {
    background: ${background};
  }
`
const NameWithIcon = createNameWithIcon('general')

export const StyledNameWithIcon = styled(NameWithIcon)`
  color: ${secondary};
  font-size: 16px;
  font-weight: 400;
`

export const Main = styled(Table)`
  @media screen and ${widthAtLeast.md} {
  }

  @media screen and ${widthAtLeast.lg} {
    row-gap: 0;
    display: grid;
  }
`
