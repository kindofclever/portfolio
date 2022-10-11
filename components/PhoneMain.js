import React from 'react';
import { IoLogoLinkedin, IoMdMail } from 'react-icons/io';
import { ImGithub } from 'react-icons/im';
import { SiCodewars } from 'react-icons/si';
import { motion } from 'framer-motion';

const PhoneMain = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] ml-3 w-full bottom-0 flex justify-center items-centers mt-[30%]">
        <div>
          <div>
            <p className="uppercase text-sm tracking-widest text-[#03045E]">
              Nice that you are visiting me
            </p>
            <h1 className="text-white">
              Hello, my name is <span className="text-[#ffec43]"> Sandra</span>
            </h1>
            <h1 className="text-[#03055e]">I'm a fullstack developer</h1>{' '}
          </div>
          <p className="pt-4 pb-0 max-w-[70%] m-auto">
            At the beginning of this year I got the great news that I was chosen
            from more than a thousand applicants to attend the{' '}
            <span>School of Applied Technology JavaScript Bootcamp</span>. I got
            familiar with <span className="">TDD, agile working methods,</span>
            <span className="">mob programming</span> and the tools modern
            fullstack developers work with. I know the principles of{' '}
            <span className="">Clean Code </span>
            and I understand the importance of <span className="">CI/CD</span>.
          </p>
          <div className="flex items-center justify-evenly max-w-[350px] m-auto pt-5 sm:max-w[300px] md:pt-5">
            <a href="https://www.linkedin.com/in/sandragufler/">
              <motion.div
                className="mx-5 text-[#03045E] bg-[#ffec43] hover:bg-[#03045E] p-2 m-1 hover:text-[#ffec43]  rounded-full shadow-xl cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <IoLogoLinkedin size={30} />
              </motion.div>
            </a>
            <a href="https://github.com/kindofclever">
              <motion.div
                className="mx-5 text-[#03045E] bg-[#ffec43] hover:bg-[#03045E] p-2 m-1 hover:text-[#ffec43]  rounded-full shadow-xl cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <ImGithub size={30} />
              </motion.div>
            </a>

            <a href="/#contact">
              <motion.div
                className="mx-5 text-[#03045E] bg-[#ffec43] hover:bg-[#03045E] p-2 m-1 hover:text-[#ffec43]  rounded-full shadow-xl cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <IoMdMail size={30} />
              </motion.div>
            </a>
            <a href="https://www.codewars.com/users/kindofclever">
              <motion.div
                className="mx-5 text-[#03045E] bg-[#ffec43] hover:bg-[#03045E] p-2 m-1 hover:text-[#ffec43]  rounded-full shadow-xl cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <SiCodewars size={30} />
              </motion.div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMain;
