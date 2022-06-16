import { MutableRefObject, useEffect, useState } from 'react'

export const useSize = (ref: MutableRefObject<HTMLDivElement | null>) => {
  const [size, setSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 })
  useEffect(() => {
    if (ref.current === null) throw new Error(`ref can't be null`)
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
