import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import logo from '../public/assets/logo/logo2.png';

import { RiMenu4Fill } from 'react-icons/ri';
import { VscChromeClose } from 'react-icons/vsc';
import { IoLogoLinkedin, IoMdMail } from 'react-icons/io';
import { ImGithub } from 'react-icons/im';
import { SiCodewars } from 'react-icons/si';
import { BsSunFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [navbarShadow, setNavbarShadow] = useState(false);
  const [navbarTextColour, setNavbarTextColour] = useState('');
  const router = useRouter();

  const handleNavClick = () => {
    setNavbar(!navbar);
  };

  useEffect(() => {
    if (
      router.asPath === '/activityknot' ||
      router.asPath === '/elevators' ||
      router.asPath === '/shoppinglist' ||
      router.asPath === '/tilia'
    ) {
      setNavbarTextColour('white');
    } else {
      setNavbarTextColour('');
    }
  }, [router]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 0) {
        setNavbarShadow(true);
      } else {
        setNavbarShadow(false);
      }
    };

    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <motion.header
      exit={{ opacity: 0 }}
      id="header"
      className={
        navbarShadow
          ? 'fixed top-0 w-full h-20 z-[100]   bg-[#00B4D8] text-white sm:mb-[10%] '
          : ' fixed top-0 w-full h-20  z-[100]'
      }
    >
      <div className="flex justify-between items-center h-full mb-5 p-2 2xl:px-16">
        <Link href="/" className="cursor-pointer">
          <div className="ml-1 md:ml-5 mt-2">
            <Image src={logo} height="80" width="80" />
          </div>
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li
                style={{ color: `${navbarTextColour}` }}
                className="ml-10 text-sm uppercase hover:border-b"
              >
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li
                style={{ color: `${navbarTextColour}` }}
                className="ml-10 text-sm uppercase hover:border-b"
              >
                About me
              </li>
            </Link>
            <Link href="/#projects">
              <li
                style={{ color: `${navbarTextColour}` }}
                className="ml-10 text-sm uppercase hover:border-b"
              >
                Projects
              </li>
            </Link>
            <Link href="/#skills">
              <li
                style={{ color: `${navbarTextColour}` }}
                className="ml-10 text-sm uppercase hover:border-b"
              >
                Skills I have to offer
              </li>
            </Link>
            <Link href="/#contact">
              <li
                style={{ color: `${navbarTextColour}` }}
                className="ml-10 mr-10 text-sm uppercase hover:border-b"
              >
                Get in touch
              </li>
            </Link>
          </ul>
          <motion.div
            onClick={handleNavClick}
            className="md:hidden mr-5"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <RiMenu4Fill size={35} className="text-[#ffec43]" />
          </motion.div>
        </div>
      </div>
      <div
        className={navbar ? 'md:hidden fixed left-0 top-0 w-full h-full' : ''}
      >
        <div
          className={
            navbar
              ? 'fixed left-0 top-0 w-[75%] h-[100%] sm:w-[60%] md:w-[45%] bg-[#00B4D8] p-10 ease-in duration-200'
              : 'fixed left-[-150%] top-0 p-10 ease-out duration-200 '
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <BsSunFill className="text-[#ffec43]" size={65} />
              <div
                onClick={handleNavClick}
                className="hover:text-[#ffec43] p-2 rounded-full shadow-xl cursor-pointer"
              >
                <VscChromeClose className="text-[#03045E]" size={30} />
              </div>
            </div>
            <div className="border-b border-[#ffec43] my-5">
              <p className="w-[90%] md:w-[95%] py-3 text-[#03045E]">
                Let's check if I'm a good fit for your company!
              </p>
            </div>
          </div>
          <div>
            <ul className="uppercase py-5 text-sm text-white flex-col">
              <Link href="/">
                <li onClick={() => setNavbar(false)} className="py-2">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNavbar(false)} className="py-2">
                  About me
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNavbar(false)} className="py-2">
                  Projects
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNavbar(false)} className="py-2">
                  Skills I have to offer
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNavbar(false)} className="py-2">
                  Get in touch
                </li>
              </Link>
            </ul>
            <div className="py-">
              <p className="uppercase text-xs mt-10 tracking-widest text-[#ffec43] font-bold">
                Let's connect!
              </p>
              <div className="flex items-center text-[#03045E] justify-between my-4 w-full sm:w-[90%]">
                <a href="https://www.linkedin.com/in/sandragufler/">
                  <motion.div
                    className="p-2 m-1 rounded-full shadow-xl cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <IoLogoLinkedin size={30} />
                  </motion.div>
                </a>
                <a href="https://github.com/kindofclever">
                  <motion.div
                    className="p-2 m-1 rounded-full shadow-xl cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <ImGithub size={30} />
                  </motion.div>
                </a>
                <a href="https://www.codewars.com/users/kindofclever">
                  <motion.div
                    className="p-2 m-1 rounded-full shadow-xl cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <SiCodewars size={30} />
                  </motion.div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
