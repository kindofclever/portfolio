import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaDotCircle, FaAngleDoubleLeft } from 'react-icons/fa';
import Marquee from 'react-fast-marquee';

const whatIamlookingfor = () => {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-start items-center">
        <div>
          <div className="flex flex-col justify-center items-center">
            <div className="grid grid-rows-2 justify-center m-5">
              <Marquee
                speed="120"
                gradientWidth="0"
                className=" mb-[-10%] mb:mb-[-15%] mt-[20%] md:mt-0 z-1"
              >
                <h3 className="text-[#ffec43] text-center text-xl md:text-5xl uppercase mb-3 p-3">
                  Alvalabs
                </h3>
                <h3 className="text-[#ffec43] text-center text-xl md:text-5xl uppercase mb-3 p-3">
                  Alvalabs
                </h3>
                <h3 className="text-[#ffec43] text-center text-xl md:text-5xl uppercase mb-3 p-3">
                  Alvalabs
                </h3>
                <h3 className="text-[#ffec43] text-center text-xl md:text-5xl uppercase mb-3 p-3">
                  Alvalabs
                </h3>
                <h3 className="text-[#ffec43] text-center text-xl md:text-5xl uppercase mb-3 p-3">
                  Alvalabs
                </h3>
                <h3 className="text-[#ffec43] text-center text-xl md:text-5xl uppercase mb-3 p-3">
                  Alvalabs
                </h3>
              </Marquee>
              <h3 className="text-white text-center  px-[12%]  mt-[-10%]  md:mt-[-2.5%] z-10  bg-[#00b4d8] gradient text-xl md:text-5xl uppercase mx-[10%]">
                personality and general mental ability test
              </h3>
            </div>
            <p className=" my-[10%] md:my-[3%] text-lg mx-[10%] text-center">
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
              className="mb-3"
            >
              <motion.div
                className="mx-5 text-[#03045E] bg-[#ffec43] hover:bg-[#03045E] p-2 m-1 hover:text-[#ffec43]  rounded-full shadow-xl cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                Results
              </motion.div>
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/">
            <motion.div
              className=" hover:text-[#ffec43] p-2 m-1  cursor-pointer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
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
