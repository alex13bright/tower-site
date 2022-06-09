import { css } from 'styled-components'

export const pageMainBlock = css`
  color: ${({ theme }) => theme.colors.textMain};
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.backgroundMainStart} 47.41%,
    ${({ theme }) => theme.colors.backgroundMainEnd}
  );
`
