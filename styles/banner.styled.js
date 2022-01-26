import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  color: #000;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  background-color: rgb(112, 214, 221);
  padding: 4px 0;
  max-width: 100%;
  transition: all .5s;
  &:hover {
    filter: invert(.2);
  }
  cursor: default;
`;

export const Image = styled.img`
  width: 20px;
  height: 30px;
`;

// export const LogoImage = styled.img``;

export const BlockHeader = styled.header`
  padding: 0 24px;
`;

export const MainBlock = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 32px 0;
  padding: 0 24px;
  @media (max-width: 767px) {
    margin: 12px 0;
  }
`;

export const MainNav = styled.nav`
  padding: 0 24px;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;

export const NavListGroup = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavListItem = styled.li`
  display: inline;
  font-size: 14px;
  line-height: 24px;
  white-space: nowrap;
  padding: 6px 6px 6px 32px;
  letter-spacing: 3px;
  ${({noPadding}) => noPadding ? 'padding-left: 0px;' : ""}
`;

export const SectionGroup = styled.main`
  padding: 0 24px;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  font-size: 16px;
  @media (min-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1024px) {
    width: 984px;
  }
  @media (min-width: 1280px) {
    width: 1160px;
  }
`;

export const SectionItem = styled.section`
  padding-bottom: 40px;
  margin-top: 40px;
  letter-spacing: normal;
  position: relative;
`;

export const IntroBanner = styled.div`
  @media (min-width: 768px) {
    min-height: unset;
    display: flex;
    flex-direction: row;
  }
`;

export const IntroBannerImageBlock = styled.div`
  font-size: 16px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 768px) {
    min-width: 50%;
  }
`;

export const IntroBannerImageGroup = styled.figure`
  width: 100%;
  display: inline-block;
  margin-right: 0px;
  margin-left: 0px;
`;

export const IntroBannerImage = styled.img`
  aspect-ratio: 1.5 / 1;
  border-radius: 0px;
  vertical-align: middle;
  margin-bottom: 0;
  margin-top: 0;
  margin-right: auto;
  margin-left: auto;
  border: 0;
  max-width: 100%;
  @media (min-width: 768px) {
    min-width: 50%;
    min-height: 400px;
    object-fit: cover;
    width: 100%;
  }
`;

export const IntroBannerTextBlock = styled.div`
  background-color: rgb(220, 249, 252);
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  text-align: center;
  justify-content: center;
  padding: 56px 24px;
  @media (min-width: 768px) {
    width: 100%;
    padding: 40px;
    flex-basis: 360px;
    min-width: 360px;
  }
  @media (min-width: 1024px) {
    flex-basis: 388px;
    min-width: 388px;
    max-width: 100%;
  }
  & > h1 {
    white-space: pre-line;
    letter-spacing: 0.023em;
    line-height: 1.2;
    color: rgb(21, 21, 21);
    font-family: 'Playfair_Display', Georgia, sans-serif;
    overflow-wrap: break-word;
    display: inline-block;
    margin-top: 0;
    margin-bottom: 16px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    max-width: 100%;
    font-size: 32px;
    @media (min-width: 768px) {
      font-size: 38px;
    }
    @media (min-width: 1280px) {
      font-size: 44px;
    }
  }
`;

// font-size: 38px;
// font-family: 'Playfair_Display', sans-serif;
// @media (max-width: 767px) {
//   font-size: 32px;
// }

export const MainLogo = styled.figure`
  padding: 0 24px;
  width: auto;
  @media (max-width: 767px) {
    padding: 0;
    width: 70%
  }
`;

export const HamburgerMenu = styled.div`
  padding: 6px;
  display: inline-block;
`;

export const BannerMessage = styled.div`
  box-sizing: border-box;
  padding: 0 40px;
  @media (max-width: 767px) {
    padding: 0;
  }
  text-align: center;
  color: rgb(22, 22, 22);
  font-family: "Open Sans", "Arimo", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  line-height: 24px;
  margin-block-end: 0px;
  margin-block-start: 0px;
  margin-inline-end: 0px;
  margin-inline-start: 0px;
  margin-bottom: 0px;
  margin-top: 0px;
  overflow-wrap: break-word;
  line-height: 1.5;
  text-decoration-thickness: auto;
  text-size-adjust: 100%;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const IntroBlock = styled.div`
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1024px) {
    width: 984px;
  }
  @media (min-width: 1280px) {
    width: 1160px;
  }
`;

