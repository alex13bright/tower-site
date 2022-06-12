import { css } from 'styled-components'

export const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  laptop: '1280px',
  desktop: '1440px',
}

export const widthAtLeast = {
  mobile: `(min-width: ${breakpoints.mobile})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  laptop: `(min-width: ${breakpoints.laptop})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
}

export const primary = '#ccc'

export const pageMainBlock = css`
  color: ${primary};
  background-image: linear-gradient(#2b2e3b 47.41%, #20222c);
`
