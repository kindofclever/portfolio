import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoNodejs } from 'react-icons/io';
import { DiJavascript } from 'react-icons/di';
import { SiNextdotjs, SiReact, SiGithub, SiAmazonaws, SiTrello, SiPostgresql, SiEslint, SiFigma } from 'react-icons/si';
import { motion as m } from 'framer-motion';
import Carou from './Carousel';


const Skills = () => {
  return (
    <m.div exit={{opacity: 0}} id='skills' className ='w-full lg:h-screen p-2'>
        <div className ='max-w-[1240px] ml-5 flex flex-col justify-center h-full'>
            <p className='text-[#0077B6] uppercase text-xl tracking-widest'>Skills</p>
            <h2 className='text-[#ffec43] font-bold mt-3'>What can I do for you?</h2>
            <div className='w-full flex justify-center'>
                <div>
                    <Carou className='w-full'/>
                </div>
            </div>       


            

        </div>
    </m.div>
  );
};

export default Skills;