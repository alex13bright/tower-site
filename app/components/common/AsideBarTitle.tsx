import styled from 'styled-components'

export const AsideBarTitle = styled.div`
  display: grid;
  row-gap: 12px;
  color: #243238;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.1px;
  line-height: 22px;

  &::before {
    content: '';
    width: 30px;
    height: 2px;
    background: #ccc;
  }
`
