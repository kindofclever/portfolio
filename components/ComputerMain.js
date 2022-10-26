import { IoLogoLinkedin, IoMdMail } from 'react-icons/io';
import { ImGithub } from 'react-icons/im';
import { SiCodewars } from 'react-icons/si';
import { motion } from 'framer-motion';

const ComputerMain = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="w-full bottom-0 flex justify-center items-center mt-[30%] lg:mt-[20%]">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <motion.p
              className="uppercase text-sm tracking-widest text-[#03045E]"
              animate={{ x: [-700, 0] }}
              transition={{ duration: 0.8, bounce: 0.2 }}
            >
              Nice that you are visiting me
            </motion.p>
            <motion.h1
              className="text-white"
              animate={{ x: [800, 0] }}
              transition={{ duration: 1.3 }}
            >
              Hello, my name is
              <span className="text-[#ffec43]"> Sandra</span>
            </motion.h1>
            <motion.h1
              className="text-[#03055e]"
              animate={{ x: [-800, 0] }}
              transition={{ duration: 1.1 }}
            >
              I'm a fullstack developer
            </motion.h1>{' '}
          </div>
          <p className="pt-4 pb-0 mx-[26%]">
            At the beginning of this year I got the great news that I was chosen
            from more than a thousand applicants to attend the School of Applied
            Technology JavaScript Bootcamp. I got familiar with TDD, agile
            working methods, mob programming and the tools modern fullstack
            developers work with. I know the principles of Clean Code and I
            understand the importance of CI/CD.
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

export default ComputerMain;
