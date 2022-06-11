import { MutableRefObject, useEffect } from 'react'

export type IsVisible = {
  fullY: boolean
  partially: boolean
}

export const useIsVisible = (
  callback: (isVisible: IsVisible) => void,
  ref: MutableRefObject<HTMLDivElement | null>
): void => {
  // const [isVisible, setIsVisible] = useState<IsVisible>({ fullY: false, partially: false })
  useEffect(() => {
    if (ref.current === null) throw new Error(`ref can't be null`)
    const _refCurrent = ref.current
    const Observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        callback({
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
  }, [callback, ref])
  // return visibility
}
