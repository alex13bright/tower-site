import { ReactElement, ReactNode, useState } from 'react'
import styled from 'styled-components'

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 0;
  align-items: center;
  position: relative;
`

const Container = styled.div<{ activeHeight: string }>`
  overflow: hidden;
  height: ${({ activeHeight }) => activeHeight};
`
const Button = styled.button<{ height: string; $hidden: boolean }>`
  width: 20px;
  margin-right: -20px;
  height: ${({ height }) => height};
  aspect-ratio: 1 / 1;
  background: url(/images/arrow-down.svg) no-repeat 50%;
  ${({ $hidden }) => ($hidden ? '' : `transform: rotateX(180deg)`)};
`

type Props = {
  height: string
  children: ReactNode
}

export function Spoiler({ height, children }: Props): ReactElement {
  const [hidden, setHidden] = useState<boolean>(true)
  const activeHeight = hidden ? height : 'auto'
  return (
    <Main>
      <Container activeHeight={activeHeight}>{children}</Container>
      <Button height={height} $hidden onClick={() => setHidden((hidden) => !hidden)}></Button>
    </Main>
  )
}
