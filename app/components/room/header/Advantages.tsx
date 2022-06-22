import styled from 'styled-components'
import { ReactElement } from 'react'
import { headerTitle, sidePaddingSize } from '~/components/room/header/headerStyles'
import { border, sidePaddings, widthAtLeast } from '~/styles/styles'
import { LoaderData } from '~/routes/rakeback-deals/$roomId'
import { useLoaderData } from '@remix-run/react'

const Item = styled.li`
  display: flex;
  justify-content: start;
  column-gap: 20px;

  &::before {
    width: 20px;
    height: 20px;
    background-image: url('/images/rest/corona.svg');
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
  margin-bottom: 30px;

  grid-area: advantages;

  @media screen and ${widthAtLeast.md} {
    border-top: none;
    border-left: 1px solid ${border};
    padding-top: 0;
    margin-top: 30px;
    padding-left: ${sidePaddingSize.md};
  }

  @media screen and ${widthAtLeast.lg} {
    ${sidePaddings(sidePaddingSize.lg)};
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
