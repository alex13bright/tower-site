import styled from 'styled-components'
import { ReactElement, useEffect, useRef, useState } from 'react'
import { slugify } from '~/core/singletons'
import { useTocContext } from '~/components/room/PageContent'
import { usePositionVisibility } from '~/custom-hooks/usePositionVisibility'
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

  const { scrollsWithSetter, visibility } = useTocContext()
  const { handler } = visibility
  const positionVisibility = usePositionVisibility(ref)
  useEffect(() => {
    if (positionVisibility === null) return
    const isPast = positionVisibility === 'top'
    handler(id, isPast)
  }, [handler, id, positionVisibility])

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
  }, [id, scrolls, setScrolls, state])

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
