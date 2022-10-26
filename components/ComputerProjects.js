import activity from '../public/assets/projects/activity-knot.png';
import shoppinglist from '../public/assets/projects/shopping-list.png';
import elevators from '../public/assets/projects/elevators.png';
import puppy from '../public/assets/projects/puppy.png';
import ProjectItem from './ProjectItem';

import { motion } from 'framer-motion';

const ComputerProjects = () => {
  const animate = {
    offscreen: { x: -1800 },
    onscreen: { x: 0 },
    rotate: [0, 20, -20, 20, 0],
    transition: {
      type: 'spring',

      bounce: '0.1',
      duration: '7s',
      easing: 'ease',
    },
  };

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={'offscreen'}
      whileInView={'onscreen'}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      id="projects"
      className="w-full"
    >
      <div className=" pt-[7%] m-5  md:mr-5 md:m-5 px-0 md:px-2">
        <p className="uppercase text-xl tracking-widest">Projects</p>
        <h2 className="text-[#ffec43] font-bold mt-3">
          What I have built so far
        </h2>
        <motion.div className="grid md:grid-cols-2 xl:grid-cols-2  gap-8 mt-5">
          <motion.div variants={animate}>
            <ProjectItem
              projectTitle="Activity-Knot"
              projectDescription="A social media app for people who share the same interests"
              backgroundImg={activity}
              projectUrl="/activityknot"
            />
          </motion.div>
          <motion.div variants={animate}>
            <ProjectItem
              projectTitle="Happy-Puppy"
              projectDescription="A fullstack app for dog lovers"
              backgroundImg={puppy}
              projectUrl="/puppy"
            />{' '}
          </motion.div>
          <motion.div variants={animate}>
            <ProjectItem
              projectTitle="Elevators"
              projectDescription="An elevator system with five elevators and 20 floors"
              backgroundImg={elevators}
              projectUrl="/elevators"
            />{' '}
          </motion.div>
          <motion.div variants={animate}>
            <ProjectItem
              projectTitle="Shopping-List"
              projectDescription="A very simple shopping item tracker"
              backgroundImg={shoppinglist}
              projectUrl="/shoppinglist"
            />{' '}
          </motion.div>
          {/* <ProjectItem 
                    projectTitle='Tilia-App' 
                    projectDescription='A page for a company that provides courses'
                    backgroundImg={activity} 
                    projectUrl='/tilia'/> */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ComputerProjects;
