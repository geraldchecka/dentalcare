import { SectionItem, QuickButton, QuickConnectWrapper } from '../styles/banner.styled';
import VectoredImage from "./atoms/vectoredImage";

export default function Why() {
  return (
    <>
      <SectionItem>
        <QuickConnectWrapper>
          <QuickButton>
            <VectoredImage id="prefix-img" src="whatsapp" style={{ verticalAlign: "middle" }} />
            {/* <span style={{ marginLeft: "20px", textTransform: "uppercase", verticalAlign: "middle", lineHeight: "20px", fontSize: "18px" }}> */}
              <a href="https://wa.me/918147540263?text=I%20would%20like%20to%20make%20an%20appointment." style={{ marginLeft: "20px", textTransform: "uppercase", verticalAlign: "middle", lineHeight: "20px", fontSize: "18px" }}>
                Make an appointment
              </a>
            {/* </span> */}
          </QuickButton>
          <QuickButton>
            <VectoredImage id="prefix-img" src="phone" style={{ verticalAlign: "middle" }} />
            {/* <span onClick={() => window.open('tel:+918147540263')} style={{ marginLeft: "20px", textTransform: "uppercase", lineHeight: "20px", verticalAlign: "middle", fontSize: "18px" }}>Talk to us</span> */}
            <a href="tel:+918147540263" style={{ marginLeft: "20px", textTransform: "uppercase", lineHeight: "20px", verticalAlign: "middle", fontSize: "18px" }}>Talk to us</a>
          </QuickButton>
        </QuickConnectWrapper>
      </SectionItem>
    </>
  )
};