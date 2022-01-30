import Layout from '../components/layout';
import { SectionGroup, SectionItem, TreatmentWrapper, TreatmentHeading, TreatmentDescription, TreatmentLogo } from '../styles/banner.styled';
import Footer from '../components/footer';

export default function CosmeticFillings() {
  return (
    <>
      <Layout showDetails/>
      <SectionGroup>
        <SectionItem>
          <TreatmentHeading>
            <h1>Cosmetic Fillings</h1>
          </TreatmentHeading>
          <TreatmentWrapper>
            <TreatmentDescription>
              <span>The cosmetic filling is a dental procedure where a filling of composite resins or silver amalgam is used to fill in the decay of the tooth so that it doesn’t spread or aggravate to the roots. There are various types of filling like tin, copper, silver, gold, zinc, and mercury. In the procedure of cosmetic fillings sometimes composite fillings do not get the proper shade of the tooth with other shades. It is then composed of acrylic resin and glass which gives a white colour that matches the teeth. Different fillings are used for different teeth conditions like teeth decaying problems such as filling new cavities, replacing metal amalgams, repairing chipped teeth, removing gaps between the teeth, and reshaping teeth.</span>
            </TreatmentDescription>
            <TreatmentLogo>
              <img src="/cosmetic-fillings.jpeg" />
            </TreatmentLogo>
          </TreatmentWrapper>
        </SectionItem>
      </SectionGroup>
      <Footer />
    </>
  );
}