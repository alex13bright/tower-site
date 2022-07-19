import { createContext, ReactElement, ReactNode, useContext } from 'react'
import { Container, SpoilerType, useSpoiler } from '~/custom-hooks/useSpoiler'
import { ToggleFoldButton } from '~/components/ui/ToggleFoldButton'

const Context = createContext<SpoilerType | null>(null)
export const useSpoilerContext = () => {
  const context = useContext(Context)
  if (context === null) throw new Error('context is not found')
  return context
}

type SpoilerButtonProps = {
  children: ReactNode
  className?: string
}
export const SpoilerButton = ({ children, className }: SpoilerButtonProps) => {
  const { isButtonHidden, isButtonPressed, toggle } = useSpoilerContext()
  return (
    <ToggleFoldButton
      className={className}
      isHidden={isButtonHidden}
      isPressed={isButtonPressed}
      onClick={toggle}
    >
      {children}
    </ToggleFoldButton>
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
