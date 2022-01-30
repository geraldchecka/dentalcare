import Layout from '../components/layout';
import { SectionGroup, SectionItem, TreatmentWrapper, TreatmentHeading, TreatmentDescription, TreatmentLogo } from '../styles/banner.styled';
import Footer from '../components/footer';

export default function Orthodontics() {
  return (
    <>
      <Layout showDetails/>
      <SectionGroup>
        <SectionItem>
          <TreatmentHeading>
            <h1>Orthodontics</h1>
          </TreatmentHeading>
          <TreatmentWrapper>
            <TreatmentDescription>
              <span>Orthodontics treats the malocclusion. It is a condition in which the positioning of the teeth is not in proper order. Sometimes orthodontics is also used for cosmetic purposes to improve the person’s appearance, but basically it is used for oral treatment.

Orthodontics could solve various oral issues such as closing gaps between the teeth, aligning the tips of teeth, straightening the crooked teeth, boosting long-term health for gums and teeth and treating improper bites.</span>
            </TreatmentDescription>
            <TreatmentLogo>
              <img src="/orthodontics.jpeg" />
            </TreatmentLogo>
          </TreatmentWrapper>
        </SectionItem>
      </SectionGroup>
      <Footer />
    </>
  );
}