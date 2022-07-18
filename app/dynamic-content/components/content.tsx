import styled, { css } from 'styled-components'

export const hCss = css`
  line-height: 1.2em;
`

export const H1 = styled.h1`
  ${hCss};
  font-size: 32px;
  margin-bottom: 16px;
`
H1.displayName = 'H1'

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
