import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiMenu4Fill } from 'react-icons/ri';
import { VscChromeClose } from 'react-icons/vsc';
import { IoLogoLinkedin, IoMdMail } from 'react-icons/io';
import { ImGithub } from 'react-icons/im';
import { SiCodewars } from 'react-icons/si';
import { BsSunFill } from 'react-icons/bs';


const Navbar = () => {

    const [navbar, setNavbar] = useState(false);
    const [navbarShadow, setNavbarShadow] = useState(false);

    const handleNavClick = () => {
        setNavbar(!navbar);
    };

    useEffect(() => {
        const handleShadow = () => {
            if(window.scrollY >= 90) {
                setNavbarShadow(true);
            } else {
                setNavbarShadow(false);
            }
        }

        window.addEventListener('scrollY', handleShadow)
    }, []);

    return (
        <header className={ navbarShadow ? 'bg-[#0077B6] fixed top-0 w-full h-20 z-[100] shadow-xl ' : 'bg-[#0077B6] fixed top-0 w-full h-20 z-[100]' }>
            <div className='flex justify-between items-center w-full h-full mb-5 p-2 2xl:px-16'>
                <Link href='/'>
                    <div className='ml-5 sm:ml-1 my-2'>
                        <BsSunFill className='text-[#ffbf00]' size={65} />
                    </div>
                </Link>
                <div>
                    <ul className='hidden md:flex'>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>About me</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Skills I have to offer</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className='ml-10 mr-10 text-sm uppercase hover:border-b'>Get in touch</li>
                        </Link>
                    </ul>
                    <div onClick={handleNavClick} className='md:hidden mr-6'>
                        <RiMenu4Fill size={35} className='text-[#ffbf00]' />
                    </div>
                </div>
            </div>
            <div className={navbar ? 'md:hidden fixed left-0 top-0 w-full h-full bg-[#0076b67b]' : ''}>
                <div className={
                    navbar 
                        ? 'fixed left-0 top-0 w-[75%] h-[100%] sm:w-[60%] md:w-[45%] bg-[#00B4D8] p-10 ease-in duration-200' 
                        : 'fixed left-[-150%] top-0 p-10 ease-out duration-200'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                        <BsSunFill className='text-[#ffbf00]' size={65} />
                            <div onClick={handleNavClick} className='hover:text-[#ffbf00] p-2 rounded-full shadow-xl cursor-pointer'>
                                <VscChromeClose size={30} />
                            </div>
                        </div>
                        <div className='border-b border-[#ffbf00] my-5'>
                            <p className='w-[90%] md:w-[95%] py-3'>Let's check if I'm a good fit for your company!</p>
                        </div>
                    </div>
                    <div>
                        <ul className='uppercase py-5 text-white text-sm flex-col'>
                            <Link href='/'>
                                <li className='py-2'>Home</li>
                            </Link>
                            <Link href='/#about'>
                                <li className='py-2'>About me</li>
                            </Link>
                            <Link href='/#skills'>
                                <li className='py-2'>Skills I have to offer</li>
                            </Link>
                            <Link href='/#projects'>
                                <li className='py-2'>Projects</li>
                            </Link>
                            <Link href='/#contact'>
                                <li className='py-2'>Get in touch</li>
                            </Link>
                        </ul>
                        <div className='py-'>
                            <p className='uppercase text-xs mt-10 tracking-widest text-[#ffbf00] font-bold'>Let's connect!</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[90%]'>
                                <div className='p-2 m-1 rounded-full shadow-xl cursor-pointer hover:scale-105 ease-in duration-200'>
                                    <IoLogoLinkedin size={30}/>
                                </div>
                                <div className='p-2 m-1 rounded-full shadow-xl cursor-pointer hover:scale-105 ease-in duration-200'>
                                    <ImGithub size={30} />
                                </div>
                                <div className='p-2 m-1 rounded-full shadow-xl cursor-pointer hover:scale-105 ease-in duration-200'>
                                    <IoMdMail size={30} />
                                </div>
                                <div className='p-2 m-1 rounded-full shadow-xl cursor-pointer hover:scale-105 ease-in duration-200'>
                                    <SiCodewars size={30} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;