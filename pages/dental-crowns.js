import Layout from '../components/layout';
import { SectionGroup, SectionItem, TreatmentWrapper, TreatmentHeading, TreatmentDescription, TreatmentLogo } from '../styles/banner.styled';
import Footer from '../components/footer';

export default function DentalCrowns() {
  return (
    <>
      <Layout showDetails/>
      <SectionGroup>
        <SectionItem>
          <TreatmentHeading>
            <h1>Dental Crowns and Bridges</h1>
          </TreatmentHeading>
          <TreatmentWrapper>
            <TreatmentDescription>
              <span>Dental Crowns are a tooth-shaped cap which is placed on the tooth to restore the shape, size, and appearance of the tooth. It also enhances the strength of the tooth. If the major part of the tooth is missing, then the crown is the best solution for it. By placing the crown, a tooth can function normally again.

A crown is used to entirely cover or "cap" a damaged tooth. Besides strengthening a damaged tooth, a crown can be used to improve its appearance, shape or alignment. A crown can also be placed on top of an implant to provide a tooth-like shape and structure for function. Porcelain or ceramic crowns can be matched to the color of your natural teeth. Other materials include gold and metal alloys, acrylic and ceramic. These alloys are generally stronger than porcelain and may be recommended for back teeth.porcelain fused to metal, lava and zirconia crowns are also used nowadays.</span>
            </TreatmentDescription>
            <TreatmentLogo>
              <img src="/dental-crowns.jpeg" />
            </TreatmentLogo>
          </TreatmentWrapper>
        </SectionItem>
      </SectionGroup>
      <Footer />
    </>
  );
}