import Link from 'next/link';
import GlobalStyle from '../styles/global';
import Banner from '../components/banner';
// handling when JS is disabled in browser

export default function Hello() {
  return (
    <>
      <GlobalStyle />
      <Banner />
      <header>
        <h1>Sri Sumukha Dental Care</h1>
        <figure>
          {/* some image logo */}
          <figcaption>Sri Sumukha Dental Care</figcaption>
        </figure>
      </header>
      <nav>About | Contact Us</nav>
      <main>
        <section></section>
      </main>
      <footer>
        <section>Timings</section>
        <section>Statutory Copyright footnote</section>
      </footer>
    </>
  )
}