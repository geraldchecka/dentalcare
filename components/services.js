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
                  <IntroCardDescription hasBottomMargin>Root canal treatment also known as endodontic therapy, is a dental treatment for removing infection from inside a tooth.</IntroCardDescription>
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
                  <IntroCardDescription hasBottomMargin>A dental implant is a replacement for one or more teeth which acts as a permanent tooth. Implants are permanent and long-term solutions for people suffering from missing teeth.</IntroCardDescription>
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