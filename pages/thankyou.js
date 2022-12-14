import Link from 'next/link';
import Head from 'next/head';

import { BsSunFill } from 'react-icons/bs';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const thankyou = () => {
  return (
    <>
      <Head>
        <title>Sandra Gufler | Message sent</title>
      </Head>
      <motion.div
        exit={{ opacity: 0 }}
        className="w-full max-w-[1240px] h-screen flex flex-col justify-center items-center"
      >
        <div className="w-full px-5 max-w-[1240px] h-screen flex flex-col justify-center items-center mt-[-5%]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ ease: 'linear', duration: 10, repeat: Infinity }}
            className="mb-[5%]"
          >
            <BsSunFill className="text-[#ffec43] z-[1]" size={70} />
          </motion.div>
          <h2 className=" sm:mx-5 md:mx-5 text-center">
            Thank you for sending me a message!
          </h2>
          <p className=" text-white text-2xl text-semibold mt-6 text-center">
            I will get back to you as soon as I can!
          </p>
          <div className="flex justify-start items-center">
            <Link href="/">
              <motion.div
                className="hover:text-[#ffec43] animate-bounce p-2 m-1  cursor-pointer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <FaAngleDoubleLeft size={35} />
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default thankyou;
