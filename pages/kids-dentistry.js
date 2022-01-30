import Layout from '../components/layout';
import { SectionGroup, SectionItem, TreatmentWrapper, TreatmentHeading, TreatmentDescription, TreatmentLogo } from '../styles/banner.styled';
import Footer from '../components/footer';

export default function KidsDentistry() {
  return (
    <>
      <Layout showDetails/>
      <SectionGroup>
        <SectionItem>
          <TreatmentHeading>
            <h1>Kids Dentistry</h1>
          </TreatmentHeading>
          <TreatmentWrapper>
            <TreatmentDescription>
              <span>Kids with dental issues have become very common these days and kids of this era are mostly into chips and chocolates. It’s not only the change in their food intake that has affected it rather the lack of vitamins and minerals has also put an impact on the strength and the quality of the teeth. Kids start teething from their infant stage i.e from the 6-7th month. Eventually, the milk teeth start falling off from the age of 6-7 yrs. As the milk teeth form the base for the permanent teeth, it is very necessary that the proper oral health care is taken from the initial stage itself. Regular check-up and a Proper Oral Hygiene routine could help in.</span>
            </TreatmentDescription>
            <TreatmentLogo>
              <img src="/kids-dentistry.jpeg" />
            </TreatmentLogo>
          </TreatmentWrapper>
        </SectionItem>
      </SectionGroup>
      <Footer />
    </>
  );
}