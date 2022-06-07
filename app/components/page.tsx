import styled from 'styled-components'
import { breakpoints } from '~/styles/main'

export const OuterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const InnerBox = styled.div`
  width: 100%;
  height: 100%;
  min-width: ${breakpoints.mobile};
  max-width: ${breakpoints.desktop};
`
