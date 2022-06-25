import { useCallback, useState } from 'react'

export const useFold = (initIsFolded = true) => {
  const [isFolded, setIsFolded] = useState(initIsFolded)
  const toggle = useCallback(() => {
    setIsFolded((isFolded) => !isFolded)
  }, [])
  return { isFolded, toggle }
}
