import { ReactElement } from 'react'
import styled from 'styled-components'
import { LoaderData } from '~/routes/rakeback-deals/$roomId'
import { useLoaderData } from '@remix-run/react'
import {
  accent,
  proximaNovaSb,
  pseudoAbsolute,
  secondaryDark,
  tertiary,
  widthAtLeast,
} from '~/styles/styles'
import { Button, Container, useSpoiler } from '~/components/Spoiler'

const Anchor = styled.a`
  font-family: ${proximaNovaSb};
  font-size: 14px;
  font-style: normal;
  line-height: 18px;
`

const Item = styled.li<{ unmarked: boolean }>`
  padding: 0 0 15px 15px;
  position: relative;
  &::before {
    ${pseudoAbsolute};
    z-index: 2;
    border-radius: 50%;
    left: 0;
    top: 3px;
    width: 9px;
    height: 9px;
  }
  &::after {
    ${pseudoAbsolute};
    z-index: 1;
    height: 100%;
  }
  &:last-child {
    padding-bottom: 0;
    &::after {
      display: none;
    }
  }
`

const UnmarkedItem = styled(Item)`
  color: ${accent};
  &::before {
    background: #c4c4c4;
    border: 2px solid #fff;
  }
  &::after {
    background: ${tertiary};
    top: 5px;
    left: 4px;
    width: 1px;
  }
`
const MarkedItem = styled(Item)`
  color: ${secondaryDark};
  &::before {
    background: #fff;
    border: 2px solid #ccc;
  }
  &::after {
    background: #ccc;
    top: 5px;
    left: 3px;
    width: 3px;
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

const ReButton = styled(Button)`
  background: url(/images/arrow-down-dark.svg) no-repeat 50%;
  width: 20px;
  height: 20px;
`

const TitleButtonSpan = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 36px;
  cursor: pointer;
`

const Main = styled.nav`
  border-radius: 10px;
  box-shadow: 0 5px 30px rgb(0 0 0 / 10%);
  padding: 16px 24px;

  @media ${widthAtLeast.md} {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`

type Props = {
  className?: string
}

export function Toc({ className }: Props): ReactElement {
  const data: LoaderData = useLoaderData()
  const { toc } = data.room
  const { ref, maxHeight, isButtonHidden, isButtonPressed, toggle } = useSpoiler(0)

  return (
    <Main ref={ref} className={className}>
      <TitleButtonSpan onClick={toggle}>
        <Title>Contents</Title>
        <ReButton isHidden={isButtonHidden} isPressed={isButtonPressed} />
      </TitleButtonSpan>
      <Container _ref={ref} maxHeight={maxHeight}>
        <List>
          {toc.map(({ title, anchor }) => (
            <UnmarkedItem key={anchor} unmarked={false}>
              <Anchor href={'#' + anchor}>{title}</Anchor>
            </UnmarkedItem>
          ))}
        </List>
      </Container>
    </Main>
  )
}
