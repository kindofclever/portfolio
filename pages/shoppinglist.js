import React from 'react';
import Image from 'next/image';
import shoppyImg from '../public/assets/projects/shopping-list.png';
import { FaDotCircle, FaAngleDoubleLeft } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Head from 'next/head';

const shoppinglist = () => {
  return (
    <>
      <Head>
        <title>Sandra Gufler | Shopping List</title>
      </Head>
      <motion.div exit={{ opacity: 0 }} className="w-full">
        <div className="w-screen h-[30vh] lg:h-[30vh] relative">
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[30vh] bg-[#03055e]/90 md:bg-[#03055e]/80  z-10" />
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={shoppyImg}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-20 p-2 text-white">
            <h2 className="py-2 text-white">Shopping-List</h2>
            <h3 className=" text-white">
              Vanillas JavaScript/ GitHub Pages/ Localstorage
            </h3>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 ml-5">
          <div className="col-span-4">
            <h2 className="uppercase text-xl tracking-widest mb-4">
              Project overview
            </h2>
            <p className="py-4">
              This is just a very simple shopping list app.
            </p>
            <a href="https://kindofclever.github.io/shopping-list/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className=" bg-[#03055e] text-white hover:bg-white hover:text-[#03055e] px-8 py-4 mt-2  mr-5 rounded-xl shadow-xl cursor-pointer"
              >
                Demo
              </motion.button>
            </a>
            <a href="https://github.com/kindofclever/shopping-list">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className=" bg-[#03055e] text-white hover:bg-white hover:text-[#03055e] px-8 py-4 mt-2  mr-5 rounded-xl shadow-xl cursor-pointer"
              >
                Code
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
                  Vanilla JavaScript
                </p>
                <p className="  group-hover:text-white  flex items-center ">
                  <FaDotCircle
                    size={10}
                    className="mx-4  group-hover:text-white "
                  />{' '}
                  GitHub Pages
                </p>
                <p className="  group-hover:text-white  flex items-center ">
                  <FaDotCircle
                    size={10}
                    className="mx-4  group-hover:text-white "
                  />{' '}
                  Localstorage
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="/#projects">
            <motion.div
              className="hover:text-[#ffec43] p-2 m-1  cursor-pointer"
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

export default shoppinglist;
