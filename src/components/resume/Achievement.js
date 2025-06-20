import React from 'react'
import { motion } from 'framer-motion'
import ResumeCard from './ResumeCard'

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Finalist National Coding Challenge"
            subTitle="Organized By EduPi"
            result="Certified"
            des="Participated in a  coding competition, solving complex algorithmic and problem-solving challenges under timed conditions. Demonstrated expertise in data structures, algorithms, and full-stack web development. Successfully developed optimized solutions and competed against top programmers from various institutions."
          />
          <ResumeCard
            title="Finalist MERN Stack Bootcamp"
            subTitle="Organized By Department of Computer Application, AISC"
            result="Certified"
            des="Gained hands-on experience in building web applications using the MERN stack. Focused on developing a full-stack bookstore application with features like user authentication, book management, and order processing. Learned about MVC architecture, database design, and REST API integration while implementing a seamless shopping experience."
          />
          <ResumeCard
            title="Online Web Development Certification"
            subTitle="Organized By Udemy"
            result="Certified"
            des="Completed a comprehensive web development course covering HTML, CSS, JavaScript, and React.js. Learned to create responsive, user-friendly interfaces and gained practical skills in building modern web applications."
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Achievement
