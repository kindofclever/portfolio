import { Suspense } from 'react';

import { Canvas } from '@react-three/fiber';
import Three from './Three';

const About = () => {
  return (
    <div exit={{ opacity: 0 }} id="about" className=" m-5 pb-[95%] md:pb-[5%]">
      <div className="md:mr-5 md:h-screen flex flex-col   items-start sticky w-full lg:h-screen pt-[7%]">
        <div className="flex flex-col justify-start px-0 md:px-2  ">
          <p className=" uppercase text-xl tracking-widest">About me</p>
          <h2 className="text-[#ffec43] font-bold mt-3">Who am I?</h2>
          <p className="text-white">
            Click on one of the objects to find out more about me!
          </p>
        </div>
        <div className="w-full mt-[20%] md:mt-2 mx-auto h-full">
          <Canvas className="" id="three-canvas-container" shadows>
            <Suspense fallback={<></>}>
              <Three />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default About;
