import styled from 'styled-components'
import { ReactElement } from 'react'
import { headerTitle, sidePaddingSize } from '~/components/room/header/headerStyles'
import { border, sidePaddings, widthAtLeast } from '~/styles/styles'
import { useLoaderData } from '@remix-run/react'
import { LoaderData } from '~/routes/rakeback-deals/$roomPageSlug'

const Item = styled.li`
  display: flex;
  justify-content: start;
  column-gap: 20px;

  &::before {
    width: 20px;
    height: 20px;
    background-image: url('/images/main/corona.svg');
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

  grid-area: keyFacts;

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

export const KeyFacts = ({ className }: Props): ReactElement => {
  const data = useLoaderData<LoaderData>()
  const { keyFacts } = data.room
  return (
    <Main className={className}>
      <Title>Key facts</Title>
      <List>
        {keyFacts.map((fact: string, i: number) => (
          <Item key={i}>{fact}</Item>
        ))}
      </List>
    </Main>
  )
}
