import { css } from 'styled-components'

export const proximaNova = `'Proxima Nova',serif`
export const proximaNovaSb = `'Proxima Nova Sb',serif`

export const breakpoints = {
  xs: 320,
  sm: 460,
  md: 768,
  xm: 1024,
  lg: 1280,
  xl: 1440,
}

export const widthAtLeast = {
  xs: `(min-width: ${breakpoints.xs}px)`,
  sm: `(min-width: ${breakpoints.sm}px)`,
  md: `(min-width: ${breakpoints.md}px)`,
  xm: `(min-width: ${breakpoints.xm}px)`,
  lg: `(min-width: ${breakpoints.lg}px)`,
  xl: `(min-width: ${breakpoints.xl}px)`,
}

export const primary = '#222'
export const secondary = '#555'
export const tertiary = '#e5e5e5'
export const accent = '#008be2'
export const background = '#fff'

export const primaryDark = '#fff'
export const secondaryDark = '#999'
export const backgroundDark = { start: '#20222c', end: '#2b2e3b' }

export const border = '#343848'

export const primaryAction = '#ee3c4b'
export const secondaryAction = '#70ac30'

export const pseudoAbsolute = css`
  content: '';
  display: block;
  position: absolute;
  z-index: 99;
`

export const sidePaddings = (size: string) => css`
  padding-left: ${size};
  padding-right: ${size};
`

export const cancelSideMargins = css`
  margin-left: 0;
  margin-right: 0;
`
export const expandOnParentSides = (size: string) => css`
  margin-left: -${size};
  margin-right: -${size};
  padding-left: ${size};
  padding-right: ${size};
`
