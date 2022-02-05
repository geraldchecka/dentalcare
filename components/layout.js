import GlobalStyle from '../styles/global';
import Banner from './banner';
import Header from './header';
import { HR } from '../styles/banner.styled';

export default function Layout() {
  return (
    <>
      <GlobalStyle />
      <Banner />
      <Header />
      <HR />
    </>
  )
}