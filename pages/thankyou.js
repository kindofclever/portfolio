import React from 'react';
import { BsSunFill } from 'react-icons/bs';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

const thankyou = () => {
  return (
    <div className='w-full max-w-[1240px] h-screen flex flex-col justify-center items-center'> 
      <div className='w-full px-5 max-w-[1240px] h-screen flex flex-col justify-center items-center'> 
          <motion.div 
            animate={{rotate: 360}}  
            transition={{ ease: "linear", duration: 5, repeat: Infinity }}
            className='mb-[6%]'>
            <BsSunFill className='text-[#ffbf00]' size={70} />
          </motion.div>
          <h2 className='scroll-mx-0 sm:mx-5 md:mx-5 text-center'>Thank you for sending me a message!</h2>
          <p className=' text-white text-2xl text-semibold mt-6 text-center'>I will get back to you as soon as I can!</p>
      </div>
      <div className='flex justify-center' >
          <Link href='/#projects'>
              <div className='text-[#0077B6] p-2 m-1 mb-8 cursor-pointer hover:scale-[105%] ease-in duration-200'>
                  <FaAngleDoubleLeft size={35}/>
              </div>
          </Link>
        </div>
    </div>
  )
};

export default thankyou;