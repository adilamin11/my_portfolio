import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educational Qualifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BCA in Computer applications"
            subTitle="Savitribai Phule University, Pune (2022 - 2025)"
            result="8.8/10"
            des="Focused on core subjects like Data Structures, Algorithms, Database Management, and Software Development. Completed projects on web development, PHP & Mysl, and cloud computing, enhancing my technical and problem-solving skills."
          />
          <ResumeCard
            title="Higher Secondary Education"
            subTitle="Govt.Boys Higher Secondary School Unisoo Kupwara J&K (2020 - 2022)"
            result="84.63%"
            des="Focused on  Science, developing strong analytical and logical reasoning skills. This foundation helped me transition effectively into computer science studies at the undergraduate level."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Govt.Boys High School Mandigam kupwara J&K (2017 - 2019)"
            result="74%"
            des="Built a solid academic foundation with an emphasis on Science and Mathematics. Participated in extracurricular activities, fostering teamwork, discipline, and a curiosity for learning new concepts."
          />
        </div>
      </div>
     
    </motion.div>
  );
};

export default Education;
