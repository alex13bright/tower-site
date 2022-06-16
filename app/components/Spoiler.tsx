import { ReactElement, ReactNode, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 0;
  align-items: start;
  position: relative;
`

const Container = styled.div<{ activeHeight: string }>`
  overflow: hidden;
  height: ${({ activeHeight }) => activeHeight};
`
const Content = styled.div``
const Button = styled.button<{ $isHidden: boolean; $height: string; isPressed: boolean }>`
  display: ${({ $isHidden }) => ($isHidden ? 'none' : 'block')};
  margin-top: 2px;
  margin-left: 2px;
  width: 20px;
  height: ${({ $height }) => $height};
  aspect-ratio: 1 / 1;
  background: url(/images/arrow-down.svg) no-repeat 50%;
  ${({ isPressed }) => (isPressed ? `transform: rotateX(180deg)` : '')};
`

type Props = {
  height: number
  children: ReactNode
}

export function Spoiler({ height, children }: Props): ReactElement {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isButtonHidden, setIsButtonHidden] = useState<boolean>(true)
  useEffect(() => {
    if (ref.current === null) throw new Error(`ref can't be null`)
    const _refCurrent = ref.current
    const Observer = new ResizeObserver((entries) => {
      const [entry] = entries
      setIsButtonHidden(entry.contentRect.height === height)
    })
    Observer.observe(ref.current)
    return () => {
      Observer.unobserve(_refCurrent)
    }
  }, [height, ref, setIsButtonHidden])

  const heightString = height + 'px'
  const [isPressed, setIsPressed] = useState<boolean>(false)
  const activeHeight = isPressed ? 'auto' : heightString
  return (
    <Main>
      <Container activeHeight={activeHeight}>
        <Content ref={ref}>{children}</Content>
      </Container>
      <Button
        $isHidden={isButtonHidden}
        $height={heightString}
        isPressed={isPressed}
        onClick={() => setIsPressed(!isPressed)}
      ></Button>
    </Main>
  )
}
