import { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react'
import styled from 'styled-components'
import { background, breakpoints, primary, widthAtLeast } from '~/styles/styles'
import { Cross } from '~/components/Cross'

const containerPaddings = {
  right: 20,
}
const Container = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'grid' : 'none')};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
  cursor: pointer;
  background: rgba(34, 34, 34, 0.5);
  padding: ${containerPaddings.right}px;
  place-items: center;
  overflow-x: auto;
  min-width: ${breakpoints.xs}px;
`

const contentPaddings = {
  right: 13,
  left: 30,
}
const Content = styled.div`
  width: 100%;
  height: 100%;
  cursor: initial;
  color: ${primary};
  background-color: ${background};
  border-radius: 10px;
  box-shadow: 0 15px 50px rgb(0 0 0 / 50%);
  position: relative;
  padding: 45px ${contentPaddings.right}px 15px ${contentPaddings.left}px;
  max-width: ${breakpoints.md}px;
  overflow: hidden;
`
const ScrollArea = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`
const ReCross = styled(Cross)`
  position: absolute;
  top: 15px;
  right: 15px;
  opacity: 0.3;
`
const Wrapper = styled.div`
  width: ${breakpoints.xs -
  containerPaddings.right * 2 -
  contentPaddings.right +
  contentPaddings.left}px;
  @media ${widthAtLeast.md} {
    width: calc(100vw - 140px);
  }
  @media (min-width: calc(${breakpoints.md + 80}px)) {
    width: calc(${breakpoints.md - 80}px);
  }
`

type Props = {
  children: ReactNode
  isVisible: boolean
  setIsVisible: Dispatch<SetStateAction<boolean>>
}

export function ModalWindow({ children, isVisible, setIsVisible }: Props): ReactElement {
  const handleClick = () => setIsVisible(false)
  return (
    <Container isVisible={isVisible} onClick={handleClick}>
      <Content onClick={(e) => e.stopPropagation()}>
        <ReCross length={15} depth={2} onClick={handleClick} color="#555" />
        <ScrollArea>
          <Wrapper>{children}</Wrapper>
        </ScrollArea>
      </Content>
    </Container>
  )
}
