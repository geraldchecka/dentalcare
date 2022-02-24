import Layout from '../components/layout';
import Intro from '../components/intro';
import Why from '../components/why';
import Services from '../components/services';
import QuickConnect from '../components/quickconnect';
import Footer from '../components/footer';
import Reviews from '../components/reviews';
import { SectionGroup } from '../styles/banner.styled';
// handling when JS is disabled in browser

export default () => {
  return (
    <>
      <Layout />
      <SectionGroup>
        <QuickConnect />
        <Intro />
        <Why />
        <Services />
        <Reviews />
      </SectionGroup>
      <Footer />
    </>
  )
}