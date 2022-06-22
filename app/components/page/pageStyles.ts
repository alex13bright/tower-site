import { css } from 'styled-components'
import { backgroundDark, secondaryDark, widthAtLeast } from '~/styles/styles'

export const headerFooterColor = css`
  color: ${secondaryDark};
  background-image: linear-gradient(${backgroundDark.end} 47.41%, ${backgroundDark.start});
`

export const contentSidePaddingSize = {
  xs: '24px',
  xl: '28px',
}

export const contentSidePadding = css`
  padding-left: ${contentSidePaddingSize.xs};
  padding-right: ${contentSidePaddingSize.xs};

  @media screen and ${widthAtLeast.xl} {
    padding-left: ${contentSidePaddingSize.xl};
    padding-right: ${contentSidePaddingSize.xl};
  }
`
