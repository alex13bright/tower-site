import { ReactElement } from 'react'
import { Spoiler } from '~/components/Spoiler'
import styled from 'styled-components'

const Anchor = styled.a``
const Item = styled.li``
const List = styled.ul``
const Title = styled.div``
const Main = styled.div``

type TocItem = {
  title: string
  url: string
}

type Props = {
  className?: string
  toc: TocItem[]
}

export function Toc({ className, toc }: Props): ReactElement {
  return (
    <Spoiler className={className} height={20}>
      <Main>
        <Title>Contents</Title>
        <List>
          {toc.map(({ title, url }) => (
            <Item key={url}>
              <Anchor>{title}</Anchor>
            </Item>
          ))}
        </List>
      </Main>
    </Spoiler>
  )
}
