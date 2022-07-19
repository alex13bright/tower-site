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

export const StickyContext = ({ children }: { children?: ReactNode }): ReactElement => {
  const stateWithSetter = useState<State>({ isMarkerVisible: true, isFooterVisible: true })
  return <Context.Provider value={stateWithSetter}>{children}</Context.Provider>
}

export const useStickyContext = () => {
  const context = useContext(Context)
  if (context === null) throw new Error(`StickyContext is not found`)
  return context
}

type StickyMarkerProps = {
  isVisibleKey: 'isMarkerVisible' | 'isFooterVisible'
  children: ReactNode
}

const StickyMarkerMain = styled.div`
  display: grid;
`
export const StickyMarker = ({ isVisibleKey, children }: StickyMarkerProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [_, stickyContextSetState] = useStickyContext()
  const isVisible = useIsVisible(ref)
  useEffect(() => {
    if (isVisible === null) return
    stickyContextSetState((state) => ({ ...state, [isVisibleKey]: isVisible }))
  }, [isVisibleKey, isVisible, stickyContextSetState])
  return <StickyMarkerMain ref={ref}>{children}</StickyMarkerMain>
}

const StickyBox = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'grid' : 'none')};
  position: fixed;
  left: 0;
  bottom: 0;
  height: 100px;
  width: 100%;
  background-color: grey;
`

export const StickyActions = ({ children }: { children: ReactNode }) => {
  const [state] = useStickyContext()
  const isVisible = !state.isFooterVisible && !state.isMarkerVisible
  return <StickyBox isVisible={isVisible}>{children}</StickyBox>
}
