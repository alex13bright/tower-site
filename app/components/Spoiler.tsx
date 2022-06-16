import { ReactElement, ReactNode, useState } from 'react'
import styled from 'styled-components'

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 10px;
  align-items: center;
`

const Container = styled.div<{ activeHeight: string }>`
  overflow: hidden;
  height: ${({ activeHeight }) => activeHeight};
`
const Button = styled.button<{ height: string; isPressed: boolean }>`
  height: ${({ height }) => height};
  aspect-ratio: 1 / 1;
  background: url(/images/arrow-down.svg) no-repeat 50%;
  ${({ isPressed }) => (isPressed ? `transform: rotateX(180deg)` : '')};
`

type Props = {
  height: string
  children: ReactNode
}

export function Spoiler({ height, children }: Props): ReactElement {
  const [hidden, setHidden] = useState<boolean>(false)
  const activeHeight = hidden ? height : 'auto'
  return (
    <Main>
      <Container activeHeight={activeHeight}>{children}</Container>
      <Button
        height={height}
        isPressed={hidden}
        onClick={() => setHidden((hidden) => !hidden)}
      ></Button>
    </Main>
  )
}
