import styled from 'styled-components'
import { ReactElement } from 'react'

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: end;
  align-items: start;
`

const Item = styled.li`
  display: flex;
  align-items: center;
`

const Image = styled.img`
  aspect-ratio: auto;
  height: 20px;
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
          <Image alt={item} src={urlFn(item)} width="40px" height="20px" />
        </Item>
      ))}
    </List>
  )
}
