import styled from 'styled-components'
import { createContext, MutableRefObject, ReactElement, ReactNode, useContext } from 'react'
import { SpoilerType, useSpoiler } from '~/custom-hooks/useSpoiler'

const Context = createContext<SpoilerType | null>(null)
export const useSpoilerContext = () => {
  const context = useContext(Context)
  if (context === null) throw new Error('context is not found')
  return context
}

export const UtilityButton = styled.button<{ isHidden: boolean; isPressed: boolean }>`
  display: ${({ isHidden }) => (isHidden ? 'none' : 'block')};
  ${({ isPressed }) => (isPressed ? `transform: rotateX(180deg)` : '')};
`
type SpoilerButtonProps = {
  children: ReactNode
  className?: string
}
export const UtilitySpoilerButton = ({ children, className }: SpoilerButtonProps) => {
  const { isButtonHidden, isButtonPressed, toggle } = useSpoilerContext()
  return (
    <UtilityButton
      className={className}
      isHidden={isButtonHidden}
      isPressed={isButtonPressed}
      onClick={toggle}
    >
      {children}
    </UtilityButton>
  )
}

const Box = styled.div<{ maxHeight: string }>`
  overflow: hidden;
  max-height: ${({ maxHeight }) => maxHeight};
`
type ContainerProps = {
  containerRef: MutableRefObject<HTMLDivElement | null>
  maxHeight: string
  children: ReactNode
  className?: string
}
export const Container = ({
  containerRef,
  maxHeight,
  children,
  className,
}: ContainerProps): ReactElement => {
  return (
    <Box maxHeight={maxHeight} className={className}>
      <div ref={containerRef}>{children}</div>
    </Box>
  )
}
type SpoilerContainerProps = {
  children: ReactNode
  className?: string
}
export const SpoilerContainer = ({ children, className }: SpoilerContainerProps): ReactElement => {
  const { containerRef, maxHeight } = useSpoilerContext()
  return (
    <Container containerRef={containerRef} maxHeight={maxHeight} className={className}>
      {children}
    </Container>
  )
}

type Props = {
  height: number
  children: ReactNode
}
export function SpoilerContext({ height, children }: Props): ReactElement {
  const context = useSpoiler(height)
  return <Context.Provider value={context}>{children}</Context.Provider>
}
