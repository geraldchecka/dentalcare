import Layout from '../components/layout';
import { SectionGroup, SectionItem, TreatmentWrapper, TreatmentHeading, TreatmentDescription, TreatmentLogo, DocName, DocNameSub } from '../styles/banner.styled';
import Footer from '../components/footer';

export default function OurTeam() {
  return (
    <>
      <Layout showDetails/>
      <SectionGroup>
        <SectionItem>
          <TreatmentHeading>
            <h1>Our Team</h1>
          </TreatmentHeading>
          <DocName>DR. Poornima K K </DocName>
          <TreatmentWrapper>
            <TreatmentDescription>
              <span>Dr Poornima K K is a dental surgeon, practising dentistry in Sri Sumukha Dental Care Bommasandra, Bangalore.She has an overall experience of 21years in the field of dentistry.She completed her BDS from Bangalore University in the year 2000 and is into practising dentistry from the same year till date.</span>
            </TreatmentDescription>
            <TreatmentLogo>
              <img src="/poornima.jpeg" />
            </TreatmentLogo>
          </TreatmentWrapper>
        </SectionItem>
        <SectionItem>
          <TreatmentHeading>
          </TreatmentHeading>
          <DocName>DR. HRISHIKESH BHOWMICK</DocName>
          <DocNameSub>ORAL SURGEON  AND IMPLANTOLOGIST</DocNameSub>
          <TreatmentWrapper>
            <TreatmentDescription>
              <span>He completed his Master of Dental Surgery from Rajiv Gandhi University of Health Sciences, Karnataka. M.R Ambedkar dental college and hospital. Completed Fellowship in Cranio-Maxillofacial Surgery under Dr.Paul C Salins in Mazumdar Shaw Medical Center (Narayana Hrudayalaya), Bangalore, recognized by Rajiv Gandhi University of Health Sciences.
9 Years of Experience
Specialized in: FACIAL TRAUMA, Cleft Lip and Palate Surgeries, Orthognathic Surgery, Benign facial and Jaw Tumours, Implantology, Minor Oral Surgery
Qualification: BDS, MDS, FCMFS.</span>
            </TreatmentDescription>
            <TreatmentLogo>
              <img src="/bhowmick.jpeg" />
            </TreatmentLogo>
          </TreatmentWrapper>
        </SectionItem>
        <SectionItem>
          <TreatmentHeading>
          </TreatmentHeading>
          <DocName>DR. Ashita Talwar</DocName>
          {/* <DocNameSub>ORAL SURGEON  AND IMPLANTOLOGIST</DocNameSub> */}
          <TreatmentWrapper>
            <TreatmentDescription>
              <span>She completed her Master of Dental Surgery from M.S.Ramaiah University of Applied Sciences, Rajiv Gandhi University of Health Sciences, Karnataka.She has 9 years of experience and is specialised in: Fixed Orthodontics, Damon System, Self-Ligating Systems, Clear Aligner Technology, Myofunctional Therapy and Growth Modulation, Interceptive and Preventive Orthodontics and mini-implants.</span>
            </TreatmentDescription>
            <TreatmentLogo>
              <img src="/ashita.jpeg" />
            </TreatmentLogo>
          </TreatmentWrapper>
        </SectionItem>
        <SectionItem>
          <TreatmentHeading>
          </TreatmentHeading>
          <DocName>DR. Nivedan</DocName>
          {/* <DocNameSub>ORAL SURGEON  AND IMPLANTOLOGIST</DocNameSub> */}
          <TreatmentWrapper>
            <TreatmentDescription>
              <span>Dr.Nivedan has 10 years of Clinical Experience in the field of Dentistry,Specilalises in Prosthodontics,Implantology.

Specilalist in Removable & Fixed partial Dentures,Crowns and Bridges,Veneers,Smile Makeovers and so on.</span>
            </TreatmentDescription>
            <TreatmentLogo>
              <img src="/nivedan.jpeg" />
            </TreatmentLogo>
          </TreatmentWrapper>
        </SectionItem>
        <SectionItem>
          <TreatmentHeading>
          </TreatmentHeading>
          <DocName>DR. Ankita Khandelwal</DocName>
          {/* <DocNameSub>ORAL SURGEON  AND IMPLANTOLOGIST</DocNameSub> */}
          <TreatmentWrapper>
            <TreatmentDescription>
              <span>Dr Ankita Khandelwal, MDS Conservative dentistry and Endodontics, has been providing her services as an Endodontist and Cosmetic Dentist for past 7 years.

She has been successfully performing painless root canal treatment in single visit in our center. Her effective and eminent protocol for treatment planning and execution make the whole procedure class apart.
She also excels in esthetic procedures including tooth whitening, smile designing, laminates helpful in completely transforming patient smiles.</span>
            </TreatmentDescription>
            <TreatmentLogo>
              <img src="/ankita.jpeg" />
            </TreatmentLogo>
          </TreatmentWrapper>
        </SectionItem>
        <SectionItem>
          <TreatmentHeading>
          </TreatmentHeading>
          <DocName>DR. Suraj V Raikar</DocName>
          {/* <DocNameSub>ORAL SURGEON  AND IMPLANTOLOGIST</DocNameSub> */}
          <TreatmentWrapper>
            <TreatmentDescription>
              <span>Dr Suraj V Raikar, is Periodontist and Implantogist, currently working as a consultant in Narayana Hrudayalaya and is a visiting Consultant at Sri Sumukha dental care.He is specialised in Laser dentistry, Periodontal Flap Surgery, Laser Gingivoplasty, Bleeding gums Treatment and Dental Implants.</span>
            </TreatmentDescription>
            <TreatmentLogo>
              <img src="/suraj.jpeg" />
            </TreatmentLogo>
          </TreatmentWrapper>
        </SectionItem>
      </SectionGroup>
      <Footer />
    </>
  );
}