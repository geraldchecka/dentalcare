import Layout from '../components/layout';
import { SectionGroup, SectionItem, TreatmentWrapper, TreatmentHeading, TreatmentDescription, TreatmentLogo } from '../styles/banner.styled';
import Footer from '../components/footer';

export default function Dentures() {
  return (
    <>
      <Layout showDetails/>
      <SectionGroup>
        <SectionItem>
          <TreatmentHeading>
            <h1>Dentures</h1>
          </TreatmentHeading>
          <TreatmentWrapper>
            <TreatmentDescription>
              <span>Dentures are also known as “false teeth”. These are prosthetic devices that are constructed to replace the missing teeth and is attached to the gums with the hard and soft tissues. Dentures could be designed according to the necessity of the patient such as partial dentures, custom dentures, overdentures, implant dentures, etc...</span>
            </TreatmentDescription>
            <TreatmentLogo>
              <img src="/dentures.jpeg" />
            </TreatmentLogo>
          </TreatmentWrapper>
        </SectionItem>
      </SectionGroup>
      <Footer />
    </>
  );
}