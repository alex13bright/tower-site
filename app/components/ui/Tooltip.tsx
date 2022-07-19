import { ReactElement, ReactNode, useRef, useState } from 'react'
import styled from 'styled-components'

const TooltipBox = styled.div`
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  padding: 5px;
  position: absolute;
  top: -45px;
  right: 0;
  border-radius: 4px;
`

const Main = styled.div`
  position: relative;
`

type Props = {
  message: string
  children: ReactNode
  className?: string
}

export const Tooltip = ({ children, className, message }: Props): ReactElement => {
  const timerId = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const handleClick = async () => {
    if (timerId.current !== null) {
      clearTimeout(timerId.current)
    } else {
      setIsVisible(true)
    }
    timerId.current = setTimeout(() => {
      setIsVisible(false)
      if (timerId.current === null) throw new Error('timerId.current impossible to be null')
      clearTimeout(timerId.current)
      timerId.current = null
    }, 1000)
  }
  return (
    <Main className={className} onClick={handleClick}>
      {isVisible && <TooltipBox>{message}</TooltipBox>}
      {children}
    </Main>
  )
}
