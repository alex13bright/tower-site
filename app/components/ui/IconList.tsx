import styled from 'styled-components'
import { ReactElement } from 'react'

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

const Image = styled.img`
  height: 20px;
`

type Props = {
  list: string[]
  folder: string
  listGap: string
}

export const IconList = ({ list, folder, listGap }: Props): ReactElement => (
  <List listGap={listGap}>
    {list.map((item) => (
      <Item key={item} title={item}>
        <Image alt={item} src={`/icons/${folder}/${item}.svg`} />
      </Item>
    ))}
  </List>
)
