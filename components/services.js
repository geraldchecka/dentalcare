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
                  <IntroCardDescription hasBottomMargin>We work as a team, dedicated to improving and maintaining your oral health. Whatever your dental needs, you will be in great hands.</IntroCardDescription>
                  <IntroCardButton>
                    <Link href='/rootcanal'>
                      <a>services</a>
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
                  <IntroCardDescription hasBottomMargin>Our team has the professional experience to realize that there is no such thing as one-size-fits-all approach to treatment.</IntroCardDescription>
                  <IntroCardButton>
                    <Link href='/dental-implants'>
                      <a>services</a>
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