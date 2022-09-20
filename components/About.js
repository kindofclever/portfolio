import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import sandra from '../public/assets/p-picture.jpg';
import Link from 'next/link';

const About = () => {
  return (
    <motion.div exit={{opacity: 0}} id='about' className='sm:mr-5  md:mr-5 w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ml-5 '>
            <div className='col-span-2'>
                <p className='text-[#0077B6] uppercase text-xl tracking-widest'>About me</p>
                <h2 className='text-[#ffec43] font-bold  mt-3'>Who am I?</h2>
                <p className='text-white py-2'> I'm a curios person with a versatile background </p>
                <p>
                    This portfolio is still under construction. I decided to deploy it anyways, so that you can have at least a little taste of my skills.  
                </p>                
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit dolorem vero veritatis at hic, nulla molestias repellat aliquam, ipsa voluptates quae saepe? Inventore ex ducimus doloremque, reprehenderit rem dolorum.
                </p>
            </div>
            <div className='w-full h-auto m-auto flex items-center justify-center mt-10 md:mt-0'>
                <motion.div  
                    className='shadow-xl bg-white p-3 rounded-xl'
                    whileHover={{ scale: [null, 1.3, 1.2] }}
                    transition={{ duration: 0.5 }}
                    whileTap={{ scale: 1.1 }} >
                        <Image src={sandra} alt='Sandra making a funny face' height='270' width='270' className='rounded-xl m-0 p-0 bottom-0' />
                </motion.div>
            </div>
        </div>
    </motion.div>
  ) 
}

export default About;