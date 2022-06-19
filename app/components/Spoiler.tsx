import {
  createContext,
  MutableRefObject,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import styled from 'styled-components'
import { useSize } from '~/custom-hooks/useSize'

type SpoilerContextType = {
  ref: MutableRefObject<HTMLDivElement | null>
  maxHeight: string
  isButtonHidden: boolean
  isButtonPressed: boolean
  handleClick: () => void
}
const Context = createContext<SpoilerContextType | null>(null)
export const useSpoilerContext = () => {
  const context = useContext(Context)
  if (context === null) throw new Error('context is not found')
  return context
}

export const Button = styled.button<{ isHidden: boolean; isPressed: boolean }>`
  display: ${({ isHidden }) => (isHidden ? 'none' : 'block')};
  ${({ isPressed }) => (isPressed ? `transform: rotateX(180deg)` : '')};
`
type SpoilerButtonProps = {
  children: ReactNode
  className?: string
}
export const SpoilerButton = ({ children, className }: SpoilerButtonProps) => {
  const { isButtonHidden, isButtonPressed, handleClick } = useSpoilerContext()
  return (
    <Button
      className={className}
      isHidden={isButtonHidden}
      isPressed={isButtonPressed}
      onClick={handleClick}
    >
      {children}
    </Button>
  )
}

const Box = styled.div<{ maxHeight: string }>`
  overflow: hidden;
  max-height: ${({ maxHeight }) => maxHeight};
`
type ContainerProps = {
  _ref: MutableRefObject<HTMLDivElement | null>
  maxHeight: string
  children: ReactNode
}
export const Container = ({ _ref, maxHeight, children }: ContainerProps): ReactElement => {
  return (
    <Box maxHeight={maxHeight}>
      <div ref={_ref}>{children}</div>
    </Box>
  )
}
export const SpoilerContainer = ({ children }: { children: ReactNode }): ReactElement => {
  const { ref, maxHeight } = useSpoilerContext()
  return (
    <Container _ref={ref} maxHeight={maxHeight}>
      {children}
    </Container>
  )
}

export const useSpoiler = (height: number): SpoilerContextType => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isButtonHidden, setIsButtonHidden] = useState<boolean>(true)
  const [isButtonPressed, setIsButtonPressed] = useState<boolean>(false)

  const size = useSize(ref)
  const heightLimit = size.height < 0 ? height : Math.min(height, size.height)
  useEffect(() => {
    setIsButtonHidden(size.height === heightLimit)
  }, [heightLimit, size, setIsButtonHidden])
  const maxHeight = isButtonPressed ? 'auto' : heightLimit + 'px'
  const handleClick = () => setIsButtonPressed((isButtonPressed) => !isButtonPressed)
  return { ref, maxHeight, isButtonHidden, isButtonPressed, handleClick }
}

type Props = {
  height: number
  children: ReactNode
}
export function SpoilerContext({ height, children }: Props): ReactElement {
  const { ref, maxHeight, isButtonHidden, isButtonPressed, handleClick } = useSpoiler(height)
  const memo = useMemo(
    () => ({ ref, maxHeight, isButtonHidden, isButtonPressed, handleClick }),
    [ref, maxHeight, isButtonHidden, isButtonPressed, handleClick]
  )
  return <Context.Provider value={memo}>{children}</Context.Provider>
}
