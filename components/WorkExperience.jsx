import { motion } from "framer-motion"
import ExperienceCards from "./ExperienceCards"
const WorkExperience = () => {
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
            className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Experience
            </h3>

            <div className="w-full flex space-x-5 overflow-x-scroll mt-56 p-10 snap-x snap-mandatory">
                <ExperienceCards/>
            </div>
        </motion.div>
    )
}

export default WorkExperience