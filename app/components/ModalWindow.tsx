import { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react'
import styled from 'styled-components'
import { background, breakpoints, primary } from '~/styles/styles'
import { Cross } from '~/components/Cross'

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
  padding: 20px;
  place-items: center;
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  cursor: initial;
  color: ${primary};
  background-color: ${background};
  border-radius: 10px;
  box-shadow: 0 15px 50px rgb(0 0 0 / 50%);
  position: relative;
  padding: 45px 13px 15px 30px;
  min-width: ${breakpoints.xs};
  max-width: ${breakpoints.md};
  overflow: hidden;
`
const ScrollArea = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`
const ReCross = styled(Cross)`
  position: absolute;
  top: 15px;
  right: 15px;
  opacity: 0.3;
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
        <ScrollArea>{children}</ScrollArea>
      </Content>
    </Container>
  )
}
