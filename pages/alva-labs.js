import Link from 'next/link';
import Head from 'next/head';

import useMediaQuery from '../helpers/mediaQueries';

import { motion } from 'framer-motion';
import { FaAngleDoubleLeft } from 'react-icons/fa';

const whatIamlookingfor = () => {
  const isPhone = useMediaQuery('(max-width: 550px)');
  return (
    <>
      <Head>
        <title>Sandra Gufler | Alva Labs</title>
      </Head>
      <div className="w-screen h-screen flex flex-col justify-start items-center">
        <div>
          <div className="flex flex-col justify-center items-center m-5">
            <div className="grid grid-rows-2 justify-center mt-0 xl:mt-[5%] ">
              <motion.h3
                className="text-[#ffec43] text-center text-3xl mb-1 md:text-5xl md:mt-5 uppercase xl:mb-5"
                animate={{ y: [-700, 50] }}
                transition={{ duration: 0.8 }}
              >
                Alvalabs
              </motion.h3>
              <h3 className="text-white text-center px-[12%] mb-4 mt-1 md:mt-[-2.5%] xl:mt-5 z-10  bg-[#00b4d8] text-xl md:text-3xl xl:text-5xl uppercase mx-[5%]">
                personality and general mental ability test
              </h3>
            </div>
            <p className="mb-5 md:my-[3%] text-lg mx-[10%] xl:mx-[20%] text-center">
              The Alva Labs tests are a popular tool used by recruiters and companies to gain insights into potential candidates. The first part delves into the candidate's personality, assessing attributes such as social abilities, resilience, extraversion, innovation, and more. The second section measures an individual's mental abilities, particularly logical thinking. Click the button below to view my results.
            </p>

            <a href="/Personality.pdf" download="Alva_Labs_Personality_Sandra_Gufler.pdf" className="mb-1 md:mb-3">
              <motion.div
                className="mx-5 text-[#03045E] bg-[#ffec43] hover:bg-[#03045E] p-3  hover:text-[#ffec43]  rounded-full shadow-xl cursor-pointer lg:w-[300px] flex justify-center items-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                Download Personality Results
              </motion.div>
            </a>
            <a href="/Logic.pdf" download="Alva_Labs_Logic_Sandra_Gufler.pdf" className="mb-1 md:mb-3">
              <motion.div
                className="mx-5 text-[#03045E] bg-[#ffec43] hover:bg-[#03045E] p-3  hover:text-[#ffec43]  rounded-full shadow-xl cursor-pointer lg:w-[300px] flex justify-center items-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                Download Logical Abilities
              </motion.div>
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-0 md:mt-10">
          <Link href="/">
            <motion.div
              className=" hover:text-[#ffec43] p-2 cursor-pointer"
              animate={isPhone ? { y: [700, 0] } : { y: [700, -50] }}
              transition={{
                duration: 0.8,
                type: 'spring',
                stiffness: 400,
                damping: 17,
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaAngleDoubleLeft size={35} />
            </motion.div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default whatIamlookingfor;
