import { useEffect } from 'react'
import { debounce } from 'lodash'

const DELAY = 50

type UseScroll = (memoizedHandler: (event: WindowEventMap['scroll']) => void) => void
export const useScroll: UseScroll = (handler) => {
  useEffect(() => {
    const debouncedHandler = debounce(handler, DELAY)
    window.addEventListener('scroll', debouncedHandler)
    return () => {
      window.removeEventListener('scroll', debouncedHandler)
    }
  }, [handler])
}
