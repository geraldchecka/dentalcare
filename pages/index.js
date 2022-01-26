import Link from 'next/link';
import GlobalStyle from '../styles/global';
import Banner from '../components/banner';
import Header from '../components/header';
import { SectionGroup, SectionItem, IntroBanner, IntroBannerImageGroup, IntroBannerImage, IntroBannerTextBlock, IntroBannerImageBlock, IntroBlock, IntroHeader, IntroCards, IntroCard, IntroCardTitle,
  IntroCardDescription, IntroCardBlock, CardImageBlock, ServicesCard } from '../styles/banner.styled';
// handling when JS is disabled in browser

export default function Hello() {
  return (
    <>
      <GlobalStyle />
      <Banner />
      <Header />
      <SectionGroup>
        <SectionItem>
          <IntroBanner>
            <IntroBannerImageBlock>
              <IntroBannerImageGroup>
                <IntroBannerImage src="/sectionimage.jpeg" />
              </IntroBannerImageGroup>
            </IntroBannerImageBlock>
            <IntroBannerTextBlock>
              <h1>Welcome to Sri Sumukha Dental Care</h1>
            </IntroBannerTextBlock>
          </IntroBanner>
        </SectionItem>
        <SectionItem>
          <IntroBlock>
            <IntroHeader>
              <h1>
                Why Sri Sumukha Dental Care?
              </h1>
            </IntroHeader>
            <IntroCards>
              <IntroCard>
                <IntroCardBlock>
                  <IntroCardTitle>Individualized Dental Care</IntroCardTitle>
                  <IntroCardDescription>We work as a team, dedicated to improving and maintaining your oral health. Whatever your dental needs, you will be in great hands.</IntroCardDescription>
                </IntroCardBlock>
              </IntroCard>
              <IntroCard>
                <IntroCardBlock>
                  <IntroCardTitle>Experienced Dental Professionals</IntroCardTitle>
                  <IntroCardDescription>Our team has the professional experience to realize that there is no such thing as one-size-fits-all approach to treatment.</IntroCardDescription>
                </IntroCardBlock>
              </IntroCard>
              <IntroCard>
                <IntroCardBlock>
                  <IntroCardTitle>The Latest Treatments</IntroCardTitle>
                  <IntroCardDescription>By using the cutting edge research and tools, we make sure your time with us is as comfortable and stress-free as possible.</IntroCardDescription>
                </IntroCardBlock>
              </IntroCard>
            </IntroCards>
          </IntroBlock>
        </SectionItem>
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
                    <img src="/rootcanal.jpeg" />
                  </CardImageBlock>
                  <IntroCardTitle autoHeight>Single Sitting Root Canal</IntroCardTitle>
                  <IntroCardDescription>We work as a team, dedicated to improving and maintaining your oral health. Whatever your dental needs, you will be in great hands.</IntroCardDescription>
                  {/* button goes here */}
                </IntroCardBlock>
              </IntroCard>
              <IntroCard>
                <IntroCardBlock withImage>
                  <CardImageBlock>
                    <img src="/dental_implants_small.jpeg" />
                  </CardImageBlock>
                  <IntroCardTitle autoHeight>Dental Implants</IntroCardTitle>
                  <IntroCardDescription>Our team has the professional experience to realize that there is no such thing as one-size-fits-all approach to treatment.</IntroCardDescription>
                  {/* button goes here */}
                </IntroCardBlock>
              </IntroCard>
              <IntroCard>
                <IntroCardBlock withImage>
                  <CardImageBlock>
                    <img src="/view_all_services.jpeg" />
                  </CardImageBlock>
                  <IntroCardTitle autoHeight>View All Services</IntroCardTitle>
                  <IntroCardDescription>By using the cutting edge research and tools, we make sure your time with us is as comfortable and stress-free as possible.</IntroCardDescription>
                  {/* button goes here */}
                </IntroCardBlock>
              </IntroCard>
            </IntroCards>
          </IntroBlock>
        </SectionItem>
        <SectionItem>Reviews</SectionItem>
      </SectionGroup>
      <footer>
        <section>Timings</section>
        <section>Statutory Copyright footnote</section>
      </footer>
    </>
  )
}