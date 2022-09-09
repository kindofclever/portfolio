import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Background from '../components/Background';
import { AnimatePresence } from 'framer-motion';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Navbar />
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  )
};

export default MyApp;
