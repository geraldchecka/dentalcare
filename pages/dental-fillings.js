import Layout from '../components/layout';
import { SectionGroup, SectionItem, TreatmentWrapper, TreatmentHeading, TreatmentDescription, TreatmentLogo } from '../styles/banner.styled';
import Footer from '../components/footer';

export default function DentalFillings() {
  return (
    <>
      <Layout showDetails/>
      <SectionGroup>
        <SectionItem>
          <TreatmentHeading>
            <h1>Dental Fillings</h1>
          </TreatmentHeading>
          <TreatmentWrapper>
            <TreatmentDescription>
              <span>Dental Filling is also known as dental restoration where the function, integrity, and morphology of the missing tooth structure which may be caused by caries or external trauma is restored.
Fillings could be of any type, it could be the precious metallic alloys or base metallic alloys or amalgams. Fillings would depend on the necessity, sensitivity and the requirement of the patient.</span>
            </TreatmentDescription>
            <TreatmentLogo>
              <img src="/dental-fillings.jpeg" />
            </TreatmentLogo>
          </TreatmentWrapper>
        </SectionItem>
      </SectionGroup>
      <Footer />
    </>
  );
}