import { ReactElement, useState } from 'react'
import styled from 'styled-components'
import { useScroll } from '~/custom-hooks/useScroll'
import { breakpoints } from '~/styles/styleConfig.ts'

type StyledButtonProps = { isActive: boolean }
const StyledButton = styled.button<StyledButtonProps>`
  position: fixed;
  bottom: 105px;
  right: 20px;
  width: 65px;
  height: 65px;
  z-index: 100;
  border-radius: 50%;
  box-shadow: 0 19px 38px 0 #22242b;
  background: #2b88c9 url(/assets/i/ico-page-top.svg) no-repeat center;
  display: none;
  &:hover {
    outline: 0;
  }
  @media (min-width: ${breakpoints.tablet}) {
    display: ${({ isActive }) => (isActive ? 'block' : 'none')};
  }
`

export const PageTopButton = (): ReactElement => {
  const [isActive, setActive] = useState<boolean>(false)
  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  useScroll(() => (window.scrollY > 500 ? setActive(true) : setActive(false)))
  return <StyledButton isActive={isActive} onClick={handleClick} />
}