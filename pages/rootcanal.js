import Layout from '../components/layout';
import { SectionGroup, SectionItem, TreatmentWrapper, TreatmentHeading, TreatmentDescription, TreatmentLogo } from '../styles/banner.styled';

export default function RootCanal() {
  return (
    <>
      <Layout showDetails/>
      <SectionGroup>
        <SectionItem>
          <TreatmentHeading>
            <h1>Root Canal</h1>
          </TreatmentHeading>
          <TreatmentWrapper>
            <TreatmentDescription>
              <span>Root canal treatment also known as endodontic therapy, is a dental treatment for removing infection from inside a tooth. It can also protect the tooth from future infections.It is carried out in the pulp of the tooth.
Root Canal is the procedure that ends mostly in 1 sitting which would take 30-90 minutes, depending on the condition of the tooth. In adverse cases, it may take 2-3 sittings as well.</span>
            </TreatmentDescription>
            <TreatmentLogo>
              <img src="/rootcanal.jpeg" />
            </TreatmentLogo>
          </TreatmentWrapper>
        </SectionItem>
      </SectionGroup>
    </>
  );
}