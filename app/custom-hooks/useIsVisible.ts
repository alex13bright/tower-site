import { MutableRefObject, useEffect, useState } from 'react'

export const useIsVisible = (ref: MutableRefObject<HTMLElement | null>): null | boolean => {
  const [isVisible, setIsVisible] = useState<null | boolean>(null)
  useEffect(() => {
    if (ref.current === null) throw new Error(`ref is not used on any element`)
    const _refCurrent = ref.current
    const Observer = new IntersectionObserver((entries) => {
      const [entry] = entries
      setIsVisible(entry.isIntersecting)
    })
    Observer.observe(ref.current)
    return () => {
      Observer.unobserve(_refCurrent)
    }
  }, [ref])
  return isVisible
}
