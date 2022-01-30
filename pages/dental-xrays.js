import Layout from '../components/layout';
import { SectionGroup, SectionItem, TreatmentWrapper, TreatmentHeading, TreatmentDescription, TreatmentLogo } from '../styles/banner.styled';
import Footer from '../components/footer';

export default function DentalXRays() {
  return (
    <>
      <Layout showDetails/>
      <SectionGroup>
        <SectionItem>
          <TreatmentHeading>
            <h1>Dental X-Rays</h1>
          </TreatmentHeading>
          <TreatmentWrapper>
            <TreatmentDescription>
              <span>Digital X-Rays are the 3D images of the teeth that directly appears on the screen of the dentist. In digital radiography, the dentists put some sensor into the mouth to capture the image of the teeth. There are a few advantages of using digital X-Ray as well. As compared to the traditional X-Ray film capture, in digital X-Ray it reduces the radiation to almost 90%. It enhances the contrast and detailed view of the screen without any quality loss.
Sri sumukha dental care is equipped with RVG (Radionuclide ventriculogram)  imaging system to take intraoral periapical radiographs.</span>
            </TreatmentDescription>
            <TreatmentLogo>
              <img src="/dentalxrays.jpeg" />
            </TreatmentLogo>
          </TreatmentWrapper>
        </SectionItem>
      </SectionGroup>
      <Footer />
    </>
  );
}