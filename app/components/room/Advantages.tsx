import styled from 'styled-components'
import { ReactElement } from 'react'
import { headerTitle } from '~/components/room/styles'

const Item = styled.li`
  display: flex;
  justify-content: start;
  column-gap: 20px;
  &::before {
    width: 20px;
    height: 20px;
    background-image: url('/images/corona.svg');
    background-repeat: no-repeat;
    content: '';
  }
`
const List = styled.ul`
  display: grid;
  row-gap: 16px;
`
const Title = styled.span`
  ${headerTitle};
`
const Main = styled.div`
  display: grid;
  row-gap: 16px;
`

type Props = {
  data: string[]
  className?: string
}

export const Advantages = ({ data, className }: Props): ReactElement => {
  return (
    <Main className={className}>
      <Title>Key facts</Title>
      <List>
        {data.map((item, i) => (
          <Item key={i}>{item}</Item>
        ))}
      </List>
    </Main>
  )
}
