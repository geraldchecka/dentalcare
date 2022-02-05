import Link from 'next/link';
import Layout from '../components/layout';
import {  TreatmentWrapper, TreatmentHeading, TreatmentDescription, TreatmentLogo } from '../styles/banner.styled';
import { SectionGroup, SectionItem, IntroBlock, IntroHeader, IntroCards, IntroCard, IntroCardTitle,
  IntroCardDescription, IntroCardBlock, CardImageBlock, IntroCardButton } from '../styles/banner.styled';
import Footer from '../components/footer';

export default function AllServices() {
  return (
    <>
      <Layout showDetails/>
      <SectionGroup>
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
                    {/* <IntroCardDescription hasBottomMargin>We work as a team, dedicated to improving and maintaining your oral health. Whatever your dental needs, you will be in great hands.</IntroCardDescription> */}
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
                    {/* <IntroCardDescription hasBottomMargin>Our team has the professional experience to realize that there is no such thing as one-size-fits-all approach to treatment.</IntroCardDescription> */}
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
                      <img src='/orthodontics.jpeg' />
                    </CardImageBlock>
                    <IntroCardTitle autoHeight>Orthodontics</IntroCardTitle>
                    {/* <IntroCardDescription hasBottomMargin>By using the cutting edge research and tools, we make sure your time with us is as comfortable and stress-free as possible.</IntroCardDescription> */}
                    <IntroCardButton>
                      <Link href='/orthodontics' passHref>
                        <a>Learn more</a>
                      </Link>
                    </IntroCardButton>
                  </IntroCardBlock>
                </IntroCard>
                <IntroCard>
                  <IntroCardBlock withImage>
                    <CardImageBlock>
                      <img src='/dental-fillings.jpeg' />
                    </CardImageBlock>
                    <IntroCardTitle autoHeight>Dental Fillings</IntroCardTitle>
                    {/* <IntroCardDescription hasBottomMargin>By using the cutting edge research and tools, we make sure your time with us is as comfortable and stress-free as possible.</IntroCardDescription> */}
                    <IntroCardButton>
                      <Link href='/dental-fillings' passHref>
                        <a>Learn more</a>
                      </Link>
                    </IntroCardButton>
                  </IntroCardBlock>
                </IntroCard>
                <IntroCard>
                  <IntroCardBlock withImage>
                    <CardImageBlock>
                      <img src='/dentures.jpeg' />
                    </CardImageBlock>
                    <IntroCardTitle autoHeight>Dentures</IntroCardTitle>
                    {/* <IntroCardDescription hasBottomMargin>By using the cutting edge research and tools, we make sure your time with us is as comfortable and stress-free as possible.</IntroCardDescription> */}
                    <IntroCardButton>
                      <Link href='/dentures' passHref>
                        <a>Learn more</a>
                      </Link>
                    </IntroCardButton>
                  </IntroCardBlock>
                </IntroCard>
                <IntroCard>
                  <IntroCardBlock withImage>
                    <CardImageBlock>
                      <img src='/tooth-extraction.jpeg' />
                    </CardImageBlock>
                    <IntroCardTitle autoHeight>Exraction and Impaction</IntroCardTitle>
                    {/* <IntroCardDescription hasBottomMargin>By using the cutting edge research and tools, we make sure your time with us is as comfortable and stress-free as possible.</IntroCardDescription> */}
                    <IntroCardButton>
                      <Link href='/extraction-and-impaction' passHref>
                        <a>Learn more</a>
                      </Link>
                    </IntroCardButton>
                  </IntroCardBlock>
                </IntroCard>
                <IntroCard>
                  <IntroCardBlock withImage>
                    <CardImageBlock>
                      <img src='/laser-gum.jpeg' />
                    </CardImageBlock>
                    <IntroCardTitle autoHeight>Laser Gum Treatment</IntroCardTitle>
                    {/* <IntroCardDescription hasBottomMargin>By using the cutting edge research and tools, we make sure your time with us is as comfortable and stress-free as possible.</IntroCardDescription> */}
                    <IntroCardButton>
                      <Link href='/laser-gum-treatment' passHref>
                        <a>Learn more</a>
                      </Link>
                    </IntroCardButton>
                  </IntroCardBlock>
                </IntroCard>
                <IntroCard>
                  <IntroCardBlock withImage>
                    <CardImageBlock>
                      <img src='/cosmetic-fillings.jpeg' />
                    </CardImageBlock>
                    <IntroCardTitle autoHeight>Cosmetic Fillings</IntroCardTitle>
                    {/* <IntroCardDescription hasBottomMargin>By using the cutting edge research and tools, we make sure your time with us is as comfortable and stress-free as possible.</IntroCardDescription> */}
                    <IntroCardButton>
                      <Link href='/cosmetic-fillings' passHref>
                        <a>Learn more</a>
                      </Link>
                    </IntroCardButton>
                  </IntroCardBlock>
                </IntroCard>
                <IntroCard>
                  <IntroCardBlock withImage>
                    <CardImageBlock>
                      <img src='/dentalxrays.jpeg' />
                    </CardImageBlock>
                    <IntroCardTitle autoHeight>Dental X-Rays</IntroCardTitle>
                    {/* <IntroCardDescription hasBottomMargin>By using the cutting edge research and tools, we make sure your time with us is as comfortable and stress-free as possible.</IntroCardDescription> */}
                    <IntroCardButton>
                      <Link href='/dental-xrays' passHref>
                        <a>Learn more</a>
                      </Link>
                    </IntroCardButton>
                  </IntroCardBlock>
                </IntroCard>
                <IntroCard>
                  <IntroCardBlock withImage>
                    <CardImageBlock>
                      <img src='/dental-crowns.jpeg' />
                    </CardImageBlock>
                    <IntroCardTitle autoHeight>Dental Crowns and Bridges</IntroCardTitle>
                    {/* <IntroCardDescription hasBottomMargin>By using the cutting edge research and tools, we make sure your time with us is as comfortable and stress-free as possible.</IntroCardDescription> */}
                    <IntroCardButton>
                      <Link href='/dental-crowns' passHref>
                        <a>Learn more</a>
                      </Link>
                    </IntroCardButton>
                  </IntroCardBlock>
                </IntroCard>
                <IntroCard>
                  <IntroCardBlock withImage>
                    <CardImageBlock>
                      <img src='/kids-dentistry.jpeg' />
                    </CardImageBlock>
                    <IntroCardTitle autoHeight>Kids Dentistry</IntroCardTitle>
                    {/* <IntroCardDescription hasBottomMargin>By using the cutting edge research and tools, we make sure your time with us is as comfortable and stress-free as possible.</IntroCardDescription> */}
                    <IntroCardButton>
                      <Link href='/kids-dentistry' passHref>
                        <a>Learn more</a>
                      </Link>
                    </IntroCardButton>
                  </IntroCardBlock>
                </IntroCard>
              </IntroCards>
            </IntroBlock>
        </SectionItem>
      </SectionGroup>
      <Footer />
    </>
  );
}