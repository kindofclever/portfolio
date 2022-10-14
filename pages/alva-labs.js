import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaAngleDoubleLeft } from 'react-icons/fa';

const whatIamlookingfor = () => {
  return (
    <>
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
              <h3 className="text-white text-center px-[12%] mt-1 md:mt-[-2.5%] xl:mt-5 z-10  bg-[#00b4d8] text-xl md:text-3xl xl:text-5xl uppercase mx-[5%]">
                personality and general mental ability test
              </h3>
            </div>
            <p className="mb-2 md:my-[3%] text-lg mx-[10%] xl:mx-[20%] text-center">
              The Alvalabs test is a popular tool for recruiters and companies
              to find out more about potential candiates. The first part of the
              test covers information about the candidates personality when it
              comes to social abilities, resilience, extraversion inovation etc.
              The second part meassures ones mental abilities and logical
              thinking. Click the button to find out about my results. I took
              the test in the end of August 2022.
            </p>
            <a
              href="https://drive.google.com/drive/u/0/folders/1vTdW49KSIUkscAED2TVr3WUytB43tXrP"
              className="mb-1 md:mb-3"
            >
              <motion.div
                className="mx-5 text-[#03045E] bg-[#ffec43] hover:bg-[#03045E] p-3  hover:text-[#ffec43]  rounded-full shadow-xl cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                Results
              </motion.div>
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-0 md:mt-10">
          <Link href="/">
            <motion.div
              className=" hover:text-[#ffec43] p-2 cursor-pointer"
              animate={{ y: [700, -50] }}
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
