import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Three from './Three';

const About = () => {
  return (
    <div
      exit={{ opacity: 0 }}
      id="about"
      className="mr-0 ml-5 pb-[95%] md:pb-[5%] md:m-5"
    >
      <div className="md:mr-5 md:h-screen flex flex-col   items-start sticky w-full lg:h-screen pt-[7%]">
        <div className="flex flex-col justify-start mb-[5%] px-0 md:px-2  ">
          <p className=" uppercase text-xl tracking-widest">About me</p>
          <h2 className="text-[#ffec43] font-bold mt-3">Who am I?</h2>
          <p className="text-white">
            Click on one of the objects to find out more about me!
          </p>
        </div>
        <Canvas className="w-[100%]" id="three-canvas-container" shadows>
          <Suspense fallback={<></>}>
            <Three />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default About;
