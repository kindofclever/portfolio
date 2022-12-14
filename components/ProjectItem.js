import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

const ProjectItem = ({
  projectTitle,
  projectDescription,
  backgroundImg,
  projectUrl,
}) => {
  return (
    <div>
      <div className="relative flex justify-center items-center bg-white p-4 h-auto w-full shadow-xl rounded-xl group hover:bg-[#03045E]">
        <Image
          className="rounded-xl group-hover:opacity-[0.05] p-4"
          src={backgroundImg}
          alt={projectDescription}
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-white tracking-wider text-center">
            {projectTitle}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">
            "{projectDescription}"
          </p>
          <motion.div
            whileHover={{
              scale: 1.1,
              boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
            }}
          >
            <Link href={projectUrl}>
              <p className="text-center py-3 rounded-xl bg-white text-[#03045E] font-bold text-lg cursor-pointer hover:scale-105">
                More Info
              </p>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