export const IntroHeader = styled.div`
  letter-spacing: 0.023em;
  line-height: 1.2;
  color: rgb(27, 27, 27);
  text-align: left;
  overflow-wrap: break-word;
  font-family: 'Playfair_Display', Georgia, sans-serif;
  font-size: 32px;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    font-size: 44px;
    margin-bottom: 32px;
  }
  @media (min-width: 1024px) {
    font-size: 38px;
  }
`;

export const IntroCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  box-sizing: border-box;
  text-align: center;
  margin-top: 0;
  justify-content: center;
  @media (min-width: 768px) {
    margin-bottom: -48px;
    margin-left: -24px;
    margin-right: -24px;
    margin-top: 0px;
  }
  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

export const IntroCard = styled.div`
  flex-basis: 100%;
  flex-shrink: 1;
  box-sizing: border-box;
  flex-grow: 1;
  display: flex;
  max-width: 100%;
  font-family: 'Open Sans', 'Arimo', sans-serif;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 24px;
  @media (min-width: 768px) {
    max-width: 50%;
    padding-bottom: 48px;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 0;
  }
  @media (min-width: 1024px) {
    max-width: 33.33333333333333%;
    flex-basis: 33.33333333333333%;
  }
`;

export const ServicesCard = styled.div`
  flex-basis: 100%;
  flex-shrink: 1;
  box-sizing: border-box;
  flex-grow: 1;
  display: flex;
  max-width: 100%;
  font-family: 'Open Sans', 'Arimo', sans-serif;
  padding-left: 12px;
  padding-right: 12px;
  @media (min-width: 768px) {
    max-width: 50%;
    padding-bottom: 48px;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 0;
  }
  @media (min-width: 1024px) {
    max-width: 33.33333333333333%;
    flex-basis: 33.33333333333333%;
  }
`;

export const IntroCardTitle = styled.div`
  font-size: 22px;
  max-width: 100%;
  font-family: 'Open Sans', 'Arimo', sans-serif;
  letter-spacing: normal;
  overflow-wrap: break-word;
  line-height: 1.25;
  letter-spacing: 0.045em;
  padding-left: 32px;
  padding-right: 32px;
  color: rgb(27, 27, 27);
  margin: 0px 0px 24px 0px;
  ${({ autoHeight }) => (autoHeight ? 'height: auto;' : 'height: 90px;')}
  @media (min-width: 768px) {
    font-size: 22px;
  }
  @media (min-width: 1024px) {
    font-size: 22px;
  }
  @media (min-width: 1280px) {
    font-size: 22px;
  }
  @media (max-width: 1024px) {
    height: auto;
  }
`;

export const IntroCardDescription = styled.div`
  max-width: 100%;
  color: rgb(94, 94, 94);
  line-height: 1.5;
  overflow-wrap: break-word;
  padding-left: 32px;
  padding-right: 32px;
`;

export const IntroCardBlock = styled.div`
  ${({ withImage }) => withImage ? 'padding: 0 0 32px 0;' : 'padding: 32px 0;'}
  background-color: rgb(220, 249, 252);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const CardImageBlock = styled.figure`
  order: -1;
  display: inline-block;
  text-align: center;
  width: 100%;
  z-index: 1;
  height: auto;
  object-fit: cover;
  aspect-ratio: 1 / 1;
  vertical-align: middle;
  border-radius: 0px;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  margin-bottom: 30px;
  > * {
    max-width: 100%;
  }
  > img {
    @media (min-width: 1024px) {
      width: 365px;
    }
    @media (min-width: 1280px) {
      width: 100%;
    }
    @media (max-width: 767px) {
      height: calc((100vw - 48px)/1);
    }
  }
`;
