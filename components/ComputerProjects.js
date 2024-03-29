import activity from '../public/assets/projects/activity-knot.png';
import todos from '../public/assets/projects/todos.png';
import tilia from '../public/assets/projects/tilia.png';
import picturesque from '../public/assets/projects/picturesque.png';
import elevators from '../public/assets/projects/elevators.png';
import puppy from '../public/assets/projects/puppy.png';
import ProjectItem from './ProjectItem';

import { motion } from 'framer-motion';

const ComputerProjects = () => {
  const animate = {
    offscreen: { x: -1800 },
    onscreen: { x: 0 },
    transition: {
      type: 'spring',
      bounce: '0.1',
      duration: '5s',
      easing: 'ease',
    },
  };

  return (
    <motion.div
      exit={{ opacity: 1 }}
      initial={'offscreen'}
      whileInView={'onscreen'}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.1 }}
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
              projectTitle="Picturesque"
              projectDescription="A nature photography web app"
              backgroundImg={picturesque}
              projectUrl="/picturesque"
            />
          </motion.div>
          <motion.div variants={animate}>
            <ProjectItem
              projectTitle="Firebase Todo App"
              projectDescription="A todo list with Firebase authentication and fetching todos from Firestore"
              backgroundImg={todos}
              projectUrl="/todos"
            />
          </motion.div>
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
              projectTitle="Tilia"
              projectDescription="Web app for a company"
              backgroundImg={tilia}
              projectUrl="/tilia"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ComputerProjects;
