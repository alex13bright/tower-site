import { ReactElement, useEffect, useState } from 'react'
import styled from 'styled-components'
import { breakpoints } from '~/styles/main'

type StyledButtonProps = { isActive: boolean }
const StyledButton = styled.button<StyledButtonProps>`
  position: fixed;
  bottom: 105px;
  right: 20px;
  width: 65px;
  height: 65px;
  z-index: 100;
  border-radius: 50%;
  box-shadow: 0 19px 38px 0 rgba(34, 36, 43, 30%);
  background: #2b88c9 url(/assets/i/ico-page-top.svg) no-repeat center;
  display: none;
  @media (min-width: ${breakpoints.tablet}) {
    display: ${({ isActive }) => (isActive ? 'block' : 'none')};
  }
`

export const PageTopButton: () => ReactElement = () => {
  const [isActive, setActive] = useState<boolean>(false)
  const handleScroll = () => (window.pageYOffset > 500 ? setActive(true) : setActive(false))
  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return <StyledButton isActive={isActive} onClick={handleClick} />
}
