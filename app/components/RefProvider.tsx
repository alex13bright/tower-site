/*
import React, {
  ReactElement,
  useState,
  useRef,
  createContext,
  useContext,
  ReactNode,
  useEffect,
  Dispatch,
  SetStateAction,
  MutableRefObject,
} from 'react'
import { omit } from 'lodash'
import styled, { css } from 'styled-components'

type Refs = {
  [id: string]: MutableRefObject<unknown>
}
type StateSetState = [Refs, Dispatch<SetStateAction<Refs>>]
const initialRefs = {}
const Context = createContext<StateSetState | null>(null)

type RefsStoreProps = {
  children?: ReactNode
}
export const RefsStore = ({ children }: RefsStoreProps): ReactElement => {
  const [renderCount, setRenderCount] = useState(0)

  const stateSetState = useState<Refs>(initialRefs) // can't come up with any decent name...
  return <Context.Provider value={stateSetState}>{children}</Context.Provider>
}

export const useRefWithStore = (id: string): void => {
  const ref = useRef<HTMLDivElement>(null)
  const stateSetState = useContext(Context)
  if (stateSetState === null) throw new Error(`RefsProvider not found`)
  useEffect(() => {
    const [refs, setRefs] = stateSetState
    if (refs[id]) throw new Error('id must be unique')
    setRefs((refs) => ({ ...refs, [id]: ref }))
    return () => {
      setRefs((refs) => omit(refs, id))
    }
  }, [id, stateSetState])
  return ref
}

export const useParentRef = () => {
  // return
}

const DISPLAY_DELAY_OFFSET = 0

const tempSameStyle = css`
  color: black;
  background-color: white;
  padding: 10px;
  border: 2px solid black;
  border-radius: 10px;
`

const Normal = styled.div`
  ${tempSameStyle};
`
const Sticky = styled.div`
  ${tempSameStyle};
  position: fixed;
  bottom: 100px;
`
export const Sticky = (): ReactElement => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const normalRef: any = createRef()

  useScroll(() => {
    const offsetTop = normalRef.current.offsetTop
    const offsetHeight = normalRef.current.offsetHeight
    if (window.scrollY > offsetTop + offsetHeight + DISPLAY_DELAY_OFFSET) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  })

  return (
    <>
      <Normal ref={normalRef}>Normal</Normal>
      {isVisible && <Sticky>Sticky</Sticky>}
    </>
  )
}

// export const useSticky = (parentId) => {
//   const [state] = useContext(StickyContext.Provider)
//   return state[parentId]
// }
*/

export const a = null
