import { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'
import { Container, useSpoiler } from '~/custom-hooks/useSpoiler'
import { ToggleFoldButton } from '~/components/ui/ToggleFoldButton'

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 0;
  align-items: start;
`

export const StyledButton = styled(ToggleFoldButton)`
  width: 20px;
  height: 20px;
  background: url('/decorations/arrow-down.svg') no-repeat 50%;
  align-self: end;
`

type Props = {
  className?: string
  height: number
  children: ReactNode
}
export function HeaderValuesSpoiler({ className, height, children }: Props): ReactElement {
  const { containerRef, maxHeight, isButtonHidden, isButtonPressed, toggle } = useSpoiler(height)
  return (
    <Main className={className}>
      <Container containerRef={containerRef} maxHeight={maxHeight}>
        {children}
      </Container>
      <StyledButton isHidden={isButtonHidden} isPressed={isButtonPressed} onClick={toggle} />
    </Main>
  )
}
