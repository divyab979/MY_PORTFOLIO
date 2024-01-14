import { motion } from "framer-motion";
import React from 'react';
import ProjectCards from "./ProjectCards";


const Projects = () => {
 

  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1.5
      }}
      className=' relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      
      
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        
      <div className="w-full flex space-x-5 overflow-x-scroll mt-32 p-10 snap-x snap-mandatory">

            <ProjectCards/>
          </div>
        
      </div>
      


      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;