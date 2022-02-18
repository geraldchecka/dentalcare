import Link from 'next/link';
import { SectionItem, IntroBlock, IntroHeader, IntroCards, IntroCard, IntroCardTitle,
  IntroCardDescription, IntroCardBlock, CardImageBlock, IntroCardButton } from '../styles/banner.styled';

export default function Services() {
  return (
    <>
      <SectionItem>
          <IntroBlock>
            <IntroHeader>
              <h1>
                Services
              </h1>
            </IntroHeader>
            <IntroCards>
              <IntroCard>
                <IntroCardBlock withImage>
                  <CardImageBlock>
                    <img src='/rootcanal.jpeg' />
                  </CardImageBlock>
                  <IntroCardTitle autoHeight>Single Sitting Root Canal</IntroCardTitle>
                  <IntroCardDescription hasBottomMargin>Root canal treatment also known as endodontic therapy, is a dental treatment for removing infection from inside a tooth. It can also protect the tooth from future infections.It is carried out in the pulp of the tooth. Root Canal is the procedure that ends mostly in 1 sitting which would take 30-90 minutes, depending on the condition of the tooth. In adverse cases, it may take 2-3 sittings as well.</IntroCardDescription>
                  <IntroCardButton>
                    <Link href='/rootcanal' passHref>
                      <a>learn more</a>
                    </Link>
                  </IntroCardButton>
                </IntroCardBlock>
              </IntroCard>
              <IntroCard>
                <IntroCardBlock withImage>
                  <CardImageBlock>
                    <img src='/dental_implants_small.jpeg' />
                  </CardImageBlock>
                  <IntroCardTitle autoHeight>Dental Implants</IntroCardTitle>
                  <IntroCardDescription hasBottomMargin>A dental implant is a replacement for one or more teeth which acts as a permanent tooth. Implants are permanent and long-term solutions for people suffering from missing teeth, chronic dental problems, falling teeth.

Dental implants are associated with different grafting methods such as bone grafting.For dental implantation procedure involves an oral surgery to prepare a place for the implantation. After a few days of oral surgery, implantation is done. In some cases, according to the condition the tooth/teeth are implanted known as “Immediate Implantation”.</IntroCardDescription>
                  <IntroCardButton>
                    <Link href='/dental-implants' passHref>
                      <a>learn more</a>
                    </Link>
                  </IntroCardButton>
                </IntroCardBlock>
              </IntroCard>
              <IntroCard>
                <IntroCardBlock withImage>
                  <CardImageBlock>
                    <img src='/view_all_services.jpeg' />
                  </CardImageBlock>
                  <IntroCardTitle autoHeight>View All Services</IntroCardTitle>
                  <IntroCardDescription hasBottomMargin>By using the cutting edge research and tools, we make sure your time with us is as comfortable and stress-free as possible.</IntroCardDescription>
                  <IntroCardButton>
                    <Link href='/all-services' passHref>
                      <a>services</a>
                    </Link>
                  </IntroCardButton>
                </IntroCardBlock>
              </IntroCard>
            </IntroCards>
          </IntroBlock>
        </SectionItem>
    </>
  )
};