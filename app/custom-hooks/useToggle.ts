import { useCallback, useState } from 'react'

export const useToggle = (init: boolean): [boolean, () => void] => {
  const [isToggled, setIsToggled] = useState(init)
  const toggle = useCallback(() => {
    setIsToggled((isToggled) => !isToggled)
  }, [])
  return [isToggled, toggle]
}
