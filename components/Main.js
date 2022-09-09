import React from 'react';
import { IoLogoLinkedin, IoMdMail } from 'react-icons/io';
import { ImGithub } from 'react-icons/im';
import { SiCodewars } from 'react-icons/si';
import { motion } from 'framer-motion';

const Main = () => {
  return (
    <motion.div exit={{opacity: 0}} id='home' className='w-full h-screen text-center md:mt-[10%]'>
        <div className='max-w-[1240px] w-full bottom-0 flex justify-center items-centers lg:mt-[10%]'>
            <div>
                <p className='uppercase text-sm tracking-widest text-[#03045E]'>Nice that you are visiting me</p>
                <h1 className='text-white'>Hello, my name is <span className='text-[#ffec43] hover:text-[#ff4369]'>Sandra</span></h1>
                <h1 className='text-[#03055e]'>I'm a fullstack web developer</h1>
                <p className='pt-4 pb-0 max-w-[70%] m-auto'>
                    At the beginning of this year I got the great news that I was chosen from more than a 1000 applicants to 
                    attend the <span>School of Applied Technology JavaScript Bootcamp</span>. I got familiar with <span className=''>TDD, agile working methods,</span>
                    <span className=''>mob programming</span> and the tools modern fullstack developers work with. I know the principles of <span className=''>Clean Code </span> 
                    and I understand the importance of <span className=''>CI/CD</span>.
                </p>
                <div className='flex items-center justify-evenly max-w-[350px] m-auto pt-5 sm:max-w[300px] md:pt-5'>
                    
                    <a href='https://www.linkedin.com/in/sandragufler/'>
                        <motion.div 
                            className='text-[#0077B6] bg-[#ffec43] hover:bg-[#ff4369] hover:text-[#03045E] p-2 m-1 rounded-full shadow-xl cursor-pointer'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                <IoLogoLinkedin size={30}/>
                        </motion.div>
                    </a>
                    <a href='https://github.com/kindofclever'>
                        <motion.div 
                            className='text-[#0077B6] bg-[#ffec43] hover:bg-[#ff4369] hover:text-[#03045E]  p-2 m-1 rounded-full shadow-xl cursor-pointer'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                              <ImGithub size={30} />
                        </motion.div>
                    </a>

                    <a href='/#contact'>
                        <motion.div 
                            className='text-[#0077B6] bg-[#ffec43] hover:bg-[#ff4369] p-2 m-1 hover:text-[#03045E]  rounded-full shadow-xl cursor-pointer'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                               <IoMdMail size={30} />
                        </motion.div>
                    </a>
                    <a href='https://www.codewars.com/users/kindofclever'>
                        <motion.div 
                            className='text-[#0077B6] bg-[#ffec43] hover:bg-[#ff4369] p-2 m-1 hover:text-[#03045E]  rounded-full shadow-xl cursor-pointer'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                <SiCodewars size={30} />
                        </motion.div>
                    </a>
                </div>
            </div>
        </div>
    </motion.div>
  );
};

export default Main;