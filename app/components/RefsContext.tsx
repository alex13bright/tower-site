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

type State = {
  [id: string]: MutableRefObject<unknown>
}

type ContextType = [State, Dispatch<SetStateAction<State>>]

const Context = createContext<ContextType | null>(null)

export const RefsContext = ({ children }: { children?: ReactNode }): ReactElement => {
  const stateWithSetter = useState<State>({})
  return <Context.Provider value={stateWithSetter}>{children}</Context.Provider>
}

export const useContextRef = (id: string): MutableRefObject<unknown> => {
  const ref = useRef<HTMLDivElement>(null)
  const stateSetState = useContext(Context)
  if (stateSetState === null) throw new Error(`RefsContext not found`)
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
