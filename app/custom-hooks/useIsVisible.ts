import { MutableRefObject, useEffect, useState } from 'react'

export type IsVisible = {
  fullY: boolean
  partially: boolean
}

export const useIsVisible = (ref: MutableRefObject<HTMLDivElement | null>): IsVisible => {
  const [isVisible, setIsVisible] = useState<IsVisible>({ fullY: false, partially: false })
  useEffect(() => {
    if (ref.current === null) throw new Error(`ref can't be null`)
    const _refCurrent = ref.current
    const Observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        setIsVisible({
          fullY: entry.intersectionRatio === 1,
          partially: entry.isIntersecting,
        })
      },
      { threshold: [0, 1] }
    )
    Observer.observe(ref.current)
    return () => {
      Observer.unobserve(_refCurrent)
    }
  }, [ref])
  return isVisible
}
