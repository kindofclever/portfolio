import Head from 'next/head';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import useMediaQuery from '../helpers/mediaQueries';
import ComputerMain from '../components/ComputerMain';
import PhoneMain from '../components/PhoneMain';



export default function Home() {
  const isPhone = useMediaQuery('(max-width: 550px)')
  return (
    <motion.div exit={{opacity: 0}}>
      <Head>
        <title>Sandra Gufler | Fullstack developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/smiley.ico" />
      </Head>
      <Navbar />
      {!isPhone? <ComputerMain /> : <div></div> }
      {isPhone ? <PhoneMain /> : <div></div> }
      {/* <Main /> */}
      <About />
      <Skills className='pt-[7%]'/>
      <Projects />
      <Contact />
    </motion.div>
  );
};
