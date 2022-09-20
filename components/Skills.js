import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoNodejs } from 'react-icons/io';
import { DiJavascript } from 'react-icons/di';
import { ImGit } from 'react-icons/im';
import { SiNextdotjs, SiReact, SiGithub, SiAmazonaws, SiMongodb, SiTrello, SiPostgresql, SiEslint, SiFigma, SiTypescript, SiExpress } from 'react-icons/si';
import { motion as m } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';


const Skills = () => {
  const [width, setWidth] = useState(0)
  const carousel = useRef()
 
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    console.log(carousel.current)
  }, [ ])
  

  return (
    <m.div exit={{opacity: 0}} id='skills' className ='w-full lg:h-screen p-2'>
        <div className ='max-w-[1240px] ml-5 flex flex-col justify-center h-full'>
            <p className='text-[#0077B6] uppercase text-xl tracking-widest'>Skills</p>
            <h2 className='text-[#ffec43] font-bold mt-3 mb-10'>What can I do for you?</h2>
            <m.div  
              ref={carousel}
              className='cursor-grab overflow-hidden mx-[5%]'>
              <m.div drag='x' 
                dragConstraints={{right: 0, left: -width}}
                className='flex'>
                <m.div className='min-h-[40rem] min-w-[18rem] md:min-w-[24rem]  p-[40px]  flex flex-col'> 
                  <div className='bg-white p-6 shadow-xl rounded-xl px-5 mb-5'>
                      <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                          <div className='m-auto'>
                              <AiFillHtml5 className='text-[#ff4369]' size={60} />
                          </div> 
                          <div className='flex flex-col justify-center items-center'>
                              <h3 className='text-[#023E8A]'>HTML</h3>
                          </div>
                      </div>
                  </div>
                  <div className='bg-white p-6 shadow-xl rounded-xl px-5'>
                      <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                          <div className='m-auto'>
                              <IoLogoCss3 className='text-[#ff4369]' size={60} />
                          </div> 
                          <div className='flex flex-col justify-center items-center'>
                              <h3 className='text-[#023E8A]'>CSS</h3>
                          </div>
                      </div>
                  </div>
                </m.div>
                <m.div className='min-h-[40rem] min-w-[18rem] md:min-w-[22rem]  p-[40px]  flex flex-col'> 
                  <div className='bg-white p-6 shadow-xl rounded-xl px-5 mb-5'>
                      <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                          <div className='m-auto'>
                              <DiJavascript className='text-[#ff4369]' size={60} />
                          </div> 
                          <div className='flex flex-col justify-center items-center'>
                              <h3 className='text-[#023E8A]'>JavaScript</h3>
                          </div>
                      </div>
                  </div>
                  <div className='bg-white p-6 shadow-xl rounded-xl px-5'>
                      <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                          <div className='m-auto'>
                              <SiTypescript className='text-[#ff4369]' size={60} />
                          </div> 
                          <div className='flex flex-col justify-center items-center'>
                              <h3 className='text-[#023E8A]'>Typescript</h3>
                          </div>
                      </div>
                  </div>
                </m.div>
                <m.div className='min-h-[40rem] min-w-[18rem] md:min-w-[22rem]  p-[40px]  flex flex-col'> 
                  <div className='bg-white p-6 shadow-xl rounded-xl px-5 mb-5'>
                      <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                          <div className='m-auto'>
                              <SiReact className='text-[#ff4369]' size={60} />
                          </div> 
                          <div className='flex flex-col justify-center items-center'>
                              <h3 className='text-[#023E8A]'>React.js</h3>
                          </div>
                      </div>
                  </div>
                  <div className='bg-white p-6 shadow-xl rounded-xl px-5'>
                      <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                          <div className='m-auto'>
                              <SiNextdotjs className='text-[#ff4369]' size={60} />
                          </div> 
                          <div className='flex flex-col justify-center items-center'>
                              <h3 className='text-[#023E8A]'>Next.js</h3>
                          </div>
                      </div>
                  </div>
                </m.div>
                <m.div className='min-h-[40rem] min-w-[18rem] md:min-w-[22rem]  p-[40px]  flex flex-col'> 
                  <div className='bg-white p-6 shadow-xl rounded-xl px-5 mb-5'>
                      <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                          <div className='m-auto'>
                              <IoLogoNodejs className='text-[#ff4369]' size={60} />
                          </div> 
                          <div className='flex flex-col justify-center items-center'>
                              <h3 className='text-[#023E8A]'>Node.js</h3>
                          </div>
                      </div>
                  </div>
                  <div className='bg-white p-6 shadow-xl rounded-xl px-5'>
                      <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                          <div className='m-auto'>
                              <SiExpress className='text-[#ff4369]' size={60} />
                          </div> 
                          <div className='flex flex-col justify-center items-center'>
                              <h3 className='text-[#023E8A]'>Express</h3>
                          </div>
                      </div>
                  </div>
                </m.div>
                <m.div className='min-h-[40rem] min-w-[18rem] md:min-w-[22rem]  p-[40px]  flex flex-col'> 
                  <div className='bg-white p-6 shadow-xl rounded-xl px-5 mb-5'>
                      <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                          <div className='m-auto'>
                              <SiEslint className='text-[#ff4369]' size={60} />
                          </div> 
                          <div className='flex flex-col justify-center items-center'>
                              <h3 className='text-[#023E8A]'>ESLint</h3>
                          </div>
                      </div>
                  </div>
                  <div className='bg-white p-6 shadow-xl rounded-xl px-5'>
                      <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                          <div className='m-auto'>
                              <ImGit className='text-[#ff4369]' size={60} />
                          </div> 
                          <div className='flex flex-col justify-center items-center'>
                              <h3 className='text-[#023E8A]'>Git</h3>
                          </div>
                      </div>
                  </div>
                </m.div>
                <m.div className='min-h-[40rem] min-w-[18rem] md:min-w-[22rem]  p-[40px]  flex flex-col'> 
                  <div className='bg-white p-6 shadow-xl rounded-xl px-5 mb-5'>
                      <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                          <div className='m-auto'>
                              <SiGithub className='text-[#ff4369]' size={60} />
                          </div> 
                          <div className='flex flex-col justify-center items-center'>
                              <h3 className='text-[#023E8A]'>GitHub</h3>
                          </div>
                      </div>
                  </div>
                  <div className='bg-white p-6 shadow-xl rounded-xl px-5'>
                      <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                          <div className='m-auto'>
                              <SiMongodb className='text-[#ff4369]' size={60} />
                          </div> 
                          <div className='flex flex-col justify-center items-center'>
                              <h3 className='text-[#023E8A]'>MongoDB</h3>
                          </div>
                      </div>
                  </div>
                </m.div>
                <m.div className='min-h-[40rem] min-w-[18rem] md:min-w-[22rem]  p-[40px]  flex flex-col'> 
                  <div className='bg-white p-6 shadow-xl rounded-xl px-5 mb-5'>
                      <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                          <div className='m-auto'>
                              <SiPostgresql className='text-[#ff4369]' size={60} />
                          </div> 
                          <div className='flex flex-col justify-center items-center'>
                              <h3 className='text-[#023E8A]'>PostgreSQL</h3>
                          </div>
                      </div>
                  </div>
                  <div className='bg-white p-6 shadow-xl rounded-xl px-5'>
                      <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                          <div className='m-auto'>
                              <SiAmazonaws className='text-[#ff4369]' size={60} />
                          </div> 
                          <div className='flex flex-col justify-center items-center'>
                              <h3 className='text-[#023E8A]'>AWS</h3>
                          </div>
                      </div>
                  </div>
                </m.div>
                <m.div className='min-h-[40rem] min-w-[18rem] md:min-w-[22rem]  p-[40px]  flex flex-col'> 
                  <div className='bg-white p-6 shadow-xl rounded-xl px-5 mb-5'>
                      <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                          <div className='m-auto'>
                              <SiFigma className='text-[#ff4369]' size={60} />
                          </div> 
                          <div className='flex flex-col justify-center items-center'>
                              <h3 className='text-[#023E8A]'>Figma</h3>
                          </div>
                      </div>
                  </div>
                  <div className='bg-white p-6 shadow-xl rounded-xl px-5'>
                      <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                          <div className='m-auto'>
                              <SiTrello className='text-[#ff4369]' size={60} />
                          </div> 
                          <div className='flex flex-col justify-center items-center'>
                              <h3 className='text-[#023E8A]'>Trello</h3>
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