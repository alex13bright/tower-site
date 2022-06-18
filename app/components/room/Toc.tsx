import { ReactElement } from 'react'
import { Spoiler } from '~/components/Spoiler'
import styled from 'styled-components'
import { LoaderData } from '~/routes/rakeback-deals/$roomId'
import { useLoaderData } from '@remix-run/react'

const Anchor = styled.a``
const Item = styled.li``
const List = styled.ul``
const Title = styled.div``
const Main = styled.div``

type Props = {
  className?: string
}

export function Toc({ className }: Props): ReactElement {
  const data: LoaderData = useLoaderData()
  const { toc } = data.room
  return (
    <Spoiler className={className} height={20}>
      <Main>
        <Title>Contents</Title>
        <List>
          {toc.map(({ title, anchor }) => (
            <Item key={anchor}>
              <Anchor href={'#' + anchor}>{title}</Anchor>
            </Item>
          ))}
        </List>
      </Main>
    </Spoiler>
  )
}
