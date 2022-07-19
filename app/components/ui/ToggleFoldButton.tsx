import styled from 'styled-components'

export const ToggleFoldButton = styled.button<{ isHidden: boolean; isPressed: boolean }>`
  display: ${({ isHidden }) => (isHidden ? 'none' : 'block')};
  ${({ isPressed }) => (isPressed ? `transform: rotateX(180deg)` : '')};
`
