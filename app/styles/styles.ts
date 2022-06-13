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

export const headerFooterBlock = css`
  color: ${secondaryDark};
  background-image: linear-gradient(${backgroundDark.end} 47.41%, ${backgroundDark.start});
`

// export const color1 = '#222'
// export const color2 = '#555'
// export const color3 = '#243238'
// export const color4 = '#fff'
// export const color5 = '#ccc'
// export const color6 = '#999'
// export const color7 = '#e5e5e5'
// export const color10 = '#777'
// export const color11 = '#e9e9e9'
// export const color12 = '#dfdede'
// export const color50 = '#20222c'
// export const color51 = '#2b2e3b'
// export const color100 = '#008be2'
// export const color101 = '#007bff'
// export const color200 = '#eb5757'
// export const color201 = '#ff4151'
// export const color202 = '#ee3c4b'
// export const color300 = '#70ac30'
