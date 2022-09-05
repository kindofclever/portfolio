import React from 'react';
import { IoLogoLinkedin, IoMdMail } from 'react-icons/io';
import { ImGithub } from 'react-icons/im';
import { SiCodewars } from 'react-icons/si';

const Contact = () => {
  return (
    <div className='w-full lg:h-screen pt-8'>
        <div className='max-w-[1240px] m-auto ml-5 px-2 py-16 w-full'>
            <p className='text-[#0077B6] uppercase text-xl tracking-widest'>Contact</p>
            <h2 className='text-[#ffbf00] font-bold mt-3'>Do you have questions?</h2>
            <div className='grid lg:grid-cols-5 gap-8 mt-5'>
                <div className='col-span-3 lg:col-span-2 mr-5 h-full shadow-xl rounded-xl p-3 bg-white'>
                    <div className='h-full lg:p-4'>
                        <div>
                            <img
                                src='https://images.unsplash.com/photo-1528747045269-390fe33c19f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' 
                                alt='contact'
                                className='rounded-xl hover:scale-105 ease-in duration-300 xs:mr-5 sm:mr-5 md:mr-5' />
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='py-4 text-[#023E8A]'>Sandra Gufler</h2>
                            <p>Fullstack web developer</p>
                            <p className='pb-0'>I'm looking for a full-time position based in Stockholm</p>
                        </div>
                        <div>
                         <p className='uppercase pt-4 text-center text-bold pb-1'>Connect with me!</p>
                         <div className='flex items-center justify-evenly py-2'>
                            <div className='text-[#0077B6] bg-[#ffbf00] p-2 m-1 rounded-full shadow-xl cursor-pointer hover:scale-[125%] ease-in duration-200'>
                            <IoLogoLinkedin size={30}/>
                            </div>
                            <div className='text-[#0077B6] bg-[#ffbf00] p-2 m-1 rounded-full shadow-xl cursor-pointer hover:scale-[125%] ease-in duration-200'>
                                <ImGithub size={30} />
                            </div>
                            <div className='text-[#0077B6] bg-[#ffbf00] p-2 m-1 rounded-full shadow-xl cursor-pointer hover:scale-[125%] ease-in duration-200'>
                                <IoMdMail size={30} />
                            </div>
                            <div className='text-[#0077B6] bg-[#ffbf00] p-2 m-1 rounded-full shadow-xl cursor-pointer hover:scale-[125%] ease-in duration-200'>
                                <SiCodewars size={30} />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className=''>

            </div>
            </div>
        </div>
    </div>
  )
}

export default Contact