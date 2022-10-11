import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaDotCircle, FaAngleDoubleLeft } from 'react-icons/fa';

const faq = () => {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div>
          <div className="flex justify-center items-center">
            <h3 className="text-white text-3xl">
              This page needs to be implemented...
            </h3>
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="/">
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
      </div>
    </>
  );
};

export default faq;