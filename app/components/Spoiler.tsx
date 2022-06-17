import { ReactElement, ReactNode, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useSize } from '~/custom-hooks/useSize'

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 0;
  align-items: start;
`

const Container = styled.div<{ activeHeight: string }>`
  overflow: hidden;
  max-height: ${({ activeHeight }) => activeHeight};
`

const Content = styled.div``

const Button = styled.button<{ $isHidden: boolean; isPressed: boolean }>`
  display: ${({ $isHidden }) => ($isHidden ? 'none' : 'block')};
  margin-top: 1px;
  margin-left: 1px;
  width: 20px;
  height: 20px;
  aspect-ratio: 1 / 1;
  background: url(/images/arrow-down.svg) no-repeat 50%;
  ${({ isPressed }) => (isPressed ? `transform: rotateX(180deg)` : '')};
  align-self: end;
`

type Props = {
  height: number
  children: ReactNode
}

export function Spoiler({ height, children }: Props): ReactElement {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isButtonHidden, setIsButtonHidden] = useState<boolean>(true)
  const [isPressed, setIsPressed] = useState<boolean>(false)

  const size = useSize(ref)
  const heightLimit = Math.min(height, size.height)
  useEffect(
    () => setIsButtonHidden(size.height === heightLimit),
    [heightLimit, size, setIsButtonHidden]
  )

  const activeHeight = isPressed ? 'auto' : heightLimit + 'px'
  return (
    <Main>
      <Container activeHeight={activeHeight}>
        <Content ref={ref}>{children}</Content>
      </Container>
      <Button
        $isHidden={isButtonHidden}
        isPressed={isPressed}
        onClick={() => setIsPressed(!isPressed)}
      ></Button>
    </Main>
  )
}
