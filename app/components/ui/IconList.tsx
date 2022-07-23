import styled from 'styled-components'
import { ReactElement } from 'react'

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: end;
  align-items: start;
`

const Item = styled.li`
  display: flex;
  align-items: center;
`

const Image = styled.img`
  height: 20px;
`

type Props<ItemType> = {
  list: ItemType[]
}

export const createIconList = (folder: string) => {
  function ItemType<ItemType extends string>({ list }: Props<ItemType>): ReactElement {
    return (
      <List>
        {list.map((item) => (
          <Item key={item} title={item}>
            <Image alt={item} src={`/icons/${folder}/${item}`} />
          </Item>
        ))}
      </List>
    )
  }
  return ItemType
}
