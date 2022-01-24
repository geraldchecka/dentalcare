import VectoredImage from "./atoms/vectoredImage";
import { Header, BannerMessage } from '../styles/banner.styled';

const Banner = function() {
  return (
    <Header>
      <VectoredImage id="prefix-img" src="TinyVetch" />
      <BannerMessage>get a free check-up for new patients!</BannerMessage>
      <VectoredImage id="postfix-img" src="SandLily" />
    </Header>
  )
};

export default Banner;