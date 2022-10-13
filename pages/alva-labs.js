import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaDotCircle, FaAngleDoubleLeft } from 'react-icons/fa';

const whatIamlookingfor = () => {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-white text-center text-xl md:text-3xl uppercase">
              Alvalabs personality and general mental ability test
            </h3>
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
