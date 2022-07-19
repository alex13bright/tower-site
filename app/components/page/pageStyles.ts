import { css } from 'styled-components'
import { backgroundDark, secondaryDark } from '~/styles/styles'

export const headerFooterColor = css`
  color: ${secondaryDark};
  background-image: linear-gradient(${backgroundDark.end} 47.41%, ${backgroundDark.start});
`

export const contentSidePaddingSize = 24

export const contentSidePaddingSizePx = contentSidePaddingSize + 'px'

export const contentSidePadding = css`
  padding-left: ${contentSidePaddingSizePx};
  padding-right: ${contentSidePaddingSizePx};
`
