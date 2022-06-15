import { css } from 'styled-components'

export const breakpoints = {
  xs: '320px',
  sm: '460px',
  md: '768px',
  lg: '1280px',
  xl: '1440px',
}

export const widthAtLeast = {
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
}

export const primary = '#222'
export const secondary = '#555'
export const background = '#fff'

export const primaryDark = '#fff'
export const secondaryDark = '#999'
export const backgroundDark = { start: '#20222c', end: '#2b2e3b' }

export const primaryAction = '#ee3c4b'
export const secondaryAction = '#70ac30'

export const headerFooterBlock = css`
  color: ${secondaryDark};
  background-image: linear-gradient(${backgroundDark.end} 47.41%, ${backgroundDark.start});
`
