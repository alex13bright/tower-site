import { ReactElement } from 'react'
import { StyledSpoiler } from '~/components/StyledSpoiler'
import styled, { css } from 'styled-components'
import { LoaderData } from '~/routes/rakeback-deals/$roomId'
import { useLoaderData } from '@remix-run/react'
import { accent, proximaNovaSb, pseudoAbsolute, tertiary } from '~/styles/styles'

const Anchor = styled.a`
  font-family: ${proximaNovaSb};
  font-size: 14px;
  font-style: normal;
  line-height: 18px;
`
const Item = styled.li`
  color: ${accent};
  padding: 0 0 15px 15px;
  position: relative;
  &::before {
    ${pseudoAbsolute};
    background: #c4c4c4;
    border: 2px solid #fff;
    border-radius: 50%;
    left: 0;
    top: 3px;
    width: 9px;
    height: 9px;
  }
  &::after {
    ${pseudoAbsolute};
    background: ${tertiary};
    left: 4px;
    top: 5px;
    width: 1px;
    height: 100%;
  }
  &:last-child {
    padding-bottom: 0;
    &::after {
      display: none;
    }
  }
`
const List = styled.ul`
  padding: 16px 0;
`
const Title = styled.div`
  color: #243238;
  font-size: 16px;
  line-height: 36px;
  font-style: normal;
  font-weight: bold;
`
const Content = styled.div``
const Main = styled.nav`
  margin-top: 40px;
  margin-bottom: 40px;
`

const ReSpoiler = styled(StyledSpoiler)`
  display: flex;
  position: relative;
  margin-top: 16px;
  border-radius: 10px;
  box-shadow: 0 5px 30px rgb(0 0 0 / 10%);
  padding: 16px 20px;
`

const buttonStyles = css`
  background: url(/images/arrow-down-dark.svg) no-repeat 50%;
  position: absolute;
  top: 20px;
  right: 20px;
`

type Props = {
  className?: string
}

export function Toc({ className }: Props): ReactElement {
  const data: LoaderData = useLoaderData()
  const { toc } = data.room
  return (
    <Main className={className}>
      <ReSpoiler height={36} buttonStyles={buttonStyles}>
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
