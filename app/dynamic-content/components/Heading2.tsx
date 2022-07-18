import styled from 'styled-components'
import { ReactElement, useEffect, useRef, useState } from 'react'
import { slugify } from '~/core/singletons'
import { useTocContext } from '~/components/room/PageContent'
import { useIsVisible } from '~/custom-hooks/useIsVisible'
import { hCss } from '~/dynamic-content/components/content'

export const StyledH2 = styled.h2`
  ${hCss};
  font-size: 24px;
  margin: 40px 0 20px;

  position: relative;
  padding-top: 12px;

  &::before {
    background: url('/images/main/h2-line.svg') no-repeat 50%;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 42px;
    height: 2px;
  }
`
type Heading2Props = {
  children: ReactElement
}

export const Heading2 = ({ children }: Heading2Props): ReactElement => {
  const title = children.props.children
  const id = slugify(title)
  const ref = useRef<HTMLHeadingElement>(null)
  const { scrollsWithSetter, visibility } = useTocContext()
  const [state, setState] = useState<HTMLHeadingElement | null>(null)
  const { handler } = visibility
  const isVisible = useIsVisible(ref)
  useEffect(() => {
    if (isVisible === null) return
    handler(id, isVisible)
  }, [handler, id, isVisible])

  const { scrolls, setScrolls } = scrollsWithSetter
  useEffect(() => {
    if (state === null) return
    if (scrolls[id]) return
    setScrolls((scrolls) => ({
      ...scrolls,
      [id]: {
        scroll: () => {
          // console.log(ref.current) todo: why null???
          // console.log(state.scrollIntoView) todo: why broken?
          const realRef = document.getElementById(id)
          if (realRef === null) throw new Error('realRef to self is null')
          realRef.scrollIntoView({ behavior: 'smooth' })
        },
      },
    }))
  }, [id, state])

  return (
    <StyledH2
      id={id}
      ref={(e) => {
        // @ts-ignore todo: how to set ref.current?
        ref.current = e
        setState(e)
      }}
    >
      {children}
    </StyledH2>
  )
}
Heading2.displayName = 'Heading2'
