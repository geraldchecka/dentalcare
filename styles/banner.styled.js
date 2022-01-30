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
  margin-bottom: 24px;
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
  &:hover {
    color: rgb(56, 123, 127);
  }
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
  ${({ withShadow }) => (withShadow ? 'box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; padding: 40px;' : '')}
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
  ${({hasBottomMargin}) => hasBottomMargin ? 'margin-bottom: 24px;' : ''}
`;

export const IntroCardBlock = styled.div`
  ${({ withImage }) => withImage ? 'padding: 0 0 32px 0;' : 'padding: 32px 0;'}
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: rgb(220, 249, 252);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const IntroCardButton = styled.div`
  font-size: 14px;
  @media (min-width: 768px) {
    width: auto;
  }
  > a {
    cursor: pointer;
    background-color: rgb(112, 214, 221);
    position: relative;
    border-radius: 48px;
    min-height: 56px;
    display: inline-flex;
    border-style: none;
    margin-right: 32px;
    margin-left: 32px;
    transition: all 0.3s;
    text-shadow: none;
    align-self: auto;
    font-weight: 700;
    padding-bottom: 8px;
    padding-top: 8px;
    letter-spacing: 0.214em;
    padding-right: 40px;
    padding-left: 40px;
    text-align: center;
    overflow-wrap: break-word;
    text-transform: uppercase;
    color: rgb(0, 0, 0);
    justify-content: center;
    align-items: center;
    max-width: 100%;
  }
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
    @media (min-width: 768px) {
      width: 100%;
    }
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

export const FooterBlock = styled.footer`
  font-family: 'Open Sans', 'Arimo', sans-serif;
  font-size: 16px;
  background-color: rgb(255, 255, 255);
  padding-bottom: 56px;
  padding-top: 56px;
  padding-right: 24px;
  padding-left: 24px;
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  @media (max-width: 767px) {
    padding-bottom: 32px;
    padding-top: 32px;
  }
  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const FooterSection = styled.section`
  color: rgb(89, 89, 89);
  letter-spacing: 0.083em;
  line-height: 1.5;
  margin-top: 0;
  overflow-wrap: break-word;
  text-transform: uppercase;
  margin-bottom: 24px;
  font-family: 'Open Sans', 'Arimo', sans-serif;
  @media (min-width: 768px) {
    font-size: 12px;
  }
`;

export const HR = styled.hr`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    opacity: 0.25;
    border-color: rgb(88, 170, 176);
    width: 81%;
    margin: auto;
  }
`;


export const TreatmentHeading = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  flex-basis: 100%;
  flex-shrink: 1;
  box-sizing: border-box;
  flex-grow: 1;
  max-width: 100%;
  order: 1;
  @media (min-width: 768px) {
    padding-top: 0px;
    padding-bottom: 0px;
    flex-basis: 83.33333333333334%;
    max-width: 83.33333333333334%;
  }
  @media (min-width: 1024px) {
    order: 0;
    flex-basis: 66.66666666666666%;
    max-width: 66.66666666666666%;
  }
  > h1 {
    font-size: 32px;
    margin-top: 24px;
    margin-bottom: 24px;
    line-height: 1.2;
    letter-spacing: 0.023em;
    color: rgb(27, 27, 27);
    text-align: left;
    font-family: 'Playfair_Display', 'Arimo', serif;
    overflow-wrap: break-word;
    @media (min-width: 768px) {
      font-size: 38px;
      margin-bottom: 32px;
    }
    @media (min-width: 1280px) {
      font-size: 44px;
    }
  }
`;

export const TreatmentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  vertical-align: middle;
  flex-basis: 100%;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 1024px) {
    flex-direction: row;
    max-width: 100%;
    width: 100%;
  }
`;

export const DocName = styled.h4`
  display: block;
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 30px;
  text-transform: uppercase;
`;

export const DocNameSub = styled.h4`
  display: block;
  font-family: 'Open Sans', sans-serif;
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 15px;
  text-transform: uppercase;
`;

export const TreatmentLogo = styled.figure`
  order: 0;
  border-radius: 0px;
  vertical-align: middle;
  @media (min-width: 768px) {
    > img {
      max-width: 100%;
      width: 100%;
      flex-basis: 43.33333333333334%;
      max-width: 43.33333333333334%;
      margin-left: auto;
      margin-right: auto;
      padding: 0 0 24px 0;
    }
  }
  @media (min-width: 1024px) {
    order: 1;
    max-width: 63.33333333333333%;
    flex-basis: 63.33333333333334%;
    aspect-ratio: 1.8719512195121952 / 1;
    width: 100%;
    padding: 0 0 0 24px;
    > img {
      max-width: 63.33333333333333%;
      flex-basis: 63.33333333333334%;
      width: 100%;
    }
  }
`;

export const TreatmentDescription = styled.div`
  order: 1;
  width: 100%;
  box-sizing: border-box;
  padding: 24px 0 0 0;
  @media (min-width: 1024px) {
    order: 0;
    width: 100%;
    padding: 0 24px 0 0;
  }
`;