import activity from '../public/assets/projects/activity-knot.png';
import todos from '../public/assets/projects/todos.png';
import tilia from '../public/assets/projects/tilia.png';
import picturesque from '../public/assets/projects/picturesque.png';
import elevators from '../public/assets/projects/elevators.png';
import puppy from '../public/assets/projects/puppy.png';
import ProjectItem from './ProjectItem';

import { motion, Variants } from 'framer-motion';

const PhoneProjects = () => {
  return (
    <motion.div exit={{ opacity: 0 }} id="projects" className="w-full">
      <div className=" pt-[7%] m-5  md:mr-5 md:m-5 px-0 md:px-2">
        <p className="uppercase text-xl tracking-widest">Projects</p>
        <h2 className="text-[#ffec43] font-bold mt-3">
          What I have built so far
        </h2>
        <motion.div className="grid md:grid-cols-2 xl:grid-cols-2  gap-8 mt-5">
          <ProjectItem
            projectTitle="Picturesque"
            projectDescription="A web app to share nature photography"
            backgroundImg={picturesque}
            projectUrl="/picturesque"
          />
          <ProjectItem
            projectTitle="Todo App"
            projectDescription="A todo app with Firebase authentication"
            backgroundImg={todos}
            projectUrl="/todos"
          />
          <ProjectItem
            projectTitle="Activity-Knot"
            projectDescription="A social media app for people who share the same interests"
            backgroundImg={activity}
            projectUrl="/activityknot"
          />
          <ProjectItem
            projectTitle="Tilia-App"
            projectDescription="A page for a company that provides courses"
            backgroundImg={tilia}
            projectUrl="/tilia"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PhoneProjects;
