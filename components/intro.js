import { SectionItem, IntroBanner, IntroBannerImageGroup, IntroBannerImage, IntroBannerTextBlock, IntroBannerImageBlock } from '../styles/banner.styled';

export default function Intro() {
  return (
    <>
      <SectionItem>
        <IntroBanner>
          <IntroBannerImageBlock>
            <IntroBannerImageGroup>
              <IntroBannerImage src='/sectionimage.jpeg' />
            </IntroBannerImageGroup>
          </IntroBannerImageBlock>
          <IntroBannerTextBlock>
            <h1>Welcome to Sri Sumukha Dental Care</h1>
          </IntroBannerTextBlock>
        </IntroBanner>
      </SectionItem>
    </>
  )
};