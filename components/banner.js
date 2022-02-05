import VectoredImage from "./atoms/vectoredImage";
import { Header, BannerMessage, BannerText } from '../styles/banner.styled';

const Banner = function() {
  return (
    <Header>
      <BannerMessage>
        <div style={{ display: 'inline-block' }}>
          <VectoredImage id="prefix-img" src="phone" />
          <BannerText>
            +91-8147540263
          </BannerText>
        </div>
        <div style={{ display: 'inline-block' }}>
          <VectoredImage id="prefix-img" src="hospital-building" />
          <BannerText showLeftSpacing>
            Bommasandra Industrial Area, Bommasandra, Karnataka 560099
          </BannerText>
        </div>
      </BannerMessage>
    </Header>
  )
};

export default Banner;