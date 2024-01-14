import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react';

function Skill_button({ directionLeft }) {
  const [portfolioProficiency1, setPortfolioProficiency1] = useState([]);

  useEffect(() => {
    const fetchPortfolioProficiency1 = async () => {
      try {
        const response = await fetch('/api/getProficiency');
        const data = await response.json();
        if (response.ok) {
          setPortfolioProficiency1(data.data);
        } else {
          console.error('Failed to fetch skills ');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPortfolioProficiency1();
  }, []);

  const imageSize = '24px'; // Change this value according to your needs

  return (
    <div className="grid grid-cols-4 gap-4 justify-center">
      {portfolioProficiency1.map((post) => (
        <div key={post.id} className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            src={post.profImage}
            className={` object-cover w-${imageSize} h-${imageSize} xl:h-32 group-hover:grayscale transition duration-300 ease-in-out`}
          />

          <div className={`absolute rounded-full top-0 bottom-0 left-0 right-0 opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#f7ab0a] ${imageSize} ${imageSize} md:w-${imageSize} md:h-${imageSize} xl:w-32 xl:h-32 z-0`}>
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">{post.profAmount}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skill_button;
