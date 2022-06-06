import styled from 'styled-components';

export const Outer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Inner = styled.div`
  min-width: var(--breakpoint-mobile, 320px);
  max-width: var(--breakpoint-desktop, 1440px);
`;

export const Page = styled.div`
  padding: 20px;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;
export const Header = styled(Outer)`
  color: #ccc;
  background-color: #2b2e3b;
  text-align: center;
  height: 100px;
`;
export const Content = styled(Outer)``;
export const ContentInner = styled(Inner)`
  border: 1px solid grey;
`;
export const Footer = styled(Outer)`
  text-align: center;
  height: 100px;
  color: #ccc;
  background-color: #2b2e3b;
`;
