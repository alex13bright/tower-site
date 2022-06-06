import { ReactNode } from 'react';
import { Content, ContentInner, Header, Footer, Inner, Page } from './styles';

type Props = { children: ReactNode };
type Component = (props: Props) => JSX.Element;
export const PageLayout: Component = (props: Props) => (
  <Page>
    <Header as="header">
      <Inner>Header</Inner>
    </Header>
    <Content as="main">
      <ContentInner>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem corporis cupiditate
        distinctio, ea earum inventore ipsa ipsam iure iusto labore libero minus necessitatibus nisi
        nobis numquam, pariatur placeat praesentium quaerat quasi qui quia quisquam quod reiciendis
        sunt temporibus unde voluptas voluptates? Blanditiis culpa nam quas vitae. Amet aut dolor
        laboriosam!
      </ContentInner>
    </Content>
    <Footer as="footer">
      <Inner>Footer</Inner>
    </Footer>
  </Page>
);
