import { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react'
import styled from 'styled-components'
import { background, breakpoints, primary, secondary } from '~/styles/styles'
import { Cross } from '~/components/ui/Cross'

const StyledCross = styled(Cross)`
  position: absolute;
  top: 15px;
  right: 15px;
  opacity: 0.3;
`

const Container = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: rgba(34, 34, 34, 0.5);
  padding: 20px;
  display: ${({ isVisible }) => (isVisible ? 'grid' : 'none')};
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
  padding: 50px 20px 20px 20px;
  max-width: ${breakpoints.md}px;
  overflow: hidden;
`

const ScrollArea = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
  overflow: auto;
`

const ScrollAreaContent = styled.div`
  min-width: ${breakpoints.xs - 120}px;
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
        <StyledCross size={15} depth={2} onClick={handleClick} color={secondary} />
        <ScrollArea>
          <ScrollAreaContent>{children}</ScrollAreaContent>
        </ScrollArea>
      </Content>
    </Container>
  )
}
