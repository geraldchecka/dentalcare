import Layout from '../components/layout';
import { SectionGroup, SectionItem, TreatmentWrapper, TreatmentHeading, TreatmentDescription, TreatmentLogo } from '../styles/banner.styled';
import Footer from '../components/footer';

export default function OurGoal() {
  return (
    <>
      <Layout showDetails/>
      <SectionGroup>
        <SectionItem>
          <TreatmentHeading>
            <h1>Our Goal</h1>
          </TreatmentHeading>
          <TreatmentWrapper>
            <TreatmentDescription>
              <span>Our goal is not just to satisfy you, but exceed your expectations with comfort, care and the highest quality dental care services.

We are dedicated to always be available to you, answer your questions, calm your fears and provide our services in a friendly, comfortable, caring environment.

As your dental health care professionals, we are highly motivated, honest and innovative, dedicated to providing a personally rejuvenating experience, enriching the lives of our guests and each other.

Sree Sumukha Dental Care is one of the well-known clinics in Bommasandra Bangalore offering best dental treatment services. The clinic has experienced dentists and consultants, to provide you , best dental care and  to help you in getting a healthy smile
</span>
            </TreatmentDescription>
            {/* <TreatmentLogo>
              <img src="/kids-dentistry.jpeg" />
            </TreatmentLogo> */}
          </TreatmentWrapper>
        </SectionItem>
      </SectionGroup>
      <Footer />
    </>
  );
}