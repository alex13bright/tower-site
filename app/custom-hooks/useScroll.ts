import { useEffect } from 'react'

export const useScroll = (handler: any) => {
  useEffect(() => {
    window.addEventListener('scroll', handler)
    return () => {
      window.removeEventListener('scroll', handler)
    }
  }, [handler])
}
