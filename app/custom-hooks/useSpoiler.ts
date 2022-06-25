import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { useSize } from '~/custom-hooks/useSize'

export type SpoilerType = {
  containerRef: MutableRefObject<HTMLDivElement | null>
  maxHeight: string
  toggle: () => void
  isButtonHidden: boolean
  isButtonPressed: boolean
  contentHeight: null | number
}

export const useSpoiler = (height: number): SpoilerType => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isButtonHidden, setIsButtonHidden] = useState(true)
  const [isButtonPressed, setIsButtonPressed] = useState(false)
  const [contentHeight, setContentHeight] = useState<null | number>(null)

  const size = useSize(containerRef)
  if (size !== null && size.height !== contentHeight) setContentHeight(size.height)
  const heightLimit = size === null ? height : Math.min(height, size.height)
  useEffect(() => {
    if (size === null) return
    setIsButtonHidden(size.height === heightLimit)
  }, [heightLimit, size, setIsButtonHidden])
  const maxHeight = isButtonPressed ? 'auto' : heightLimit + 'px'
  const toggle = () => setIsButtonPressed((isButtonPressed) => !isButtonPressed)
  return { containerRef, maxHeight, toggle, isButtonHidden, isButtonPressed, contentHeight }
}
