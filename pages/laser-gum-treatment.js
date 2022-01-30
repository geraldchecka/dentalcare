import Layout from '../components/layout';
import { SectionGroup, SectionItem, TreatmentWrapper, TreatmentHeading, TreatmentDescription, TreatmentLogo } from '../styles/banner.styled';
import Footer from '../components/footer';

export default function LaserGumTreatment() {
  return (
    <>
      <Layout showDetails/>
      <SectionGroup>
        <SectionItem>
          <TreatmentHeading>
            <h1>Laser gum treatment</h1>
          </TreatmentHeading>
          <TreatmentWrapper>
            <TreatmentDescription>
              <span>Laser gum treatment involves the focused light beams to cut or remove the tissues in small amounts. In dentistry, the laser treatment is done inside the mouth to remove the overgrown tissues, to reshape the gums, or to whiten the teeth. Laser treatment can be done for hard tissues as well as for soft tissues. Laser treatments is preferred because it has a smooth procedure, less discomfort, and reduces the healing time for patients. The laser treatment itself sterilizes the gums, hence making infection less likely. Sri Sumukha Dental Care has both the laser treatments i.e hard tissue and soft tissue laser treatment. We also have laser treatment for healing (bleeding, pain, infection, etc) post dental treatment.</span>
            </TreatmentDescription>
            <TreatmentLogo>
              <img src="/laser-gum.jpeg" />
            </TreatmentLogo>
          </TreatmentWrapper>
        </SectionItem>
      </SectionGroup>
      <Footer />
    </>
  );
}