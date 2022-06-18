import { ReactElement } from 'react'
import { Spoiler } from '~/components/Spoiler'
import styled, { css } from 'styled-components'
import { LoaderData } from '~/routes/rakeback-deals/$roomId'
import { useLoaderData } from '@remix-run/react'

const Anchor = styled.a``
const Item = styled.li``
const List = styled.ul``
const Title = styled.div``
const Content = styled.div``
const Main = styled.div``
const ReSpoiler = styled(Spoiler)`
  display: flex;
`
const buttonStyles = css`
  background: url(/images/arrow-down-dark.svg) no-repeat 50%;
  align-self: start;
`

type Props = {
  className?: string
}

export function Toc({ className }: Props): ReactElement {
  const data: LoaderData = useLoaderData()
  const { toc } = data.room
  return (
    <Main className={className}>
      <ReSpoiler height={20} buttonStyles={buttonStyles}>
        <Content>
          <Title>Contents</Title>
          <List>
            {toc.map(({ title, anchor }) => (
              <Item key={anchor}>
                <Anchor href={'#' + anchor}>{title}</Anchor>
              </Item>
            ))}
          </List>
        </Content>
      </ReSpoiler>
    </Main>
  )
}
