import { ReactElement } from 'react'
import styled from 'styled-components'
import { AsideBarTitle } from '~/components/common/AsideBarTitle'
import { widthAtLeast } from '~/styles/styles'
import { pageContentColumnsGap } from '~/components/common/styles'

const Image = styled.img`
  width: 80px;
  height: 80px;
`

const Content = styled.p``

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`

const List = styled.ul`
  padding: 10px;

  @media screen and ${widthAtLeast.md} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: ${pageContentColumnsGap};
  }

  @media screen and ${widthAtLeast.lg} {
    grid-template-columns: 1fr;
  }
`

const Main = styled.div`
  grid-area: news;
  display: grid;
  row-gap: 20px;
`

type Props = {
  className?: string
}

export const News = ({ className }: Props): ReactElement => {
  return (
    <Main className={className}>
      <AsideBarTitle>GGPoker latest news</AsideBarTitle>
      <List>
        <Item>
          <Image />
          <Content>news 1</Content>
        </Item>
        <Item>
          <Image />
          <Content>news 1</Content>
        </Item>
      </List>
    </Main>
  )
}
