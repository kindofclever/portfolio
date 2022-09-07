import React from 'react';
import { BsSunFill } from 'react-icons/bs';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import Link from 'next/link';

const thankyou = () => {
  return (
    <div className='w-full max-w-[1240px] h-screen flex flex-col justify-center items-center'> 
      <div className='w-full max-w-[1240px] h-screen flex flex-col justify-center items-center'> 
          <BsSunFill className='text-[#ffbf00] mb-10' size={70}/>
          <h2>Thank you for sending me a message!</h2>
          <p className=' text-white text-2xl text-semibold mt-6 '>I will get back to you as soon as I can!</p>
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
}

export default thankyou