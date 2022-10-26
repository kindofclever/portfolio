import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoNodejs } from 'react-icons/io';
import { DiJavascript } from 'react-icons/di';
import { ImGit } from 'react-icons/im';
import {
  SiFramer,
  SiNextdotjs,
  SiReact,
  SiGithub,
  SiAmazonaws,
  SiMongodb,
  SiTrello,
  SiPostgresql,
  SiEslint,
  SiFigma,
  SiTypescript,
  SiExpress,
} from 'react-icons/si';
import { motion as m } from 'framer-motion';
import Marquee from 'react-fast-marquee';

const Skills = () => {
  return (
    <m.div
      exit={{ opacity: 0 }}
      id="skills"
      className=" sticky lg:h-screen pt-[15%] md:pt-[7%] pb-[95%] md:pb-[0]  m-5 "
    >
      <div className=" px-0 md:px-2 flex flex-col justify-center">
        <p className="uppercase text-xl tracking-widest">Skills</p>
        <h2 className="text-[#ffec43] font-bold mt-3">
          What can I do for you?
        </h2>
        <p className="text-white">
          Click and hold the slider to pause the animation!
        </p>
        <div>
          <m.div className="flex mt-[20%] md:mt-[10%] bg-[#ffec43] -rotate-6 p-3 md:p-5">
            <Marquee speed="120" gradientWidth="0" pauseOnClick className="">
              <m.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                className="flex flex-col justify-center items-center bg-white m-5 w-[200px] rounded-xl p-5 h-[200px] "
              >
                <AiFillHtml5 className="text-[#03045E]" size={80} />
                <h3 className="text-[#03045E]">HTML</h3>
              </m.div>
              <m.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                className="flex flex-col justify-center items-center bg-white m-5 w-[200px] rounded-xl p-5 h-[200px] "
              >
                <IoLogoCss3 className="text-[#03045E]" size={80} />
                <h3 className="text-[#03045E]">CSS</h3>
              </m.div>
              <m.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                className="flex flex-col justify-center items-center bg-white m-5 w-[200px] rounded-xl p-5 h-[200px] "
              >
                <DiJavascript className="text-[#03045E]" size={80} />
                <h3 className="text-[#03045E]">JavaScript</h3>
              </m.div>
              <m.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                className="flex flex-col justify-center items-center bg-white m-5 w-[200px] rounded-xl p-5 h-[200px] "
              >
                <SiTypescript className="text-[#03045E]" size={80} />
                <h3 className="text-[#03045E]">Typescript</h3>
              </m.div>
              <m.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                className="flex flex-col justify-center items-center bg-white m-5 w-[200px] rounded-xl p-5 h-[200px] "
              >
                <SiReact className="text-[#03045E]" size={80} />
                <h3 className="text-[#03045E]">React.js</h3>
              </m.div>
              <m.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                className="flex flex-col justify-center items-center bg-white m-5 w-[200px] rounded-xl p-5 h-[200px] "
              >
                <SiNextdotjs className="text-[#03045E]" size={80} />
                <h3 className="text-[#03045E]">Next.js</h3>
              </m.div>
              <m.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                className="flex flex-col justify-center items-center bg-white m-5 w-[200px] rounded-xl p-5 h-[200px] "
              >
                <SiFramer className="text-[#03045E]" size={80} />
                <h3 className="text-[#03045E]">Framer Motion</h3>
              </m.div>
              <m.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                className="flex flex-col justify-center items-center bg-white m-5 w-[200px] rounded-xl p-5 h-[200px] "
              >
                <IoLogoNodejs className="text-[#03045E]" size={80} />
                <h3 className="text-[#03045E]">Node.js</h3>
              </m.div>
              <m.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                className="flex flex-col justify-center items-center bg-white m-5 w-[200px] rounded-xl p-5 h-[200px] "
              >
                <SiExpress className="text-[#03045E]" size={80} />
                <h3 className="text-[#03045E]">Express</h3>
              </m.div>
              <m.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                className="flex flex-col justify-center items-center bg-white m-5 w-[200px] rounded-xl p-5 h-[200px] "
              >
                <SiEslint className="text-[#03045E]" size={80} />
                <h3 className="text-[#03045E]">ESLint</h3>
              </m.div>
              <m.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                className="flex flex-col justify-center items-center bg-white m-5 w-[200px] rounded-xl p-5 h-[200px] "
              >
                <ImGit className="text-[#03045E]" size={80} />
                <h3 className="text-[#03045E]">Git</h3>
              </m.div>
              <m.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                className="flex flex-col justify-center items-center bg-white m-5 w-[200px] rounded-xl p-5 h-[200px] "
              >
                <SiGithub className="text-[#03045E]" size={80} />
                <h3 className="text-[#03045E]">GitHub</h3>
              </m.div>
              <m.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                className="flex flex-col justify-center items-center bg-white m-5 w-[200px] rounded-xl p-5 h-[200px] "
              >
                <SiMongodb className="text-[#03045E]" size={80} />
                <h3 className="text-[#03045E]">MongoDB</h3>
              </m.div>
              <m.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                className="flex flex-col justify-center items-center bg-white m-5 w-[200px] rounded-xl p-5 h-[200px] "
              >
                <SiPostgresql className="text-[#03045E]" size={80} />
                <h3 className="text-[#03045E]">PostgreSQL</h3>
              </m.div>
              <m.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                className="flex flex-col justify-center items-center bg-white m-5 w-[200px] rounded-xl p-5 h-[200px] "
              >
                <SiFigma className="text-[#03045E]" size={80} />
                <h3 className="text-[#03045E]">Figma</h3>
              </m.div>
              <m.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                className="flex flex-col justify-center items-center bg-white m-5 w-[200px] rounded-xl p-5 h-[200px] "
              >
                <SiTrello className="text-[#03045E]" size={80} />
                <h3 className="text-[#03045E]">Trello</h3>
              </m.div>
            </Marquee>
          </m.div>
        </div>
      </div>
    </m.div>
  );
};

export default Skills;
