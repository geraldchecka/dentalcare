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
  width: 24px;
  height: 30px;
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
  height: 24px;
  letter-spacing: 2px;
  line-height: 24px;
  margin-block-end: 0px;
  margin-block-start: 0px;
  margin-inline-end: 0px;
  margin-inline-start: 0px;
  margin-bottom: 0px;
  margin-top: 0px;
  overflow-wrap: break-word;
  text-decoration-thickness: auto;
  text-size-adjust: 100%;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;