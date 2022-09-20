import * as React from "react";
import Carousel from "framer-motion-carousel";
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoNodejs } from 'react-icons/io';
import { DiJavascript } from 'react-icons/di';
import { SiNextdotjs, SiReact, SiGithub, SiAmazonaws, SiTrello, SiPostgresql, SiEslint, SiFigma } from 'react-icons/si';

const skill = <h1></h1>

const colors = ['hello'];

const Carou = () => (
    <div className=' mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8 sm:mr-5' style={{ width: 600, height: 400 }}>
    <Carousel>

                  

       
        <div> 
            <div className='bg-white p-6 shadow-xl rounded-xl text-white hover:scale-105 ease-in duration-30 px-5'>
                <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                    <div className='m-auto'>
                        <AiFillHtml5 className='text-[#ff4369]' size={60} />
                    </div> 
                    <div className='flex flex-col justify-center items-center'>
                        <h3 className='text-[#023E8A]'>HTML</h3>
                    </div>
                </div>
            </div>
        </div>
        <div> 
            <div className='bg-white p-6 shadow-xl rounded-xl text-white hover:scale-105 ease-in duration-30 px-5'>
                <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                    <div className='m-auto'>
                        <AiFillHtml5 className='text-[#ff4369]' size={60} />
                    </div> 
                    <div className='flex flex-col justify-center items-center'>
                        <h3 className='text-[#023E8A]'>HTML</h3>
                    </div>
                </div>
            </div>
        </div>
        <div> 
            <div className='bg-white p-6 shadow-xl rounded-xl text-white hover:scale-105 ease-in duration-30 px-5'>
                <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                    <div className='m-auto'>
                        <AiFillHtml5 className='text-[#ff4369]' size={60} />
                    </div> 
                    <div className='flex flex-col justify-center items-center'>
                        <h3 className='text-[#023E8A]'>HTML</h3>
                    </div>
                </div>
            </div>
        </div>
        



    </Carousel>
  </div>
);
export default Carou;
