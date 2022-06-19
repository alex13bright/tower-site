import { ReactElement, ReactNode } from 'react'
import { Button, Container, useSpoiler } from '~/components/Spoiler'
import styled from 'styled-components'

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 0;
  align-items: start;
`

export const ReButton = styled(Button)`
  margin-top: 1px;
  margin-left: 1px;
  width: 20px;
  height: 20px;
  background: url(/images/arrow-down.svg) no-repeat 50%;
  align-self: end;
`

type Props = {
  className?: string
  height: number
  children: ReactNode
}
export function Spoiler({ className, height, children }: Props): ReactElement {
  const { ref, maxHeight, isButtonHidden, isButtonPressed, handleClick } = useSpoiler(height)
  return (
    <Main className={className}>
      <Container _ref={ref} maxHeight={maxHeight}>
        {children}
      </Container>
      <ReButton isHidden={isButtonHidden} isPressed={isButtonPressed} onClick={handleClick} />
    </Main>
  )
}