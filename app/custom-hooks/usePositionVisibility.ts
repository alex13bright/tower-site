import { MutableRefObject, useEffect, useState } from 'react'

export type PositionVisibility = 'top' | 'visible' | 'bottom'
export const usePositionVisibility = (
  ref: MutableRefObject<HTMLElement | null>
): null | PositionVisibility => {
  const [positionVisibility, setPositionVisibility] = useState<null | PositionVisibility>(null)
  useEffect(() => {
    if (ref.current === null) throw new Error(`ref is not used on any element`)
    const _refCurrent = ref.current
    const Observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        const { isIntersecting, boundingClientRect } = entry
        if (isIntersecting) {
          setPositionVisibility('visible')
        } else {
          setPositionVisibility(boundingClientRect.top > 0 ? 'bottom' : 'top')
        }
      },
      {
        threshold: 1.0,
      }
    )
    Observer.observe(ref.current)
    return () => {
      Observer.unobserve(_refCurrent)
    }
  }, [ref])
  return positionVisibility
}
