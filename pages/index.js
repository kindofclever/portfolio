import Head from 'next/head';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Sandra Gufler | Fullstack developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/smiley.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};
