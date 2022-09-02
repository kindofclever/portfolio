import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className='ml-5 sm:mr-5 md:mr-5 w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='text-[#0077B6] uppercase text-xl tracking-widest'>About me</p>
                <h2 className='text-[#ffbf00] font-bold'>Who am I?</h2>
                <p className='text-white py-2'> I'm a curios person with a versatile background </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolore fugit possimus labore, ullam non, architecto itaque, expedita quas facilis ab sequi deleniti. Facere qui dignissimos consequatur fuga enim deserunt.
                </p>                
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit dolorem vero veritatis at hic, nulla molestias repellat aliquam, ipsa voluptates quae saepe? Inventore ex ducimus doloremque, reprehenderit rem dolorum.
                </p>
                <h3 className=' w-[35%]  py-2 cursor-pointer font-semibold hover:underline'>Have a glance at my latest projects</h3>
            </div>
            <div className='w-full h-auto m-auto flex items-center justify-center'>
                <motion.div  
                    className='mt-8 p-1 shadow-xl bg-white rounded-full'
                    whileHover={{ scale: [null, 1.3, 1.2] }}
                    transition={{ duration: 0.5 }}
                    whileTap={{ scale: 1.1 }} >
                        <Image src='/../public/assets/sandra.png' alt='Sandra making a funny face' height='270' width='270' />
                </motion.div>
            </div>
        </div>
    </div>
  ) 
}

export default About;