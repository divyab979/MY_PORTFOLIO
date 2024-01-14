import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react';

const ProjectCards = () => {
    const [portfolioBuild1, setPortfolioBuild1] = useState([]);

    useEffect(() => {
        const fetchPortfolioBuild1 = async () => {
            try {
                const response = await fetch('/api/getBuilds');
                const data = await response.json();
                if (response.ok) {
                    setPortfolioBuild1(data.data);
                } else {
                    console.error('Failed to fetch Builds ');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchPortfolioBuild1();
    }, []);

    return (
        <div className="flex space-x-5 overflow-x-scroll snap-x snap-mandatory">
            {portfolioBuild1.map((post) => (
                <article key={post.id} className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 cursor-pointer ">
                    <a href={post.buildLink} target="_blank" rel="noopener noreferrer">
                    <motion.img
                        initial={{
                            y: -300,
                            opacity: 0
                        }}
                        transition={{
                            duration: 1.2
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        inView={{
                            once: true
                        }}
                        src={post.buildImage}
                    />
                    </a>
                    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-4xl font-semibold text-center">

                            {post.buildTitle}
                        </h4>
                        <p className="text-lg text-center md:text-left">
                            {post.buildDescription}
                        </p>
                    </div>
                </article>
            ))}
        </div>
    );
}

export default ProjectCards;
