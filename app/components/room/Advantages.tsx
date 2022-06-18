import styled from 'styled-components'
import { ReactElement } from 'react'
import { headerBlock, headerTitle } from '~/components/room/roomStyles'
import { border, widthAtLeast } from '~/styles/styles'
import { LoaderData } from '~/routes/rakeback-deals/$roomId'
import { useLoaderData } from '@remix-run/react'

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
  border-top: 1px solid ${border};
  padding-top: 30px;
  padding-bottom: 30px;

  ${headerBlock};
  grid-area: advantages;

  @media ${widthAtLeast.md} {
    border-top: none;
    border-left: 1px solid ${border};
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 30px;
  }
`

type Props = {
  className?: string
}

export const Advantages = ({ className }: Props): ReactElement => {
  const data: LoaderData = useLoaderData()
  const { advantages } = data.room
  return (
    <Main className={className}>
      <Title>Key facts</Title>
      <List>
        {advantages.map((item, i) => (
          <Item key={i}>{item}</Item>
        ))}
      </List>
    </Main>
  )
}
