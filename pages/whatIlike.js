import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaDotCircle, FaAngleDoubleLeft } from 'react-icons/fa';

const whatIlike = () => {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="flex justify-center items-center">
          <h3 className="text-white text-3xl">
            This page needs to be implemented...
          </h3>
        </div>
      </div>
      <div className="flex justify-center">
        <Link href="/#about">
          <motion.div
            className="text-[#0077B6] hover:text-[#ff4369] p-2 m-1 cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <FaAngleDoubleLeft size={35} />
          </motion.div>
        </Link>
      </div>
    </>
  );
};

export default whatIlike;
