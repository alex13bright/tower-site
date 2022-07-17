import styled, { css } from 'styled-components'
import { ReactElement, useEffect, useRef } from 'react'
import { slugify } from '~/core/singletons'
import { useTocContext } from '~/components/room/PageContent'
import { useIsVisible } from '~/custom-hooks/useIsVisible'

const hCss = css`
  line-height: 1.2em;
`

export const H1 = styled.h1`
  ${hCss};
  font-size: 32px;
  margin-bottom: 16px;
`
H1.displayName = 'H1'

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
type H2Props = {
  children: ReactElement
}

export const H2 = ({ children }: H2Props): ReactElement => {
  const title = children.props.children
  const id = slugify(title)
  const ref = useRef<HTMLHeadingElement>(null)
  const { refs, visibility } = useTocContext()

  const { tocWithRef, setTocWithRef } = refs
  useEffect(() => {
    if (tocWithRef[id]) return
    // ref.current = document.getElementById(id)
    setTocWithRef((tocWithRef) => ({ ...tocWithRef, [id]: { ref } }))
  }, [id, title, tocWithRef, setTocWithRef])

  const { handler } = visibility
  const isVisible = useIsVisible(ref)
  useEffect(() => {
    if (isVisible === null) return
    handler(id, isVisible)
  }, [id, isVisible, handler])

  return (
    <StyledH2 id={id} ref={ref}>
      {children}
    </StyledH2>
  )
}
H2.displayName = 'H2'

export const H3 = styled.h3`
  ${hCss};
  font-size: 20px;
  margin: 40px 0 20px;
`
H3.displayName = 'H3'

export const P = styled.p`
  color: inherit;
  background: inherit;
  font-size: 17px;
  line-height: 1.4em;
  margin: 0 0 20px;
`
P.displayName = 'P'

// const StyledFigure = styled.figure``
// const FigureImage = styled.img``
// const FigureCaption = styled.figcaption``
//
// type FigureProps = {
//   image: string
//   caption: string
// }
//
// export const Figure = ({ image, caption }: FigureProps): ReactElement => {
//   return (
//     <StyledFigure>
//       <FigureImage />
//       <FigureCaption>{caption}</FigureCaption>
//     </StyledFigure>
//   )
// }
