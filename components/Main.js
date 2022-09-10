import React from 'react';
import { IoLogoLinkedin, IoMdMail } from 'react-icons/io';
import { ImGithub } from 'react-icons/im';
import { SiCodewars } from 'react-icons/si';
import { motion } from 'framer-motion';
import useMediaQuery from '../helpers/mediaQueries';
import ComputerMain from './ComputerMain';
import PhoneMain from './PhoneMain';

const Main = () => {
    const isPhone = useMediaQuery('(max-width: 550px)');
    
    return (
        <div id='home' className='w-full h-screen text-center'>
        {isPhone ? <PhoneMain /> : <ComputerMain />}
        </div>
   
  )
};

export default Main;