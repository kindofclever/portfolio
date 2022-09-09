import '../styles/globals.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
  
            <Component {...pageProps} />
       
  )
};

export default MyApp;
