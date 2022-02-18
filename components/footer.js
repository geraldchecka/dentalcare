import { FooterBlock, FooterSection, SectionItem, SectionGroup } from '../styles/banner.styled';

  export default function Footer() {
    return (
      <>
        <SectionGroup>
          <SectionItem>
            <FooterBlock>
              <FooterSection>
                <p><b>TIMINGS</b></p>
                <p style={{ marginBottom: "20px" }}>
                  MONDAY - SATURDAY: 10:30AM - 2:30PM; 4:45PM - 8:30PM
                  SUN:10:30AM - 2PM
                </p>
              </FooterSection>
              <FooterSection>
                <p><b>ADDRESS</b></p>
                <p style={{ marginBottom: "20px" }}>
                  145-N, 1st Main Road
                  Near Priyadarshini Petrol Bunk
                  Bommasandra Industrial Area, Bommasandra,
                  Bengaluru, 560099
                  Karnataka
                  India
                </p>
              </FooterSection>
              <FooterSection>COPYRIGHT © 2021 SRI SUMUKHA DENTAL CARE - ALL RIGHTS RESERVED.</FooterSection>
            </FooterBlock>
          </SectionItem>
        </SectionGroup>
      </>
    )
  };