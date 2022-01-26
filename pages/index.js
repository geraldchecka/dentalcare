import Layout from '../components/layout';
import Intro from '../components/intro';
import Why from '../components/why';
import Services from '../components/services';
import Reviews from '../components/reviews';
import Footer from '../components/footer';
import { SectionGroup } from '../styles/banner.styled';
// handling when JS is disabled in browser

export default () => {
  return (
    <>
      <Layout />
      <SectionGroup>
        <Intro />
        <Why />
        <Services />
        {/* <Reviews /> */}
      </SectionGroup>
      <Footer />  
    </>
  )
}