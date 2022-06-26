import { useCallback, useState } from 'react'

export const useToggle = (initIsFolded = true) => {
  const [isToggled, setIsToggled] = useState(initIsFolded)
  const toggle = useCallback(() => {
    setIsToggled((isToggled) => !isToggled)
  }, [])
  return { isToggled, toggle }
}
