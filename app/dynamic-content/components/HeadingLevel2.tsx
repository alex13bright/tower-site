import styled from 'styled-components'
import { ReactElement, useEffect, useRef, useState } from 'react'
import { slugify } from '~/core/singletons'
import { useTocContext } from '~/components/room/PageContent'
import { useViewportPosition } from '~/custom-hooks/useViewportPosition'
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

const parseChildren = (children: ReactElement) => {
  return children.props.children
}

type Heading2Props = {
  children: ReactElement
}

export const HeadingLevel2 = ({ children }: Heading2Props): ReactElement => {
  const title = parseChildren(children)
  const id = slugify(title)
  const ref = useRef<HTMLHeadingElement>(null)
  const [state, setState] = useState<HTMLHeadingElement | null>(null)

  const { scrolledIndex, scrollIndexHandler, scrollHandlersMap, setScrollHandlersMap } =
    useTocContext()

  const viewportPosition = useViewportPosition(ref)
  const isScrolled = viewportPosition === 'top'
  useEffect(() => {
    scrollIndexHandler(id, isScrolled)
  }, [scrollIndexHandler, id, isScrolled])

  useEffect(() => {
    if (state === null) return
    if (scrollHandlersMap[id]) return
    setScrollHandlersMap((prevMap) => ({
      ...prevMap,
      [id]: () => {
        // console.log(ref.current) todo: why null???
        // console.log(state.scrollIntoView) todo: why broken?
        const realRef = document.getElementById(id)
        if (realRef === null) throw new Error('realRef to self is null')
        realRef.scrollIntoView({ behavior: 'smooth' })
      },
    }))
  }, [id, scrolledIndex, scrollHandlersMap, setScrollHandlersMap, state])

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
HeadingLevel2.displayName = 'HeadingLevel2'
