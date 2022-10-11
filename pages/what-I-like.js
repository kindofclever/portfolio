import React from 'react';
import Link from 'next/link';

import Slider from '../components/Slider';

import { motion } from 'framer-motion';
import { FaAngleDoubleLeft, FaDotCircle } from 'react-icons/fa';
import { createClient } from 'contentful';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const content = await client.getEntries({ content_type: 'aboutMe' });

  return {
    props: {
      aboutMe: content.items,
    },
  };
}

const whatIlike = ({ aboutMe }) => {
  const {
    title,
    subtitle1,
    subtitle2,
    subtitle3,
    paragraph1,
    paragraph2,
    paragraph3,
    list1,
  } = aboutMe[0].fields;

  return (
    <div className="w-screen h-screen flex flex-col justify-start items-center">
      <div className=" m-5 sm:mr-5  md:mr-5 md:h-screen p-2 flex flex-col items-start sticky w-full lg:h-screen">
        <div className="flex flex-col">
          <div className="grid md:grid-cols-2 mb-[1%]">
            <div className="flex ml-5 flex-col justify-start">
              <p className="uppercase text-3xl md:text-xl tracking-widest">
                About me
              </p>
              <h2 className="text-[#ffec43] text-4xl font-bold mt-3">
                {title}
              </h2>
            </div>
            <div className="m-5 md:ml-[-1%] rounded-xl">
              <Slider aboutMe={aboutMe} />
            </div>
          </div>
          <div className=" pb-[5%] md:pb-[3%] grid md:grid-cols-2 ml-5 mr-9">
            <h4 className="uppercase text-white text-3xl md:text-2xl pb-[3%] md:pb-[0%] tracking-widest mb-1">
              {subtitle1}
            </h4>
            <p className="text-xl md:text-base">{paragraph1}</p>
          </div>
          <div className="pb-[3%] grid md:grid-cols-2 ml-5 mr-9">
            <h4 className="uppercase text-white text-3xl md:text-2xl pb-[3%] md:pb-[0%] tracking-widest mb-1">
              {subtitle2}
            </h4>
            <p className="text-xl md:text-base">{paragraph2}</p>
          </div>
          <div className="mb-5 grid md:grid-cols-2 ml-5 mr-9">
            <h4 className="uppercase text-white text-3xl md:text-2xl pb-[3%] md:pb-[0%] tracking-widest mb-1">
              {subtitle3}
            </h4>
            <p className="text-xl md:text-base">{paragraph3}</p>
          </div>
          <div className="flex justify-center">
            <Link href="/">
              <motion.div
                className=" hover:text-[#ffec43] p-2 m-1 cursor-pointer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <FaAngleDoubleLeft size={35} />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default whatIlike;