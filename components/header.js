import { BlockHeader, MainBlock, HamburgerMenu, MainLogo, MainNav, NavListGroup, NavListItem } from '../styles/banner.styled';
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
  return (
    <BlockHeader>
      <MainBlock>
        {/* <HamburgerMenu>
          <SvgComponent color="rgb(75, 148, 153)" width={18} />
        </HamburgerMenu> */}
        <MainLogo>
          <img src="/logo.png" alt="Sri Sumukha Dental Care" />
        </MainLogo>
      </MainBlock>
      <MainNav>
        <NavListGroup>
          <NavListItem noPadding>Home</NavListItem>
          <NavListItem>Services</NavListItem>
          <NavListItem>Make an appointment</NavListItem>
          <NavListItem>About</NavListItem>
          <NavListItem>Contact Us</NavListItem>
        </NavListGroup>
      </MainNav>
    </BlockHeader>
  );
}

export default Header;