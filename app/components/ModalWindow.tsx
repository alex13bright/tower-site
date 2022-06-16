import { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react'
import styled from 'styled-components'
import { background, primary } from '~/styles/styles'
import { Cross } from '~/components/Cross'

const Container = styled.main<{ isVisible: boolean }>`
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
  grid-template-rows: 1fr;
`

const Content = styled.div`
  cursor: initial;
  color: ${primary};
  background-color: ${background};
  border-radius: 10px;
  box-shadow: 0 15px 50px rgb(0 0 0 / 50%);
  position: relative;
`

const ReCross = styled(Cross)`
  position: absolute;
  top: 30px;
  right: 30px;
  opacity: 0.5;
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
        <ReCross length={30} depth={4} onClick={handleClick} color="#555" />
        {children}
      </Content>
    </Container>
  )
}
