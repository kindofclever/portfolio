import React from 'react';
import { IoLogoLinkedin, IoMdMail } from 'react-icons/io';
import { ImGithub } from 'react-icons/im';
import { SiCodewars } from 'react-icons/si';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center mt-[33%] md:mt-[10%]'>
        <div className='max-w-[1240px] w-full bottom-0 flex justify-center items-centers lg:mt-[10%]'>
            <div>
                <p className='uppercase text-sm tracking-widest text-[#03045E]'>Nice that you are visiting me</p>
                <h1 className='text-white'>Hello, my name is <span className='text-[#ffbf00] hover:text-[#FF8500]'>Sandra</span></h1>
                <h1 className='text-[#03055e]'>I'm a fullstack web developer</h1>
                <p className='pt-4 pb-0 max-w-[70%] m-auto'>
                    At the beginning of this year I got the great news that I was chosen from more than a 1000 applicants to 
                    attend the <span>School of Applied Technology JavaScript Bootcamp</span>. I got familiar with <span className=''>TDD, agile working methods,</span>
                    <span className=''>mob programming</span> and the tools modern fullstack developers work with. I know the principles of <span className=''>Clean Code </span> 
                    and I understand the importance of <span className=''>CI/CD</span>.
                </p>
                <div className='flex items-center justify-evenly max-w-[350px] m-auto pt-5 sm:max-w[300px] md:pt-5'>
                    
                    <a href='https://www.linkedin.com/in/sandragufler/'>
                        <div className='text-[#0077B6] bg-[#ffbf00] hover:bg-gradient-to-l from-[#FF8500] to-[#ffbf00] p-2 m-1 rounded-full shadow-xl cursor-pointer hover:scale-[105%] ease-in duration-50'>
                            <IoLogoLinkedin size={30}/>
                        </div>
                    </a>
                    <a href='https://github.com/kindofclever'>
                        <div className='text-[#0077B6] bg-[#ffbf00] hover:bg-gradient-to-l from-[#FF8500] to-[#ffbf00] p-2 m-1 rounded-full shadow-xl cursor-pointer hover:scale-[105%] ease-in duration-50'>
                            <ImGithub size={30} />
                        </div>
                    </a>

                    <a href='/#contact'>
                        <div className='text-[#0077B6] bg-[#ffbf00] hover:bg-gradient-to-l from-[#FF8500] to-[#ffbf00] p-2 m-1 rounded-full shadow-xl cursor-pointer hover:scale-[105%] ease-in duration-50'>
                            <IoMdMail size={30} />
                        </div>
                    </a>
                    <a href='https://www.codewars.com/users/kindofclever'>
                        <div className='text-[#0077B6] bg-[#ffbf00] hover:bg-gradient-to-l from-[#FF8500] to-[#ffbf00] p-2 m-1 rounded-full shadow-xl cursor-pointer hover:scale-[105%] ease-in duration-50'>
                            <SiCodewars size={30} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Main;