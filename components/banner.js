import VectoredImage from "./atoms/vectoredImage";
import { Header, BannerMessage } from '../styles/banner.styled';

const Banner = function() {
  return (
    <Header>
      <VectoredImage id="prefix-img" src="TinyVetch" />
      <BannerMessage>GET A FREE CHECK-UP FOR NEW PATIENTS!</BannerMessage>
      <VectoredImage id="postfix-img" src="SandLily" />
    </Header>
  )
};

export default Banner;