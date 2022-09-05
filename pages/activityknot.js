import React from 'react';
import Image from 'next/image';
import activity from '../public/assets/projects/activity-knot.png';
import { FaDotCircle, FaAngleDoubleLeft } from 'react-icons/fa';
import Link from 'next/link';

const activityknot = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[35vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[35vh] bg-[#0077B6]/90 md:bg-[#0077B6]/80  z-10' />
          <Image className='absolute z-1' layout='fill' objectFit='cover' src={activity} alt='/' />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white'>
            <h2 className='py-2 text-white'>Activity-Knot</h2>
            <h3 className=' text-white'>React.js/ PostgreSQL/ Node.js/ Heroku</h3>
          </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4 ml-5'>
            <p className='text-[#0077B6] uppercase text-xl tracking-widest'>Project</p>
            <h2 className='text-[#ffbf00] font-bold  mt-3'>Overview</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia inventore, consequatur quaerat unde cumque consectetur alias numquam voluptatem amet quam ullam, id eligendi, possimus dolorum perferendis voluptate vel necessitatibus sed.</p>
            <button className='px-8 py-2 mt-2 mr-8'>Demo</button>
            <button className='px-8 py-2 mt-2'>Code</button>
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl rounded-xl bg-white'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2 text-[#023E8A]'>Technologies</p>
              <div className='grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1'>
                <p className=' text-[#023E8A] flex items-center '><FaDotCircle size={10} className='mx-4' /> React.js</p>
                <p className=' text-[#023E8A] flex items-center '><FaDotCircle size={10} className='mx-4' /> Node.js</p>
                <p className=' text-[#023E8A] flex items-center '><FaDotCircle size={10} className='mx-4' /> Express</p>
                <p className=' text-[#023E8A] flex items-center '><FaDotCircle size={10} className='mx-4' /> PosgreSQL</p>
                <p className=' text-[#023E8A] flex items-center '><FaDotCircle size={10} className='mx-4' /> Own RESTfull api</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-start ml-5 pt-12' >
                <Link href='/#projects'>
                    <div className='text-[#0077B6] uppercase text-xl hover:underline m-1 rounded-full cursor-pointer'>
                        Back
                    </div>
                </Link>
            </div>
    </div>
  )
};

export default activityknot;