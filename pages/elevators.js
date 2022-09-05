import React from 'react';
import Image from 'next/image';
import elevatorImg from '../public/assets/projects/elevators.png';
import { FaDotCircle, FaAngleDoubleLeft } from 'react-icons/fa';
import Link from 'next/link';

const elevators = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[30vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[30vh] bg-[#023E8A]/70 z-10' />
          <Image className='absolute z-1' layout='fill' objectFit='cover' src={elevatorImg} alt='/' />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-20 p-2 text-white'>
            <h2 className='py-2 text-white'>Elevators</h2>
            <h3 className=' text-white'>React.js/ PostgreSQL/ Node.js/ Heroku</h3>
          </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 ml-5'>
          <div className='col-span-4'>
            <p className='text-[#0077B6] uppercase text-xl tracking-widest'>Project</p>
            <h2 className='text-[#ffbf00] py-4 font-bold  mt-3'>Overview</h2>
            <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia inventore, consequatur quaerat unde cumque consectetur alias numquam voluptatem amet quam ullam, id eligendi, possimus dolorum perferendis voluptate vel necessitatibus sed.</p>
            <button className=' bg-[#0077B6] hover:bg-gradient-to-l from-[#023E8A] to-[#0077B6] px-8 py-4 mt-2 mr-8'>Demo</button>
            <button className='bg-[#0077B6] hover:bg-gradient-to-l from-[#023E8A] to-[#0077B6] px-8 py-4 mt-2'>Code</button>
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl rounded-xl bg-white hover:bg-gradient-to-r from-[#023E8A] to-[#0077B6] group  hover:text-white '>
            <div className='py-9'>
              <p className='text-center font-bold pb-2 text-[#023E8A] group-hover:text-white'>Technologies</p>
              <div className='grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1'>
                <p className=' text-[#023E8A] flex items-center group-hover:text-white '><FaDotCircle size={10} className='mx-4' /> React.js</p>
                <p className=' text-[#023E8A] flex items-center group-hover:text-white '><FaDotCircle size={10} className='mx-4' /> Node.js</p>
                <p className=' text-[#023E8A] flex items-center group-hover:text-white '><FaDotCircle size={10} className='mx-4' /> socket.io</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-start pt-12 ml-5'>
            <Link href='/#projects'>
                <div className='text-[#0077B6] uppercase text-xl hover:underline m-1 rounded-full cursor-pointer'>
                    Back
                </div>
            </Link>
        </div>
    </div>
  )
};

export default elevators;