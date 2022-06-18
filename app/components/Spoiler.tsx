import { ReactElement, ReactNode, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useSize } from '~/custom-hooks/useSize'
import { Css } from '~/core/types'

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

const Button = styled.button<{ $isHidden: boolean; isPressed: boolean; $styles: Css<{}> }>`
  display: ${({ $isHidden }) => ($isHidden ? 'none' : 'block')};
  margin-top: 1px;
  margin-left: 1px;
  width: 20px;
  height: 20px;
  aspect-ratio: 1 / 1;
  background: url(/images/arrow-down.svg) no-repeat 50%;
  align-self: end;
  ${({ isPressed }) => (isPressed ? `transform: rotateX(180deg)` : '')};
  ${({ $styles }) => `${$styles}`};
`

type Props = {
  className?: string
  height: number
  children: ReactNode
  buttonStyles?: Css<{}>
}

export function Spoiler({ className, height, children, buttonStyles = '' }: Props): ReactElement {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isButtonHidden, setIsButtonHidden] = useState<boolean>(true)
  const [isButtonPressed, setIsButtonPressed] = useState<boolean>(false)

  const size = useSize(ref)
  const heightLimit = Math.min(height, size.height)
  useEffect(
    () => setIsButtonHidden(size.height === heightLimit),
    [heightLimit, size, setIsButtonHidden]
  )

  const activeHeight = isButtonPressed ? 'auto' : heightLimit + 'px'
  return (
    <Main className={className}>
      <Container activeHeight={activeHeight}>
        <Content ref={ref}>{children}</Content>
      </Container>
      <Button
        $isHidden={isButtonHidden}
        isPressed={isButtonPressed}
        onClick={() => setIsButtonPressed(!isButtonPressed)}
        $styles={buttonStyles}
      ></Button>
    </Main>
  )
}
