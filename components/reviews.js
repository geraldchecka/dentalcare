import React, { useRef } from 'react';
import { SectionItem, CarouselItem, IntroBlock, IntroHeader } from '../styles/banner.styled';
import { Rerousel } from 'rerousel';

  export default function Reviews() {
    const ref = useRef(null);
    return (
      <SectionItem>
        <IntroBlock>
          <IntroHeader>
            <h1>
              Services
            </h1>
          </IntroHeader>
        </IntroBlock>
        <Rerousel itemRef={ref}>
          <CarouselItem ref={ref}>
            <div>
              <p>I have visited for my tooth filling. Dr Poornima listened to the problem first, explained the course of care to be followed and filling materials used. Filling was painless and didn't had any issues post care.</p>
              <h4>Siva C</h4>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <p>Dr Poornima is very professional and skilled Doctor and knows all the necessary treatment needed with deftful touch. I had been to this clinic for extraction, she managed to extract the tooth, without me even realizing that she already extracted, such is her skill, I strongly recommend anyone having dental issues in the area nearby around to avail the services here. The charges are also very nominal.</p>
              <h4>Dhananjay Ramasetty</h4>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <p>A genuine place for your dental treatment. The doctor is knowledgeable. She will give you the right guidance for your issue.
It's a right place for all your dental problems.</p>
              <h4>Aastha Saxena</h4>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <p>Very pleasant and professional. I went for tooth extraction and she very patiently explained the procedure and instructed me throughout the process. Fees are also reasonable. I highly recommend this doctor and clinic!</p>
              <h4>Jagadeesh YR</h4>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <p>Excellent doctor with specialists from all subspecialties available to do perfect and the right treatment for you. Your one stop clinic for all your dental needs. Relax you are in safe hands!! Highly recommended.</p>
              <h4>Sudeep pollackaran cherian</h4>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <p>Have been to this clinic a couple of times and each time I have had a great experience.  Dr Poornima is very skilled,  highly knowledgeable , very caring and confident.  Even the visiting specialists are highly skilled. All these at a nominal price... I would highly recommend this clinic for all dental needs.</p>
              <h4>Savitha Sudeep</h4>
            </div>
          </CarouselItem>
        </Rerousel>
      </SectionItem>
    )
  };