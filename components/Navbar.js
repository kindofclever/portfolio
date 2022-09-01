import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {RiMenu4Fill} from 'react-icons/ri'

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Image 
                src='/../public/assets/logo/logo2.png' 
                alt='logo' 
                width='90' 
                height='90' /> 
            <div>
                <ul className='hidden md:flex'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>About me</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Skills I have to offer</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 mr-10 text-sm uppercase hover:border-b'>Get in touch</li>
                    </Link>
                </ul>
                <div className='md:hidden mr-10'>
                    <RiMenu4Fill size={35} className='text-[#ffbf00]' />
                </div>
            </div>
        </div>
        <div className='fixed left-0 top-0 w-full h-screen bg-[#0077B6]'>

        </div>
    </div>
  )
}

export default Navbar