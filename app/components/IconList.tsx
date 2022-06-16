import styled from 'styled-components'
import { ReactElement } from 'react'

const List = styled.ul`
  display: flex;
  column-gap: 8px;
  align-items: center;
`

const Item = styled.li`
  display: flex;
  align-items: center;
`

type Props<ItemType> = {
  urlFn: (item: string) => string
  children: ItemType[]
}

export function IconList<ItemType extends string>({
  children,
  urlFn,
}: Props<ItemType>): ReactElement {
  return (
    <List>
      {children.map((item) => (
        <Item key={item} title={item}>
          <img alt={item} src={urlFn(item)} width="auto" height="20px" />
        </Item>
      ))}
    </List>
  )
}
