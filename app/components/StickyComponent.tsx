import { ReactElement, useState, createRef } from 'react'
import styled, { css } from 'styled-components'
import { useScroll } from '~/custom-hooks/useScroll'

const DISPLAY_DELAY_OFFSET = 0

const tempSameStyle = css`
  color: black;
  background-color: white;
  padding: 10px;
  border: 2px solid black;
  border-radius: 10px;
`

const Normal = styled.div`
  ${tempSameStyle};
`
const Sticky = styled.div`
  ${tempSameStyle};
  position: fixed;
  bottom: 100px;
`
export const StickyComponent = (): ReactElement => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  // todo: define type
  const normalRef: any = createRef()

  useScroll(() => {
    const offsetTop = normalRef.current.offsetTop
    const offsetHeight = normalRef.current.offsetHeight
    if (window.scrollY > offsetTop + offsetHeight + DISPLAY_DELAY_OFFSET) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  })

  return (
    <>
      <Normal ref={normalRef}>Normal</Normal>
      {isVisible && <Sticky>Sticky</Sticky>}
    </>
  )
}
