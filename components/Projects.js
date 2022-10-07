import React from 'react';
import activity from '../public/assets/projects/activity-knot.png';
import shoppinglist from '../public/assets/projects/shopping-list.png';
import elevators from '../public/assets/projects/elevators.png';
import puppy from '../public/assets/projects/puppy.png';
import ProjectItem from './ProjectItem';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      id="projects"
      className="w-full xs:mr-5 sm:mr-5"
    >
      <div className="max-w-[1240px] mx-auto px-2 pt-[7%] ml-5">
        <p className="text-[#0077B6] uppercase text-xl tracking-widest">
          Projects
        </p>
        <h2 className="text-[#ffec43] font-bold mt-3">
          What I have built so far
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mt-5">
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
