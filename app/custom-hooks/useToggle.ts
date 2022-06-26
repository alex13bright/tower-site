import { useCallback, useState } from 'react'

export const useToggle = (init = false) => {
  const [isToggled, setIsToggled] = useState(init)
  const toggle = useCallback(() => {
    setIsToggled((isToggled) => !isToggled)
  }, [])
  return { isToggled, toggle }
}
