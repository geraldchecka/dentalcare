import Layout from '../components/layout';
import { SectionGroup, SectionItem, TreatmentWrapper, TreatmentHeading, TreatmentDescription, TreatmentLogo } from '../styles/banner.styled';
import Footer from '../components/footer';

export default function DentalImplants() {
  return (
    <>
      <Layout showDetails/>
      <SectionGroup>
        <SectionItem>
          <TreatmentHeading>
            <h1>Dental Implant</h1>
          </TreatmentHeading>
          <TreatmentWrapper>
            <TreatmentDescription>
              <span>A dental implant is a replacement for one or more teeth which acts as a permanent tooth. Implants are permanent and long-term solutions for people suffering from missing teeth, chronic dental problems, falling teeth.

Dental implants are associated with different grafting methods such as bone grafting.For dental implantation procedure involves an oral surgery to prepare a place for the implantation. After a few days of oral surgery, implantation is done. In some cases, according to the condition the tooth/teeth are implanted known as “Immediate Implantation”.</span>
            </TreatmentDescription>
            <TreatmentLogo>
              <img src="/dental-implant.jpeg" />
            </TreatmentLogo>
          </TreatmentWrapper>
        </SectionItem>
      </SectionGroup>
      <Footer />
    </>
  );
}