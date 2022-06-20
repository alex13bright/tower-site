import {
  createContext,
  MutableRefObject,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import styled from 'styled-components'
import { useSize } from '~/custom-hooks/useSize'

type SpoilerContextType = {
  containerRef: MutableRefObject<HTMLDivElement | null>
  maxHeight: string
  isButtonHidden: boolean
  isButtonPressed: boolean
  toggle: () => void
}
const Context = createContext<SpoilerContextType | null>(null)
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

export const useSpoiler = (height: number): SpoilerContextType => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isButtonHidden, setIsButtonHidden] = useState(true)
  const [isButtonPressed, setIsButtonPressed] = useState(false)

  const size = useSize(containerRef)
  const heightLimit = size === null ? height : Math.min(height, size.height)
  useEffect(() => {
    if (size === null) return
    setIsButtonHidden(size.height === heightLimit)
  }, [heightLimit, size, setIsButtonHidden])
  const maxHeight = isButtonPressed ? 'auto' : heightLimit + 'px'
  const toggle = () => setIsButtonPressed((isButtonPressed) => !isButtonPressed)
  return { containerRef, maxHeight, isButtonHidden, isButtonPressed, toggle }
}

type Props = {
  height: number
  children: ReactNode
}
export function SpoilerContext({ height, children }: Props): ReactElement {
  const context = useSpoiler(height)
  return <Context.Provider value={context}>{children}</Context.Provider>
}
