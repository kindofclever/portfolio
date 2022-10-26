import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import activity from '../public/assets/projects/elevators.png';

import { FaDotCircle, FaAngleDoubleLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const elevators = () => {
  return (
    <>
      <Head>
        <title>Sandra Gufler | Elevators</title>
      </Head>
      <motion.div exit={{ opacity: 0 }} className="w-full">
        <div className="w-screen h-[30vh] lg:h-[30vh] relative">
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[30vh] bg-[#03055e]/90 md:bg-[#03055e]/80  z-10" />
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={activity}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-20 p-2 text-white">
            <h2 className="py-2 text-white">Elevator system</h2>
            <h3 className=" text-white">React.js/ Node.js/ Socket.io</h3>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 ml-5">
          <div className="col-span-4">
            <h2 className=" uppercase text-xl tracking-widest mb-4">
              Project overview
            </h2>

            {/* <button className=' bg-[#0077B6] hover:bg-gradient-to-l from-[#023E8A] to-[#0077B6] px-8 py-4 mt-2 mr-8'>Demo</button>
            <button className='bg-[#0077B6] hover:bg-gradient-to-l from-[#023E8A] to-[#0077B6] px-8 py-4 mt-2'>Code</button> */}

            <p className="text-white py-2">
              The code for this project is not public at the moment...
            </p>
            <p>
              ...because it was written on top of an already existing bare bone
              project for a code challenge. This means I don't have the legal
              rights to share the code. But I made a short clip where you can
              see the part of the code that I wrote in action.For this code
              challenge I had to animate an elevator system with 20 floors and 5
              elevator cabins. The goal was to fetch the cabins and their
              current position from the backend and visualize them in the
              frontend. Also I had to make sure that when I press a floor
              button, that the best fitting elevator cabin appears. I could
              decide for myself which cabin was the "best", so I decided to
              write an algorithem that checks for the closest elevator: Like
              this the people who press the button don't have to wait longer
              than necessary.
            </p>

            <a href="https://share.vidyard.com/watch/K8wAm2MbXJok1bxi5hTxgv?">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className=" bg-[#03055e] text-white hover:bg-white hover:text-[#03055e] px-8 py-4 mt-2  mr-5 rounded-xl shadow-xl cursor-pointer"
              >
                Clip
              </motion.button>
            </a>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl rounded-xl bg-white hover:bg-[#03055e] group  hover:text-white ">
            <div className="py-9">
              <p className="text-center font-bold pb-2  group-hover:text-white ">
                Technologies
              </p>
              <div className="flex flex-col justify-center items-start group-hover:text-white ">
                <p className="  group-hover:text-white  flex items-center ">
                  <FaDotCircle
                    size={10}
                    className="mx-4  group-hover:text-white "
                  />{' '}
                  React.js
                </p>
                <p className="  group-hover:text-white  flex items-center ">
                  <FaDotCircle
                    size={10}
                    className="mx-4  group-hover:text-white "
                  />{' '}
                  Node.js
                </p>
                <p className="  group-hover:text-white  flex items-center ">
                  <FaDotCircle
                    size={10}
                    className="mx-4  group-hover:text-white "
                  />{' '}
                  socket.io
                </p>
                <p className="  group-hover:text-white  flex items-center ">
                  <FaDotCircle
                    size={10}
                    className="mx-4  group-hover:text-white "
                  />{' '}
                  TypeScript
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="/#projects">
            <motion.div
              className=" hover:text-[#ffec43] p-2 m-1  cursor-pointer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <FaAngleDoubleLeft size={35} />
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default elevators;
