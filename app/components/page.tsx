import styled from 'styled-components'
import { breakpoints } from '~/styles/main'
import { ReactElement, ReactNode } from 'react'

const FakeContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
type FakeContentProps = {
  width?: number
  height?: number
  children?: ReactNode
}
export const FakeContent: (props: FakeContentProps) => ReactElement = ({
  width,
  height,
  children,
}) => {
  return <FakeContentBox style={{ width, height }}>{children}</FakeContentBox>
}

export const OuterBox = styled.div`
  display: flex;
  justify-content: center;
`
export const InnerBox = styled.div`
  width: 100%;
  min-width: ${breakpoints.mobile};
  max-width: ${breakpoints.desktop};
`
