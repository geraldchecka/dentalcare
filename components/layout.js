import GlobalStyle from '../styles/global';
import Banner from './banner';
import Header from './header';
import { HR, Whatsapp } from '../styles/banner.styled';
import Link from 'next/link';

export default function Layout() {
  return (
    <>
      <GlobalStyle />
      <Banner />
      <Header />
      <HR />
      <a href="https://wa.me/918147540263?text=I%20would%20like%20to%20make%20an%20appointment." target="__blank">
        <Whatsapp src="/whatsapp.png" alt="Contact Us" />
      </a>
    </>
  )
}