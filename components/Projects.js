import React from 'react';
import activity from '../public/assets/projects/activity-knot.png';
import shoppinglist from '../public/assets/projects/shopping-list.png';
import elevators from '../public/assets/projects/elevators.png';
import puppy from '../public/assets/projects/puppy.png';
import ProjectItem from './ProjectItem';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.div exit={{ opacity: 0 }} id="projects" className="w-full">
      <div className=" pt-[7%] mr-0 ml-5 md:m-5 px-0 md:px-2">
        <p className="uppercase text-xl tracking-widest">Projects</p>
        <h2 className="text-[#ffec43] font-bold mt-3">
          What I have built so far
        </h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3  gap-8 mt-5">
          <ProjectItem
            projectTitle="Activity-Knot"
            projectDescription="A social media app for people who share the same interests"
            backgroundImg={activity}
            projectUrl="/activityknot"
          />
          <ProjectItem
            projectTitle="Happy-Puppy"
            projectDescription="A fullstack app for dog lovers"
            backgroundImg={puppy}
            projectUrl="/puppy"
          />
          <ProjectItem
            projectTitle="Elevators"
            projectDescription="An elevator system with five elevators and 20 floors"
            backgroundImg={elevators}
            projectUrl="/elevators"
          />
          <ProjectItem
            projectTitle="Shopping-List"
            projectDescription="A very simple shopping item tracker"
            backgroundImg={shoppinglist}
            projectUrl="/shoppinglist"
          />
          {/* <ProjectItem 
                    projectTitle='Tilia-App' 
                    projectDescription='A page for a company that provides courses'
                    backgroundImg={activity} 
                    projectUrl='/tilia'/> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
