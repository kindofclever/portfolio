import React from 'react';
import Image from 'next/image';
import activity from '../public/assets/projects/activity-knot.png';
import { FaDotCircle, FaAngleDoubleLeft } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

const activityknot = () => {
  return (
    <motion.div exit={{ opacity: 0 }} className="w-full">
      <div className="w-screen h-[30vh] lg:h-[30vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[30vh] bg-[#0077B6]/90 md:bg-[#0077B6]/80  z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={activity}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white">
          <h2 className="py-2 text-white">Activity-Knot</h2>
          <h3 className=" text-white">React.js/ PostgreSQL/ Node.js/ Heroku</h3>
        </div>
      </div>
      <div className="max-w-[1240px] p-2 grid md:grid-cols-5 gap-8 pt-8 mx-5">
        <div className="col-span-4">
          <h2 className="text-[#0077B6] uppercase text-xl tracking-widest mb-4">
            Project overview
          </h2>
          <p className="mb-4">
            The goal of this app is to connect people who share the same hobbies
            and who want to create or attend an event for a special hobby. To
            check out the code for this project, you have to switch to the
            wednesdaybranch.
          </p>
          <a href="https://activity-knot.herokuapp.com/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className=" bg-[#0077B6] text-white hover:bg-gradient-to-l from-[#023E8A] to-[#0077B6] px-8 py-4 mt-2 rounded-xl shadow-xl cursor-pointer"
            >
              Demo
            </motion.button>
          </a>
          <a href="https://github.com/matildisnil/saltFinalProjectBackend">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className=" bg-[#0077B6] text-white hover:bg-gradient-to-l from-[#023E8A] to-[#0077B6] px-8 py-4 mx-5 mt-2 rounded-xl shadow-xl cursor-pointer"
            >
              Code
            </motion.button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl rounded-xl bg-white hover:bg-[#0077B6] group  hover:text-white ">
          <div className="py-9">
            <p className="text-center font-bold pb-2 text-[#023E8A]  group-hover:text-white ">
              Technologies
            </p>
            <div className="flex flex-col justify-center items-start group-hover:text-white ">
              <p className="  group-hover:text-white  text-[#023E8A] flex items-center ">
                <FaDotCircle
                  size={10}
                  className="mx-4  group-hover:text-white "
                />{' '}
                React.js
              </p>
              <p className="  group-hover:text-white  text-[#023E8A] flex items-center ">
                <FaDotCircle
                  size={10}
                  className="mx-4  group-hover:text-white "
                />{' '}
                Node.js
              </p>
              <p className="  group-hover:text-white  text-[#023E8A] flex items-center ">
                <FaDotCircle
                  size={10}
                  className="mx-4  group-hover:text-white "
                />{' '}
                Express
              </p>
              <p className=" group-hover:text-white  text-[#023E8A] flex items-center ">
                <FaDotCircle
                  size={10}
                  className="mx-4  group-hover:text-white "
                />{' '}
                PosgreSQL
              </p>
              <p className=" group-hover:text-white   text-[#023E8A] flex items-center ">
                <FaDotCircle
                  size={10}
                  className="mx-4  group-hover:text-white "
                />{' '}
                Own RESTfull api
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Link href="/#projects">
          <motion.div
            className="text-[#0077B6] hover:text-[#ff4369] p-2 m-1  cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <FaAngleDoubleLeft size={35} />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default activityknot;
