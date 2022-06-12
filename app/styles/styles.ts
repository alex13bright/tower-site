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
export const backgroundFirst = '#20222c'
export const backgroundSecond = '#2b2e3b'

export const pageMainBlock = css`
  color: ${primary};
  background-image: linear-gradient(${backgroundSecond} 47.41%, ${backgroundFirst});
`
