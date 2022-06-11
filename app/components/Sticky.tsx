import React, {
  ReactElement,
  useState,
  useRef,
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
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
  const [state, setState] = useStickContext()
  useIsVisible((isVisible) => setState({ ...state, isMarkerVisible: isVisible.fullY }), ref)
  return <div ref={ref}>{children}</div>
}

export const StickyFooterWrapper = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [state, setState] = useStickContext()
  useIsVisible((isVisible) => setState({ ...state, isFooterVisible: isVisible.partially }), ref)
  return <div ref={ref}>{children}</div>
}

const StickyBox = styled.div<{ display: string }>`
  display: ${({ display }) => display};
  position: fixed;
  height: 50px;
  border: 3px solid yellowgreen;
`
export const StickyWrapper = ({ children }: { children: ReactNode }) => {
  const [state] = useStickContext()
  console.log(state)
  const display = !state.isFooterVisible && !state.isMarkerVisible ? 'block' : 'none'
  return <StickyBox display={display}>{children}</StickyBox>
}
