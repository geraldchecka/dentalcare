import Link from 'next/link';
import { BlockHeader, MainBlock, Close, HamburgerMenu, MainLogo, MainNav, NavListGroup, NavListItem, HamburgerOptions } from '../styles/banner.styled';
import { useState } from 'react';

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={props.width || 48}
    height={props.width || 48}
    fill={props.color}
    {...props}
  >
    <path d="M2 5v2h20V5H2zm0 6v2h20v-2H2zm0 6v2h20v-2H2z" />
  </svg>
)

const Header = function({ src, id }) {
  const [showHamMenu, setHamMenu] = useState(false);

  function toggleHamburgerMenu() {
    setHamMenu(true);
  }

  function closeHamburgerMenu() {
    setHamMenu(false);
  }

  return (
    <BlockHeader>
      <MainBlock>
        <HamburgerMenu onClick={toggleHamburgerMenu}>
          <SvgComponent color="rgb(75, 148, 153)" width={32} />
        </HamburgerMenu>
        <MainLogo>
          <Link href='/' passHref>
            <img src="/logo.png" alt="Sri Sumukha Dental Care" />
          </Link>
        </MainLogo>
      </MainBlock>
      <MainNav>
        <NavListGroup>
          <NavListItem noPadding>
            <Link href='/' passHref>
              <a>home</a>
            </Link>
          </NavListItem>
          <NavListItem>
            <Link href='/all-services' passHref>
              <a>Services</a>
            </Link>
          </NavListItem>
          <NavListItem>
            <Link href='/our-team' passHref>
              <a>Our Team</a>
            </Link>
          </NavListItem>
          <NavListItem>
            <Link href='/our-goal' passHref>
              <a>Our Goal</a>
            </Link>
          </NavListItem>
          <NavListItem>
            <Link href='/contactus' passHref>
              <a>Contact Us</a>
            </Link>
          </NavListItem>
        </NavListGroup>
      </MainNav>
      {
        showHamMenu &&
        <HamburgerOptions>
          <Close onClick={closeHamburgerMenu}>
            <img src="/close.png" alt="Sri Sumukha Dental Care" />
          </Close>
          <NavListGroup hamburger>
            <NavListItem hamburger>
              <Link href='/' passHref>
                <a>home</a>
              </Link>
            </NavListItem>
            <NavListItem hamburger>
              <Link href='/all-services' passHref>
                <a>Services</a>
              </Link>
            </NavListItem>
            <NavListItem hamburger>
              <Link href='/our-team' passHref>
                <a>Our Team</a>
              </Link>
            </NavListItem>
            <NavListItem hamburger>
              <Link href='/our-goal' passHref>
                <a>Our Goal</a>
              </Link>
            </NavListItem>
            <NavListItem hamburger>
              <Link href='/contactus' passHref>
                <a>Contact Us</a>
              </Link>
            </NavListItem>
          </NavListGroup>
        </HamburgerOptions>
      }
    </BlockHeader>
  );
}

export default Header;