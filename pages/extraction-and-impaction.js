import Layout from '../components/layout';
import { SectionGroup, SectionItem, TreatmentWrapper, TreatmentHeading, TreatmentDescription, TreatmentLogo } from '../styles/banner.styled';
import Footer from '../components/footer';

export default function ExtractionImpaction() {
  return (
    <>
      <Layout showDetails/>
      <SectionGroup>
        <SectionItem>
          <TreatmentHeading>
            <h1>Extraction and Impaction</h1>
          </TreatmentHeading>
          <TreatmentWrapper>
            <TreatmentDescription>
              <span>A dental extraction is the removal of the teeth which might have undergone some dental issues such as tooth decay, periodontal disease or dental trauma.
Extraction could be of two types i.e. Simple and Surgical Extraction. Teeth impaction is associated with the removal of wisdom teeth as they are the last ones to erupt in the oral cavity. The inclined growth of the tooth, adjacent teeth, excessive soft tissues or genetic abnormality could be the reasons for teeth impaction.</span>
            </TreatmentDescription>
            <TreatmentLogo>
              <img src="/tooth-extraction.jpeg" />
            </TreatmentLogo>
          </TreatmentWrapper>
        </SectionItem>
      </SectionGroup>
      <Footer />
    </>
  );
}