import React from 'react';
import { BsSunFill } from 'react-icons/bs';
import { FaAngleDoubleLeft } from 'react-icons/fa';


const thankyou = () => {
  return (
    <div>
    <div className='w-full max-w-[1240px] h-screen flex flex-col justify-center items-center'> 
        <BsSunFill className='text-[#ffbf00] mb-10' size={70}/>
        <h2>Thank you for sending me a message!</h2>
        <p className=' text-white text-2xl text-semibold mt-6 '>I will get back to you as soon as I can!</p>
    </div>
    <div>
    </div>
    </div>
   
  )
}

export default thankyou