import React, {
  ReactElement,
  useState,
  useRef,
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react'
import styled from 'styled-components'
import { useIsVisible } from '~/custom-hooks/useIsVisible'

type State = {
  isMarkerVisible: boolean
  isFooterVisible: boolean
}

type ContextType = [State, Dispatch<SetStateAction<State>>]

const Context = createContext<ContextType | null>(null)

type Props = {
  children?: ReactNode
}

export const StickyContext = ({ children }: Props): ReactElement => {
  const stateWithSetter = useState<State>({ isMarkerVisible: false, isFooterVisible: false })
  return <Context.Provider value={stateWithSetter}>{children}</Context.Provider>
}

export const useStickContext = () => {
  const context = useContext(Context)
  if (context === null) throw new Error(`StickyContext is not found`)
  return context
}

// wrappers or using custom hooks inside of components?
export const StickyMarkerWrapper = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [_, setState] = useStickContext()
  const isVisible = useIsVisible(ref)
  useEffect(() => {
    setState((state) => ({ ...state, isMarkerVisible: isVisible }))
  }, [setState, isVisible])
  return <div ref={ref}>{children}</div>
}

export const StickyFooterWrapper = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [_, setState] = useStickContext()
  const isVisible = useIsVisible(ref)
  useEffect(() => {
    setState((state) => ({ ...state, isFooterVisible: isVisible }))
  }, [setState, isVisible])
  return <div ref={ref}>{children}</div>
}

const StickyBox = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'grid' : 'none')};
  position: fixed;
  bottom: 0;
  height: 50px;
  place-items: center;
  color: yellowgreen;
  background-color: black;
  border: 3px solid yellowgreen;
`
export const StickyWrapper = ({ children }: { children: ReactNode }) => {
  const [state] = useStickContext()
  const isVisible = !state.isFooterVisible && !state.isMarkerVisible
  return <StickyBox isVisible={isVisible}>{children}</StickyBox>
}
