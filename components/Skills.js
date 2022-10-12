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
import { useState, useRef, useEffect } from 'react';

const Skills = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    console.log(carousel.current);
  }, []);

  return (
    <m.div
      exit={{ opacity: 0 }}
      id="skills"
      className=" sticky w-full lg:h-screen pt-[15%] m-5 "
    >
      <div className=" px-0 md:px-2 flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest">Skills</p>
        <h2 className="text-[#ffec43] font-bold mt-3">
          What can I do for you?
        </h2>
        <p className="text-white">Slide through some of my skills!</p>
        <m.div
          ref={carousel}
          className="cursor-grab overflow-hidden mr-5 md:mr-10"
        >
          <m.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex"
          >
            <m.div className="min-h-[40rem] min-w-[18rem] md:min-w-[24rem]  p-[40px]  flex flex-col">
              <div className="bg-white p-6 shadow-xl rounded-xl px-5 mb-5">
                <div className="grid grid-cols-2 justify-center gap-4 items-center">
                  <div className="m-auto">
                    <AiFillHtml5 className="text-[#03045E]" size={60} />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="text-[#03045E]">HTML</h3>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 shadow-xl rounded-xl px-5">
                <div className="grid grid-cols-2 justify-center gap-4 items-center">
                  <div className="m-auto">
                    <IoLogoCss3 className="text-[#03045E]" size={60} />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="text-[#03045E]">CSS</h3>
                  </div>
                </div>
              </div>
            </m.div>

            <m.div className="min-h-[40rem] min-w-[18rem] md:min-w-[22rem]  p-[40px]  flex flex-col">
              <div className="bg-white p-6 shadow-xl rounded-xl px-5 mb-5">
                <div className="grid grid-cols-2 justify-center gap-4 items-center">
                  <div className="m-auto">
                    <DiJavascript className="text-[#03045E]" size={60} />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="text-[#03045E]">JavaScript</h3>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 shadow-xl rounded-xl px-5">
                <div className="grid grid-cols-2 justify-center gap-4 items-center">
                  <div className="m-auto">
                    <SiTypescript className="text-[#03045E]" size={60} />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="text-[#03045E]">Typescript</h3>
                  </div>
                </div>
              </div>
            </m.div>
            <m.div className="min-h-[40rem] min-w-[18rem] md:min-w-[22rem]  p-[40px]  flex flex-col">
              <div className="bg-white p-6 shadow-xl rounded-xl px-5 mb-5">
                <div className="grid grid-cols-2 justify-center gap-4 items-center">
                  <div className="m-auto">
                    <SiReact className="text-[#03045E]" size={60} />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="text-[#03045E]">React.js</h3>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 shadow-xl rounded-xl px-5">
                <div className="grid grid-cols-2 justify-center gap-4 items-center">
                  <div className="m-auto">
                    <SiReact className="text-[#03045E]" size={60} />
                  </div>
                  <div className="flex flex-col justify-center items-center ">
                    <h3 className=" text-[#03045E] ">React native</h3>
                  </div>
                </div>
              </div>
            </m.div>
            <m.div className="min-h-[40rem] min-w-[18rem] md:min-w-[24rem]  p-[40px]  flex flex-col">
              <div className="bg-white p-6 shadow-xl rounded-xl px-5 mb-5">
                <div className="grid grid-cols-2 justify-center gap-4 items-center">
                  <div className="m-auto">
                    <SiNextdotjs className="text-[#03045E]" size={60} />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="text-[#03045E]">Next.js</h3>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 shadow-xl rounded-xl px-5">
                <div className="grid grid-cols-2 justify-center gap-4 items-center">
                  <div className="m-auto">
                    <SiFramer className="text-[#03045E]" size={60} />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="text-[#03045E]">Framer Motion</h3>
                  </div>
                </div>
              </div>
            </m.div>
            <m.div className="min-h-[40rem] min-w-[18rem] md:min-w-[22rem]  p-[40px]  flex flex-col">
              <div className="bg-white p-6 shadow-xl rounded-xl px-5 mb-5">
                <div className="grid grid-cols-2 justify-center gap-4 items-center">
                  <div className="m-auto">
                    <IoLogoNodejs className="text-[#03045E]" size={60} />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="text-[#03045E]">Node.js</h3>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 shadow-xl rounded-xl px-5">
                <div className="grid grid-cols-2 justify-center gap-4 items-center">
                  <div className="m-auto">
                    <SiExpress className="text-[#03045E]" size={60} />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="text-[#03045E]">Express</h3>
                  </div>
                </div>
              </div>
            </m.div>
            <m.div className="min-h-[40rem] min-w-[18rem] md:min-w-[22rem]  p-[40px]  flex flex-col">
              <div className="bg-white p-6 shadow-xl rounded-xl px-5 mb-5">
                <div className="grid grid-cols-2 justify-center gap-4 items-center">
                  <div className="m-auto">
                    <SiEslint className="text-[#03045E]" size={60} />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="text-[#03045E]">ESLint</h3>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 shadow-xl rounded-xl px-5">
                <div className="grid grid-cols-2 justify-center gap-4 items-center">
                  <div className="m-auto">
                    <ImGit className="text-[#03045E]" size={60} />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="text-[#03045E]">Git</h3>
                  </div>
                </div>
              </div>
            </m.div>
            <m.div className="min-h-[40rem] min-w-[18rem] md:min-w-[22rem]  p-[40px]  flex flex-col">
              <div className="bg-white p-6 shadow-xl rounded-xl px-5 mb-5">
                <div className="grid grid-cols-2 justify-center gap-4 items-center">
                  <div className="m-auto">
                    <SiGithub className="text-[#03045E]" size={60} />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="text-[#03045E]">GitHub</h3>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 shadow-xl rounded-xl px-5">
                <div className="grid grid-cols-2 justify-center gap-4 items-center">
                  <div className="m-auto">
                    <SiMongodb className="text-[#03045E]" size={60} />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="text-[#03045E]">MongoDB</h3>
                  </div>
                </div>
              </div>
            </m.div>
            <m.div className="min-h-[40rem] min-w-[18rem] md:min-w-[22rem]  p-[40px]  flex flex-col">
              <div className="bg-white p-6 shadow-xl rounded-xl px-5 mb-5">
                <div className="grid grid-cols-2 justify-center gap-4 items-center">
                  <div className="m-auto">
                    <SiPostgresql className="text-[#03045E]" size={60} />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="text-[#03045E]">PostgreSQL</h3>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 shadow-xl rounded-xl px-5">
                <div className="grid grid-cols-2 justify-center gap-4 items-center">
                  <div className="m-auto">
                    <SiAmazonaws className="text-[#03045E]" size={60} />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="text-[#03045E]">AWS</h3>
                  </div>
                </div>
              </div>
            </m.div>
            <m.div className="min-h-[40rem] min-w-[18rem] md:min-w-[22rem]  p-[40px]  flex flex-col">
              <div className="bg-white p-6 shadow-xl rounded-xl px-5 mb-5">
                <div className="grid grid-cols-2 justify-center gap-4 items-center">
                  <div className="m-auto">
                    <SiFigma className="text-[#03045E]" size={60} />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="text-[#03045E]">Figma</h3>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 shadow-xl rounded-xl px-5">
                <div className="grid grid-cols-2 justify-center gap-4 items-center">
                  <div className="m-auto">
                    <SiTrello className="text-[#03045E]" size={60} />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="text-[#03045E]">Trello</h3>
                  </div>
                </div>
              </div>
            </m.div>
          </m.div>
        </m.div>
      </div>
    </m.div>
  );
};

export default Skills;
