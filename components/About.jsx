import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react';
const About = () => {

  const [portfolioAbout1, setPortfolioAbout1] = useState([]);

  useEffect(() => {
    const fetchPortfolioAbout1 = async () => {
      try {
        const response = await fetch('/api/getAbouts');
        const data = await response.json();
        if (response.ok) {
          setPortfolioAbout1(data.data);
        } else {
          console.error('Failed to fetch abouts ');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPortfolioAbout1();
  }, []);

  return (
    <motion.div
      initial={{
        x: -200,
        opacity: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      whileInView={{
        opacity: 1,
        x: 0
      }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>
      {portfolioAbout1.map((post) => (

        <div className="flex mt-56">
          <motion.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{ once: true }}
            src={post.aboutImage}
            className="bg-white -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96"
          />

          <div className="space-y-10 px-0 md:px-10 md:mt-32 mt-14">
            <h4 className="text-4xl font-semibold">
              {post.aboutTitle}
            </h4>
            <p className="text-base">
              {post.aboutDescription}
            </p>
          </div>
        </div>
      ))}
    </motion.div>
  )
}

export default About