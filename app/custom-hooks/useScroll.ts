import { useEffect } from 'react'
import { debounce } from 'lodash'

const DELAY = 50

type Handler = (event: WindowEventMap['scroll']) => void

export const useScroll = (handler: Handler): void => {
  useEffect(() => {
    const debouncedHandler = debounce(handler, DELAY)
    window.addEventListener('scroll', debouncedHandler)
    return () => {
      window.removeEventListener('scroll', debouncedHandler)
    }
  }, [handler])
}
