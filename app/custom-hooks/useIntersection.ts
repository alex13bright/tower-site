import { useEffect, useRef, useState } from 'react'

export const useIntersectionEffect = (): void => {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const ref = useRef<HTMLDivElement | null>(null)

  const [isVisible, setIsVisible] = useState<boolean>(false)
  useEffect(() => {
    if (rootRef.current === null) throw new Error(`rooRef can't be null`)
    if (ref.current === null) throw new Error(`ref can't be null`)
    const _refCurrent = ref.current
    const Observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
      },
      {
        root: rootRef.current,
        threshold: [1],
      }
    )
    Observer.observe(ref.current)
    return () => {
      Observer.unobserve(_refCurrent)
    }
  }, [setIsVisible, rootRef, ref])
}
