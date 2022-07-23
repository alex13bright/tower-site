import styled from 'styled-components'
import { ReactElement } from 'react'

export const StyledIcon = styled.img<{ $height: string }>`
  height: 20px;
`
export type IconProps = {
  name: string
  folder: string
  height?: string
}
export const Icon = ({ name, folder, height = '20px' }: IconProps): ReactElement => {
  return <StyledIcon alt={name} src={`/icons/${folder}/${name}.svg`} $height={height} />
}

const List = styled.ul<{ listGap: string }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  align-items: start;
  gap: ${({ listGap }) => listGap};
`

const Item = styled.li`
  display: flex;
  align-items: center;
`

export type IconListProps = {
  list: string[]
  folder: string
  listGap: string
}
export const IconList = ({ list, folder, listGap }: IconListProps): ReactElement => (
  <List listGap={listGap}>
    {list.map((name) => (
      <Item key={name} title={name}>
        <Icon name={name} folder={folder} />
      </Item>
    ))}
  </List>
)
