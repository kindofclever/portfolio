import { useRouter } from 'next/router';

import '../styles/globals.css';

import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animatState"
        exit="exitState"
        transition={{
          duration: 1,
        }}
        variants={{
          initialState: {
            opacity: 1,
          },
          animateState: {
            opacity: 0,
          },
          exitState: {
            filter: 'invert()',
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
