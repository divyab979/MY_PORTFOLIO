import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react';

const ExperienceCards = () => {
    const [portfolioExperience1, setPortfolioExperience1] = useState([]);

    useEffect(() => {
        const fetchPortfolioExperience1 = async () => {
            try {
                const response = await fetch('/api/getExperiences');
                const data = await response.json();
                if (response.ok) {
                    setPortfolioExperience1(data.data);
                } else {
                    console.error('Failed to fetch experiences ');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchPortfolioExperience1();
    }, []);

    return (
        <div className="flex space-x-5 overflow-x-scroll snap-x snap-mandatory">
            {portfolioExperience1.map((post) => (
                <article key={post.id} className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200">
                    <motion.img
                        initial={{
                            y: -100,
                            opacity: 0
                        }}
                        transition={{
                            duration: 1.2
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        viewport={{
                            once: true
                        }}
                        src={post.experienceCompanyImage}
                        className="w-32 h-32 rounded-full xl:w-[200px] object-cover object-center"
                    />

                    <div className="px-0 md:px-10">
                        <h4 className="text-4xl font-light">
                            {post.experienceTitle}
                        </h4>
                        <p className="font-bold text-2xl mt-1">
                            {post.experiencePlace}
                        </p>
                        <div className="flex space-x-2 my-2">
                            <img
                                src={post.experienceSkillUsed}
                                className="h-10 w-10 rounded-full"
                            />
                        </div>
                        <p className="uppercase py-5 text-gray-300">
                            {post.experienceStartDate} - {post.experienceEndDate}
                        </p>
                        <ul className="list-disc space-y-4 ml-5 text-lg">
                            <li>{post.experienceSummary}</li>
                        </ul>
                    </div>
                </article>
            ))}
        </div>
    );
}

export default ExperienceCards;
