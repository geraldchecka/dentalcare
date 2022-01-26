import { SectionItem, IntroBlock, IntroHeader, IntroCards, IntroCard, IntroCardTitle,
  IntroCardDescription, IntroCardBlock } from '../styles/banner.styled';

export default function Why() {
  return (
    <>
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
    </>
  )
};