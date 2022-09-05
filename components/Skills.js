import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoNodejs } from 'react-icons/io';
import { DiJavascript } from 'react-icons/di';
import { SiNextdotjs, SiReact, SiGithub, SiAmazonaws, SiTrello, SiPostgresql, SiEslint, SiFigma } from 'react-icons/si';

const Skills = () => {
  return (
    <div className ='w-full lg:h-screen p-2'>
        <div className ='max-w-[1240px] ml-5 flex flex-col justify-center h-full'>
            <p className='text-[#0077B6] uppercase text-xl tracking-widest'>Skills</p>
            <h2 className='text-[#ffbf00] font-bold mt-3'>What can I do for you?</h2>
            <div className=' mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8 sm:mr-5'>
                <div className='bg-white p-6 shadow-xl rounded-xl text-white hover:scale-105 ease-in duration-30'>
                    <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                        <div className='m-auto'>
                            <AiFillHtml5 className='text-[#FF6D00]' size={60} />
                        </div> 
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-[#023E8A]'>HTML</h3>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-6 shadow-xl rounded-xl text-white hover:scale-105 ease-in duration-30'>
                    <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                        <div className='m-auto'>
                            <IoLogoCss3 className='text-[#FF6D00]' size={60} />
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-[#023E8A]'>CSS</h3>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-6 shadow-xl rounded-xl text-white hover:scale-105 ease-in duration-30'>
                    <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                        <div className='m-auto'>
                            <DiJavascript className='text-[#FF6D00]' size={60} />
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-[#023E8A]'>JavaScript</h3>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-6 shadow-xl rounded-xl text-white hover:scale-105 ease-in duration-30'>
                    <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                        <div className='m-auto'>
                            <IoLogoNodejs className='text-[#FF6D00]' size={60} />
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-[#023E8A]'>node.js</h3>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-6 shadow-xl rounded-xl text-white hover:scale-105 ease-in duration-30'>
                    <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                        <div className='m-auto'>
                            <SiReact className='text-[#FF6D00]' size={60} />
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-[#023E8A]'>react.js</h3>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-6 shadow-xl rounded-xl text-white hover:scale-105 ease-in duration-30'>
                    <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                        <div className='m-auto'>
                            <SiNextdotjs className='text-[#FF6D00]' size={60} />
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-[#023E8A]'>next.js</h3>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-6 shadow-xl rounded-xl text-white hover:scale-105 ease-in duration-30'>
                    <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                        <div className='m-auto'>
                            <SiGithub className='text-[#FF6D00]' size={60} />
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-[#023E8A]'>Github</h3>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-6 shadow-xl rounded-xl text-white hover:scale-105 ease-in duration-30'>
                    <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                        <div className='m-auto'>
                            <SiAmazonaws className='text-[#FF6D00]' size={60} />
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-[#023E8A]'>AWS</h3>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-6 shadow-xl rounded-xl text-white hover:scale-105 ease-in duration-30'>
                    <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                        <div className='m-auto'>
                            <SiTrello className='text-[#FF6D00]' size={60} />
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-[#023E8A]'>Trello</h3>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-6 shadow-xl rounded-xl text-white hover:scale-105 ease-in duration-30'>
                    <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                        <div className='m-auto'>
                            <SiPostgresql className='text-[#FF6D00]' size={60} />
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-[#023E8A]'>PostgreSQL</h3>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-6 shadow-xl rounded-xl text-white hover:scale-105 ease-in duration-30'>
                    <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                        <div className='m-auto'>
                            <SiEslint className='text-[#FF6D00]' size={60} />
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-[#023E8A]'>ESLint</h3>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-6 shadow-xl rounded-xl text-white hover:scale-105 ease-in duration-30'>
                    <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                        <div className='m-auto'>
                            <SiFigma className='text-[#FF6D00]' size={60} />
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-[#023E8A]'>Figma</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Skills;