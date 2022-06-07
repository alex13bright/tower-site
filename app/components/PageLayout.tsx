import {ReactNode, ReactElement} from "react";
import {breakpoints} from "~/styles/main";

import styled from "styled-components";

export const Outer = styled.div`
  display: flex;
  justify-content: center;
`;
export const Inner = styled.div`
  min-width: ${breakpoints.mobile};
  max-width: ${breakpoints.desktop};
`;
export const Page = styled.div`
  min-height: 100vh;
  padding: 20px;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;
export const Header = styled(Outer)`
  height: 100px;
  color: #ccc;
  background-color: #2b2e3b;
  text-align: center;
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

type Props = { children: ReactNode };
type Component = (props: Props) => ReactElement;
export const PageLayout: Component = (props: Props) => (
  <Page>
    <Header as="header">
      <Inner>Header</Inner>
    </Header>
    <Content as="main">
      <ContentInner>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem corporis
        cupiditate distinctio, ea earum inventore ipsa ipsam iure iusto labore
        libero minus necessitatibus nisi nobis numquam, pariatur placeat
        praesentium quaerat quasi qui quia quisquam quod reiciendis sunt
        temporibus unde voluptas voluptates? Blanditiis culpa nam quas vitae.
        Amet aut dolor laboriosam!
      </ContentInner>
    </Content>
    <Footer as="footer">
      <Inner>Footer</Inner>
    </Footer>
  </Page>
);
