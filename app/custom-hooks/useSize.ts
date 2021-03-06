import { MutableRefObject, useEffect, useState } from 'react'

export const useSize = (ref: MutableRefObject<HTMLElement | null>) => {
  const [size, setSize] = useState<{ width: number; height: number } | null>(null)
  useEffect(() => {
    if (ref.current === null) throw new Error(`ref is not used on any element`)
    const _refCurrent = ref.current
    const Observer = new ResizeObserver((entries) => {
      const [entry] = entries
      const { width, height } = entry.contentRect
      setSize({ width, height })
    })
    Observer.observe(ref.current)
    return () => {
      Observer.unobserve(_refCurrent)
    }
  }, [ref, setSize])
  return size
}
